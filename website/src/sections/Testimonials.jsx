import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { testimonials } from '../data/site'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (d) => setI((prev) => (prev + d + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader eyebrow="Kind words" title="Clients who reached for the stars" />

        <div className="max-w-3xl mx-auto glass rounded-3xl p-10 md:p-14 relative text-center">
          <Quote className="mx-auto text-violet-bright mb-6" size={40} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-display text-xl md:text-2xl leading-relaxed">"{t.quote}"</p>
              <div className="flex justify-center gap-1 mt-6 text-violet-bright">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-semibold mt-5">{t.name}</p>
              <p className="text-mist text-sm">{t.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => go(-1)} className="w-10 h-10 grid place-items-center rounded-full border border-line hover:border-violet transition-colors" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, d) => (
                <button
                  key={d}
                  onClick={() => setI(d)}
                  className={`w-2 h-2 rounded-full transition-all ${d === i ? 'bg-violet w-6' : 'bg-line'}`}
                  aria-label={`Go to testimonial ${d + 1}`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} className="w-10 h-10 grid place-items-center rounded-full border border-line hover:border-violet transition-colors" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
