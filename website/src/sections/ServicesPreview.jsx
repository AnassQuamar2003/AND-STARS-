import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import Icon from '../components/Icon'
import { services } from '../data/site'

const iconMap = {
  'web-design': 'Layout',
  ecommerce: 'ShoppingBag',
  'web-apps': 'Boxes',
  redesign: 'Wand2',
  maintenance: 'ShieldCheck',
}

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32" id="services">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we do"
          title="Services that ship results"
          subtitle="From a single landing page to full-scale web platforms — designed to convert and built to last."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <Link
                to="/services"
                className="glass glass-hover rounded-2xl p-7 h-full flex flex-col group"
              >
                <div className="w-12 h-12 rounded-xl grid place-items-center bg-violet/15 text-violet-bright mb-5 group-hover:scale-110 transition-transform">
                  <Icon name={iconMap[s.id]} size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-mist text-sm leading-relaxed flex-1">{s.blurb}</p>
                <span className="inline-flex items-center gap-1 text-sm text-violet-bright mt-5 group-hover:gap-2 transition-all">
                  Learn more <ArrowUpRight size={15} />
                </span>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <Link
              to="/contact"
              className="rounded-2xl p-7 h-full flex flex-col justify-between bg-gradient-to-br from-violet-deep to-indigo glow"
            >
              <h3 className="font-display text-xl font-semibold">Not sure what you need?</h3>
              <p className="text-white/80 text-sm mt-2">Book a free consultation and we'll map the right plan for your business.</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold mt-5">
                Talk to us <ArrowUpRight size={15} />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
