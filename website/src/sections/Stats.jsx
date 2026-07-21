import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '../data/site'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const dur = 1600
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gradient">
      {n}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="glass rounded-3xl p-10 md:p-14 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center relative overflow-hidden">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-violet/20 blur-[100px] rounded-full" />
          {stats.map((s) => (
            <div key={s.label} className="relative">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="text-mist text-sm mt-3">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
