import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from './Reveal'

// Headline that rises word-by-word out of a mask. Used for section titles so
// every section shares one signature move, while the blocks below differ.
export default function TextReveal({ text, className = '', delay = 0, stagger = 0.055, as = 'h2' }) {
  const reduced = useReducedMotion()
  const Tag = motion[as] ?? motion.h2
  const words = String(text).split(' ')

  return (
    <Tag
      className={className}
      initial={reduced ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-70px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        // Extra padding keeps descenders (g, y) from being clipped by the mask.
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]"
        >
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: '110%' }, show: { y: 0 } }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  )
}
