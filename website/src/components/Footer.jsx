import { Link } from 'react-router-dom'
import { Mail, Github, Linkedin, Instagram, Facebook, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { brand, navLinks, services } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface/40 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="text-mist mt-5 max-w-xs text-sm leading-relaxed">
            {brand.mission}
          </p>
          <a href={`mailto:${brand.email}`} className="inline-flex items-center gap-2 mt-5 text-cloud hover:text-violet-bright transition-colors text-sm">
            <Mail size={16} /> {brand.email}
          </a>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm tracking-wide">Explore</h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-mist hover:text-cloud transition-colors text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm tracking-wide">Services</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link to="/services" className="text-mist hover:text-cloud transition-colors text-sm">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm tracking-wide">Start a project</h4>
          <p className="text-mist text-sm mb-4">Tell us your idea. We'll reply within 24 hours.</p>
          <Link to="/contact" className="btn-primary text-sm">
            Get a Free Quote <ArrowUpRight size={16} />
          </Link>
          <div className="flex gap-3 mt-6">
            {[Linkedin, Github, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 grid place-items-center rounded-full border border-line text-mist hover:text-cloud hover:border-violet transition-colors"
                aria-label="social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mist">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p className="tracking-wide">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
