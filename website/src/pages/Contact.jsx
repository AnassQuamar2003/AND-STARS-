import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, Check } from 'lucide-react'
import { PageHero } from '../components/PageShell'
import Reveal from '../components/Reveal'
import { brand, services } from '../data/site'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    // No backend yet — wire this to email/Formspree/your API later.
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something great"
        subtitle="Tell us about your project. We'll reply within 24 hours."
      />

      <section className="pb-28">
        <div className="container-x grid lg:grid-cols-[1fr_1.3fr] gap-10">
          {/* info */}
          <Reveal>
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
                { icon: Clock, label: 'Response time', value: 'Within 24 hours' },
                { icon: MapPin, label: 'Working', value: 'Remote — worldwide' },
              ].map((item) => (
                <div key={item.label} className="glass rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl grid place-items-center bg-violet/15 text-violet-bright shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-mist text-xs uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium hover:text-violet-bright transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="glass rounded-2xl p-6">
                <p className="eyebrow">Why work with us</p>
                <p className="text-mist text-sm mt-3 leading-relaxed">
                  {brand.tagline} We design and build websites and web apps that help your
                  business grow — beautifully and fast.
                </p>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-violet/20 blur-3xl rounded-full" />
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-violet to-indigo grid place-items-center mb-6">
                    <Check size={30} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">Thank you!</h3>
                  <p className="text-mist mt-3">We've received your message and will be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="relative space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" name="name" placeholder="Your name" required />
                    <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Business" name="business" placeholder="Company name" />
                    <div>
                      <label className="block text-sm text-mist mb-2">Service</label>
                      <select name="service" className="w-full rounded-xl bg-surface-2 border border-line px-4 py-3 text-sm outline-none focus:border-violet transition-colors">
                        <option>I'm not sure yet</option>
                        {services.map((s) => (
                          <option key={s.id}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-mist mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your project…"
                      className="w-full rounded-xl bg-surface-2 border border-line px-4 py-3 text-sm outline-none focus:border-violet transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label className="block text-sm text-mist mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl bg-surface-2 border border-line px-4 py-3 text-sm outline-none focus:border-violet transition-colors"
      />
    </div>
  )
}
