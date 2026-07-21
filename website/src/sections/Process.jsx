import { motion } from 'framer-motion'
import { EASE } from '../components/Reveal'
import { Stagger, StaggerItem } from '../components/Stagger'
import SectionHeader from '../components/SectionHeader'
import { process } from '../data/site'

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-surface/30 border-y border-line">
      <div className="container-x">
        <SectionHeader
          eyebrow="How we work"
          title="A simple, proven process"
          subtitle="Clear steps, no surprises — from first call to launch and beyond."
        />
        {/* Steps arrive left to right; each connector draws itself after its step. */}
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative" stagger={0.14}>
          {process.map((p, i) => (
            <StaggerItem key={p.step} variant="left">
              <div className="relative h-full">
                <div className="font-display text-5xl font-bold text-gradient mb-4">{p.step}</div>
                <h3 className="font-display font-semibold text-xl mb-2">{p.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{p.text}</p>
                {i < process.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-6 -right-3 w-6 h-px origin-left bg-gradient-to-r from-violet to-transparent"
                    variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
                    transition={{ duration: 0.45, delay: 0.25, ease: EASE }}
                  />
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
