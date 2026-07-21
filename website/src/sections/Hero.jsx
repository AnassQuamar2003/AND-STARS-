import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Play, ChevronDown } from 'lucide-react'
import { brand } from '../data/site'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — static layers only, so nothing repaints while scrolling. */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* purple glow blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-violet/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-indigo/20 blur-[140px]" />
      </div>

      {/* Glowing globe — white background keyed out, composited over black and
          screen-blended so only the violet glow shows over the hero background.
          Deliberately not scroll-animated: a blended full-screen layer repaints
          the whole hero on every frame. */}
      <video
        className="pointer-events-none absolute inset-0 z-[1] w-full h-full object-contain mix-blend-screen"
        src="/videos/globe.mp4"
        poster="/videos/globe-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />

      <motion.div style={{ y, opacity }} className="container-x relative z-10 pt-28 pb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-wide text-mist mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-violet animate-twinkle" />
          Web design & software agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
        >
          We build websites <br className="hidden sm:block" />
          that <span className="text-gradient">grow your business.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-mist text-lg md:text-xl max-w-2xl mx-auto mt-7"
        >
          {brand.mission}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="eyebrow mt-6"
        >
          {brand.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <Link to="/contact" className="btn-primary">
            Get a Free Quote <ArrowUpRight size={18} />
          </Link>
          <Link to="/work" className="btn-ghost">
            <Play size={16} /> View Our Work
          </Link>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-mist"
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-float" />
      </motion.div>
    </section>
  )
}
