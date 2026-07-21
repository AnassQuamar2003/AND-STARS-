import { motion } from 'framer-motion'

// Wraps a page hero header + animated entrance for inner pages.
export function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-80 bg-violet/20 blur-[120px] rounded-full" />
      <div className="container-x relative text-center">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="font-display text-4xl md:text-6xl font-semibold mt-4 leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-mist text-lg max-w-2xl mx-auto mt-5"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}

export default function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}
