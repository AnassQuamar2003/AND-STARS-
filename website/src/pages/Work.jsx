import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/PageShell'
import CTABand from '../sections/CTABand'
import { work } from '../data/site'

const categories = ['All', ...Array.from(new Set(work.map((w) => w.category)))]

// Placeholder preview videos — swap with real project captures in /public/videos.
const previews = [
  'https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-1584/1080p.mp4',
  'https://cdn.coverr.co/videos/coverr-a-woman-using-a-laptop-2633/1080p.mp4',
]

export default function Work() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? work : work.filter((w) => w.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Projects we're proud of"
        subtitle="A selection of websites and apps we've crafted across industries."
      />

      <section className="pb-24">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === c
                    ? 'bg-violet text-white'
                    : 'border border-line text-mist hover:text-cloud hover:border-violet'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((w, i) => (
              <motion.div
                layout
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass glass-hover rounded-2xl overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden bg-ink relative">
                  <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" autoPlay loop muted playsInline>
                    <source src={previews[i % previews.length]} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="eyebrow">{w.category}</span>
                  <h3 className="font-display text-xl font-semibold mt-2">{w.title}</h3>
                  <p className="text-mist text-sm mt-2">{w.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-sm text-violet-bright mt-4 hover:gap-2 transition-all">
                    Want similar? <ArrowUpRight size={15} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
