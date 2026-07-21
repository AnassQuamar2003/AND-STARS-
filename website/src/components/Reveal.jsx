import { motion, useReducedMotion } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1]

// Scroll-reveal variants. Everything animates transform/opacity so the
// compositor can handle it — except `blur`, kept for small elements only.
export const revealVariants = {
  up: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -28 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -56 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 56 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.88, y: 24 }, show: { opacity: 1, scale: 1, y: 0 } },
  flip: { hidden: { opacity: 0, rotateX: -40, y: 30 }, show: { opacity: 1, rotateX: 0, y: 0 } },
  tilt: { hidden: { opacity: 0, rotate: -3, scale: 0.94, y: 30 }, show: { opacity: 1, rotate: 0, scale: 1, y: 0 } },
  blur: { hidden: { opacity: 0, filter: 'blur(12px)', y: 18 }, show: { opacity: 1, filter: 'blur(0px)', y: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
}

// Wrap any block. `variant` picks how it enters.
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 0.7,
  y,
  className = '',
}) {
  const reduced = useReducedMotion()
  const preset = revealVariants[variant] ?? revealVariants.up
  // Legacy escape hatch: <Reveal y={60} /> still tunes the travel distance.
  const hidden = y != null && variant === 'up' ? { opacity: 0, y } : preset.hidden

  return (
    <motion.div
      className={className}
      initial={reduced ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden, show: preset.show }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
