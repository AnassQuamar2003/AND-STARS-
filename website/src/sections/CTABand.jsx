import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import { brand } from '../data/site'

export default function CTABand() {
  return (
    <section className="py-24">
      <div className="container-x">
        {/* Whole band swings in with a slight rotation — the loudest move on the page. */}
        <Reveal variant="tilt" duration={0.9}>
          <div className="relative rounded-3xl overflow-hidden bg-blend-darken p-12 md:p-20 text-center lg:text-left glow">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 blur-3xl rounded-full" />

            <div className="relative grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <span className="eyebrow">Get started</span>
                {/* text-cloud, not text-white: this token is white in dark
                    mode and near-black in light mode, so the headline and
                    identity block stay readable in both without touching
                    the panel, buttons, or anything else. */}
                <h2 className="font-display text-3xl md:text-5xl font-semibold text-cloud max-w-2xl mx-auto lg:mx-0 leading-tight mt-4">
                  We build digital products <br className="hidden sm:block" />
                  that drive <span className="text-gradient">real growth.</span>
                </h2>

                {/* Mission / Vision / Values — same three-part identity block
                    as the brand moodboard, copy pulled from `brand` in
                    site.js so it stays one source of truth with the rest
                    of the site rather than living only here. */}
                <div className="grid sm:grid-cols-3 gap-6 mt-8 text-left max-w-xl mx-auto lg:mx-0">
                  <div>
                    <h3 className="eyebrow !text-cloud/60">Mission</h3>
                    <p className="text-cloud/80 text-sm mt-2 leading-relaxed">{brand.mission}</p>
                  </div>
                  <div>
                    <h3 className="eyebrow !text-cloud/60">Vision</h3>
                    <p className="text-cloud/80 text-sm mt-2 leading-relaxed">{brand.vision}</p>
                  </div>
                  <div>
                    <h3 className="eyebrow !text-cloud/60">Values</h3>
                    <ul className="mt-2 space-y-1.5">
                      {brand.values.map((v) => (
                        <li key={v} className="flex items-center gap-2 text-sm text-cloud/80">
                          <Check size={13} className="text-violet-bright shrink-0" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-9">
                  {/* text-black, not text-cloud: this button is deliberately
                      a fixed white pill regardless of theme, so its text
                      must stay fixed dark too — `cloud` would flip to white
                      in dark mode and disappear on the white background. */}
                  <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">
                    Get a Free Quote <ArrowUpRight size={18} />
                  </Link>
                  {/* This one isn't fixed-color — it's a transparent outline
                      sitting directly on the (also transparent) panel, so it
                      needs to track the theme like the headline did. */}
                  <a href={`mailto:${brand.email}`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-cloud/40 text-cloud font-semibold hover:bg-cloud/10 transition-colors">
                    Email us
                  </a>
                </div>
              </div>

              {/* Floating glass-block illustration — wide screens only, so it
                  never competes with the copy on a narrow band. This PNG has
                  genuine alpha (verified by compositing it over solid red —
                  the cubes floated free, zero background), so it just drops
                  in directly — no mask or blend-mode workaround needed,
                  unlike the video version this replaced. */}
              <div className="hidden lg:flex justify-center pointer-events-none">
                <div className="relative w-full max-w-xl aspect-square animate-float scale-150" style={{ animationDuration: '7s' }}>
                  <div className="absolute inset-0 bg-white/25 blur-[90px] rounded-full animate-pulse-glow" />
                  <img
                    src="/images/cta-cubes.webp"
                    alt=""
                    className="relative w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
