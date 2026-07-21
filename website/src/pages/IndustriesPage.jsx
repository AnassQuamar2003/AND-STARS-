import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/PageShell'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CTABand from '../sections/CTABand'
import { industries } from '../data/site'

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Websites tailored to your world"
        subtitle="Every industry sells differently. We build the features and design that matter for yours."
      />

      <section className="pb-24">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 0.06}>
              <div className="glass glass-hover rounded-2xl p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-violet to-indigo text-white mb-5">
                  <Icon name={ind.icon} size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{ind.name}</h3>
                <p className="text-mist text-sm leading-relaxed flex-1">{ind.hook}</p>
                <Link to="/contact" className="inline-flex items-center gap-1 text-sm text-violet-bright mt-5 hover:gap-2 transition-all">
                  Start your project <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
