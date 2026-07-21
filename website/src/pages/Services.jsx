import { Link } from 'react-router-dom'
import { Check, ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/PageShell'
import Reveal from '../components/Reveal'
import CTABand from '../sections/CTABand'
import { services } from '../data/site'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services & Pricing"
        title="Everything you need to win online"
        subtitle="Transparent pricing tiers. Pick a starting point — we'll tailor the exact scope to your goals."
      />

      <section className="pb-24">
        <div className="container-x space-y-8">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <div className="glass rounded-3xl p-8 md:p-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold">{s.title}</h2>
                  <p className="text-mist mt-3 leading-relaxed">{s.blurb}</p>
                  <ul className="grid sm:grid-cols-2 gap-3 mt-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm">
                        <span className="w-5 h-5 rounded-full bg-violet/15 text-violet-bright grid place-items-center shrink-0">
                          <Check size={12} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  {s.tiers.map((t) => (
                    <div key={t.name} className="flex items-center justify-between rounded-xl border border-line px-5 py-4 hover:border-violet transition-colors">
                      <span className="font-medium">{t.name}</span>
                      <span className="text-violet-bright font-semibold">{t.price}</span>
                    </div>
                  ))}
                  <Link to="/contact" className="btn-primary w-full justify-center mt-2">
                    Get a Quote <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
