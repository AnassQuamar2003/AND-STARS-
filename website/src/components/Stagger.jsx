import { motion, useReducedMotion } from 'framer-motion'
import { EASE, revealVariants } from './Reveal'

// Grid/list wrapper: children animate in one after another off a single
// viewport trigger, instead of each child running its own observer.
export function Stagger({ children, className = '', stagger = 0.09, delay = 0.05 }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-90px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

// One item inside a <Stagger>. Same variant names as <Reveal>.
export function StaggerItem({ children, variant = 'up', duration = 0.65, className = '' }) {
  const preset = revealVariants[variant] ?? revealVariants.up
  return (
    <motion.div className={className} variants={preset} transition={{ duration, ease: EASE }}>
      {children}
    </motion.div>
  )
}
