import { Link } from 'react-router-dom'
import { Stagger, StaggerItem } from '../components/Stagger'
import SectionHeader from '../components/SectionHeader'
import Icon from '../components/Icon'
import { industries } from '../data/site'

export default function Industries({ full = false }) {
  const list = full ? industries : industries
  return (
    <section className="py-24 md:py-32 bg-surface/30 border-y border-line" id="industries">
      <div className="container-x">
        <SectionHeader
          eyebrow="Who we help"
          title="Built for your industry"
          subtitle="We speak your customers' language — with sites tailored to how each business wins online."
        />

        {/* Cards tip up from flat, like a hand of cards being laid down. */}
        <Stagger
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [perspective:1200px]"
          stagger={0.07}
        >
          {list.map((ind) => (
            <StaggerItem key={ind.name} variant="flip">
              <Link
                to="/industries"
                className="glass glass-hover rounded-2xl p-6 h-full block group"
              >
                <div className="w-11 h-11 rounded-xl grid place-items-center bg-violet/15 text-violet-bright mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={ind.icon} size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg">{ind.name}</h3>
                <p className="text-mist text-sm mt-2 leading-relaxed">{ind.hook}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
