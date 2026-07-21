import { PageHero } from '../components/PageShell'
import Reveal from '../components/Reveal'
import Stats from '../sections/Stats'
import Process from '../sections/Process'
import CTABand from '../sections/CTABand'
import { brand } from '../data/site'

const values = [
  { title: 'Ambition', text: 'We aim high — reaching for the stars on every project.' },
  { title: 'Craft', text: 'Clean design, solid engineering, attention to every detail.' },
  { title: 'Partnership', text: 'Your growth is the goal. We build for your results.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Young minds, building bright futures"
        subtitle={brand.mission}
      />

      <section className="pb-8">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="glass rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-violet/20 blur-3xl rounded-full" />
              <h2 className="font-display text-3xl font-semibold mb-4">Our story</h2>
              <p className="text-mist leading-relaxed">
                {brand.name} is a young, ambitious web and software agency. We started with a
                simple belief: every business deserves a website that actually works for it —
                fast, modern, and built to bring in real customers.
              </p>
              <p className="text-mist leading-relaxed mt-4">
                From restaurants to startups, we design and build digital experiences that
                look premium and perform even better. No templates. No shortcuts. Just work
                we're proud to put our name on.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="glass glass-hover rounded-2xl p-7">
                  <h3 className="font-display text-xl font-semibold mb-2 text-gradient">{v.title}</h3>
                  <p className="text-mist text-sm leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Process />
      <CTABand />
    </>
  )
}
