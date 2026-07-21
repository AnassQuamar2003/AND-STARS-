import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { brand } from '../data/site'

export default function CTABand() {
  return (
    <section className="py-24">
      <div className="container-x">
        {/* Whole band swings in with a slight rotation — the loudest move on the page. */}
        <Reveal variant="tilt" duration={0.9}>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-deep via-violet to-indigo p-12 md:p-20 text-center glow">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-white max-w-2xl mx-auto leading-tight">
                Ready to launch something great?
              </h2>
              <p className="text-white/80 mt-5 max-w-xl mx-auto">
                Tell us about your project. We'll get back to you within 24 hours with next steps.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-9">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-ink font-semibold hover:scale-105 transition-transform">
                  Get a Free Quote <ArrowUpRight size={18} />
                </Link>
                <a href={`mailto:${brand.email}`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors">
                  Email us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
