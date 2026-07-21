import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Play, ChevronDown } from 'lucide-react'
import { brand } from '../data/site'

// Hero with muted looping video background.
// Swap the video: drop your file at /public/videos/hero.mp4 (kept below as <source>).
// Falls back to a free remote clip so it works before you add your own.
const REMOTE_FALLBACK =
  'https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-1584/1080p.mp4'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster=""
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src={REMOTE_FALLBACK} type="video/mp4" />
        </video>
        {/* overlays */}
        <div className="absolute inset-0 bg-ink/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* purple glow blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-violet/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-indigo/20 blur-[140px]" />
      </div>

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
