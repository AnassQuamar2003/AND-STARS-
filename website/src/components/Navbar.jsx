import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-ink/80 backdrop-blur-xl border-b border-line' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Link to="/" aria-label="AND STARS home">
          <Logo />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative group ${
                    isActive ? 'text-cloud' : 'text-mist hover:text-cloud'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-violet transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="hidden md:inline-flex btn-primary text-sm">
          Get a Quote <ArrowUpRight size={16} />
        </Link>

        <button
          className="md:hidden text-cloud"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-xl border-t border-line mt-3"
          >
            <ul className="container-x py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className="block text-lg text-mist hover:text-cloud"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <Link to="/contact" className="btn-primary justify-center mt-2">
                Get a Quote <ArrowUpRight size={16} />
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
