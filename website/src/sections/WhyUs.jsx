import { Stagger, StaggerItem } from '../components/Stagger'
import SectionHeader from '../components/SectionHeader'
import Icon from '../components/Icon'
import { whyUs } from '../data/site'

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Why AND STARS"
          title="A partner, not just a vendor"
          subtitle="We care about your results as much as our craft."
        />
        {/* Cards pull into focus. Blur is the one non-compositor animation
            here, so it stays on four small cards only. */}
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {whyUs.map((w) => (
            <StaggerItem key={w.title} variant="blur" duration={0.8}>
              <div className="glass glass-hover rounded-2xl p-7 h-full text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl grid place-items-center bg-gradient-to-br from-violet to-indigo text-white mb-5">
                  <Icon name={w.icon} size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{w.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{w.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
