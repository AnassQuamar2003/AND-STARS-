import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import DeviceMockup from '../components/DeviceMockup'

const showcases = [
  {
    title: 'Azure Stay Hotels',
    category: 'Hotels',
    desc: 'A cinematic booking experience with a direct-reservation engine that cut OTA commissions and lifted direct bookings.',
    points: ['Direct booking engine', 'Immersive gallery', '+38% direct reservations'],
    video: '/videos/mockup-1.mp4',
    fallback: 'https://cdn.coverr.co/videos/coverr-a-woman-using-a-laptop-2633/1080p.mp4',
  },
  {
    title: 'DriveNow Rentals',
    category: 'Car Rental',
    desc: 'A custom Laravel + React platform: browse the fleet, book, and pay online — with a full admin dashboard.',
    points: ['Fleet catalog & filters', 'Online payments', 'Admin dashboard'],
    video: '/videos/mockup-2.mp4',
    fallback: 'https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-1584/1080p.mp4',
  },
]

export default function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container-x">
        <SectionHeader
          eyebrow="Featured work"
          title="Sites that look — and perform — beautifully"
          subtitle="A glimpse of what we build. Real projects, real results."
        />

        <div className="space-y-28">
          {showcases.map((s, i) => (
            <div
              key={s.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? 'lg:[direction:rtl]' : ''}`}
            >
              <Reveal className="lg:[direction:ltr]">
                <DeviceMockup src={s.video} fallback={s.fallback} />
              </Reveal>

              <Reveal delay={0.1} className="lg:[direction:ltr]">
                <span className="eyebrow">{s.category}</span>
                <h3 className="font-display text-3xl md:text-4xl font-semibold mt-3">{s.title}</h3>
                <p className="text-mist mt-4 leading-relaxed">{s.desc}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-violet/15 text-violet-bright grid place-items-center">
                        <Check size={13} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/work" className="btn-ghost mt-8 text-sm">
                  See the project <ArrowUpRight size={16} />
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
