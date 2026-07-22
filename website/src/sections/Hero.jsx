import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { ArrowUpRight, Play, ChevronDown } from 'lucide-react'
import { brand } from '../data/site'
import { EASE } from '../components/Reveal'
import Icon from '../components/Icon'

// Icon chips that float along the hero's side rails — wide screens only, so
// they sit in the gutter outside the centered copy instead of crowding it.
const SIDE_ICONS_LEFT = [
  { name: 'Layout', top: '22%', duration: 6, delay: '0s' },
  { name: 'Boxes', top: '50%', duration: 7, delay: '0.8s' },
  { name: 'ShieldCheck', top: '76%', duration: 6.5, delay: '1.6s' },
]
const SIDE_ICONS_RIGHT = [
  { name: 'ShoppingBag', top: '20%', duration: 6.5, delay: '0.4s' },
  { name: 'Wand2', top: '48%', duration: 6, delay: '1.2s' },
  { name: 'Sparkles', top: '74%', duration: 7, delay: '0.2s' },
]

// Faint stars scattered around the globe for depth. Fixed positions (not
// random) so layout never shifts between renders.
const PARTICLES = [
  { top: '16%', left: '10%', size: 4, delay: '0s' },
  { top: '28%', left: '86%', size: 3, delay: '0.6s' },
  { top: '62%', left: '6%', size: 3, delay: '1.3s' },
  { top: '78%', left: '92%', size: 4, delay: '0.2s' },
  { top: '10%', left: '58%', size: 3, delay: '1.7s' },
  { top: '88%', left: '48%', size: 3, delay: '0.9s' },
  { top: '46%', left: '94%', size: 3, delay: '1.1s' },
]

// Word-by-word mask reveal — each word rises out of a clipped box so the
// headline reads as one continuous kinetic move rather than a block fade.
const headlineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
}
const wordVariant = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.75, ease: EASE } },
}
function Word({ children }) {
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
      <motion.span className="inline-block" variants={wordVariant}>
        {children}
      </motion.span>
    </span>
  )
}

// Pointer-follow glow, desktop-only. A fixed-size blurred circle moved with
// `transform: translate3d()` — cheap, because the browser rasterizes the
// blur once and just repositions that layer instead of repainting a
// full-viewport gradient on every mouse pixel.
function PointerGlow({ containerRef }) {
  const dotRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const dot = dotRef.current
    if (!container || !dot) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let raf = 0
    let x = 0
    let y = 0
    function apply() {
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      raf = 0
    }
    function onMove(e) {
      const rect = container.getBoundingClientRect()
      x = e.clientX - rect.left
      y = e.clientY - rect.top
      if (!raf) raf = requestAnimationFrame(apply)
    }
    container.addEventListener('pointermove', onMove)
    return () => {
      container.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [containerRef])

  return (
    <div
      ref={dotRef}
      className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-160 h-160 rounded-full bg-violet/20 blur-[120px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ willChange: 'transform' }}
    />
  )
}

// One side rail: a falling light beam plus a few floating icon chips.
function SideRail({ side, icons }) {
  const edge = side === 'left' ? 'left-6 2xl:left-14' : 'right-6 2xl:right-14'
  return (
    <div className={`pointer-events-none hidden lg:block absolute top-0 bottom-0 z-2 ${edge}`}>
      {/* falling light beam */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent overflow-hidden">
        <div
          className="w-px h-28 bg-gradient-to-b from-transparent via-violet-bright to-transparent animate-beam"
          style={{ animationDelay: side === 'left' ? '0s' : '2.2s' }}
        />
      </div>

      {/* floating icon chips — wide screens only, so they never crowd the copy */}
      <div className="hidden 2xl:block">
        {icons.map((ic) => (
          <motion.div
            key={ic.name}
            initial={{ opacity: 0, x: side === 'left' ? -24 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: ic.top, left: '50%' }}
          >
            {/* Solid tint, not `.glass` — a moving backdrop-blur chip forces a
                re-blur of whatever's behind it every frame; not worth the
                cost for a small decorative icon. */}
            <div
              className="rounded-2xl p-3 bg-surface-2/90 border border-line animate-float"
              style={{ animationDuration: `${ic.duration}s`, animationDelay: ic.delay }}
            >
              <Icon name={ic.name} size={20} className="text-violet-bright" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const globeRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // A blended full-screen video keeps decoding even once you've scrolled
  // past it — pause it once the hero leaves the viewport.
  useEffect(() => {
    const video = globeRef.current
    if (!video) return
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? video.play().catch(() => {}) : video.pause()),
      { threshold: 0 }
    )
    io.observe(video)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="group relative min-h-screen flex items-center overflow-hidden">
      {/* Background — static/looping layers only, so nothing repaints while scrolling. */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* drifting aurora blobs */}
        <div className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full bg-violet/30 blur-[130px] animate-aurora" />
        <div className="absolute bottom-0 right-0 w-[38rem] h-[38rem] rounded-full bg-indigo/20 blur-[150px] animate-aurora-slow" />
        {/* pointer-follow spotlight */}
        <PointerGlow containerRef={ref} />
        {/* vignette to keep the frame edges dark and the copy readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink" />
      </div>

      {/* faint stars */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-violet-bright/80 animate-twinkle shadow-[0_0_6px_2px_rgba(167,139,250,0.5)]"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
          />
        ))}
      </div>

      {/* orbiting ring behind the globe — a slow-spinning dashed circle for a touch of "cinematic tech" */}
      <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-[84vw] max-w-195 opacity-30 animate-spin-slow"
        >
          <circle
            cx="200"
            cy="200"
            r="188"
            fill="none"
            stroke="var(--color-violet-bright)"
            strokeWidth="1"
            strokeDasharray="2 14"
          />
        </svg>
      </div>

      {/* Glowing globe. The source clip is a circle on a black rectangular
          canvas — a CSS radial mask fades that rectangle to nothing right
          at the globe's own edge, so no blend mode is needed to hide it.
          (mix-blend-screen would do the same job but forces the browser to
          recompute pixel blending on this full video every decoded frame;
          a mask is computed once per composite, not per frame.) */}
      <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center">
        <div
          className="w-[92vw] max-w-[1400px] aspect-[1280/852] scale-100"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 39% 58% at 49% 49%, #000 0%, #000 68%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 39% 58% at 49% 49%, #000 0%, #000 68%, transparent 100%)',
          }}
        >
          <video
            ref={globeRef}
            className="w-full h-full object-cover"
            src="/videos/globe.mp4"
            poster="/videos/globe-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      <SideRail side="left" icons={SIDE_ICONS_LEFT} />
      <SideRail side="right" icons={SIDE_ICONS_RIGHT} />

      <motion.div style={{ y, opacity }} className="container-x relative z-10 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative inline-flex mb-8"
        >
          <span className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-wide text-mist">
            <span className="w-2 h-2 rounded-full bg-violet animate-twinkle" />
            Web design & software agency
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={headlineContainer}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
        >
          <Word>We</Word> <Word>build</Word> <Word>websites</Word>
          <br className="hidden sm:block" />
          <Word>that</Word>{' '}
          <span className="text-gradient">
            <Word>grow</Word> <Word>your</Word> <Word>business.</Word>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-mist text-lg md:text-xl max-w-2xl mx-auto mt-7"
        >
          {brand.mission}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="eyebrow mt-6"
        >
          {brand.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <Link to="/contact" className="btn-primary group">
            <span className="relative z-10 inline-flex items-center gap-2">
              Get a Free Quote <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            {/* shine sweep on hover */}
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-white/25 -skew-x-12 -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
            </span>
          </Link>
          <Link to="/work" className="btn-ghost group">
            <Play size={16} className="transition-transform duration-300 group-hover:scale-110" /> View Our Work
          </Link>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-mist"
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-violet-bright"
          />
        </span>
      </motion.div>
    </section>
  )
}
