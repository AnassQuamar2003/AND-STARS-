// Trusted-by strip — placeholder client names scrolling.
const names = ['Lumière', 'Azure Stay', 'BrightSmile', 'DriveNow', 'PulseFit', 'NovaLaunch', 'Meridian', 'Oakwood']

export default function LogoMarquee() {
  return (
    <section className="py-12 border-y border-line bg-surface/30 overflow-hidden">
      <p className="text-center eyebrow mb-8">Trusted by growing businesses</p>
      <div className="relative">
        <div className="flex gap-16 whitespace-nowrap animate-marquee w-max">
          {[...names, ...names].map((n, i) => (
            <span key={i} className="font-display text-2xl font-semibold text-mist/50 tracking-wide">
              {n}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent" />
      </div>
    </section>
  )
}
