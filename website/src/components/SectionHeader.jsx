import Reveal from './Reveal'
import TextReveal from './TextReveal'

export default function SectionHeader({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-14`}>
      {eyebrow && (
        <Reveal variant="fade" duration={0.5}>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <TextReveal
        text={title}
        delay={0.05}
        className="font-display text-3xl md:text-5xl font-semibold mt-4 leading-tight"
      />
      {subtitle && (
        <Reveal variant="up" delay={0.18} duration={0.6}>
          <p className="text-mist mt-4 text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
