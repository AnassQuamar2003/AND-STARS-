import Reveal from '../components/Reveal'
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="relative h-full">
                <div className="font-display text-5xl font-bold text-gradient mb-4">{p.step}</div>
                <h3 className="font-display font-semibold text-xl mb-2">{p.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{p.text}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-3 w-6 h-px bg-gradient-to-r from-violet to-transparent" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
