import { useEffect, useRef } from 'react'

// Laptop device frame with a looping video inside.
// Swap each showcase video: drop files at /public/videos/mockup-1.mp4 etc.
// Falls back to a free remote clip until you add your own.
// The clip only downloads and plays while the frame is on screen — autoplaying
// every mockup at once makes the whole page stutter.
export default function DeviceMockup({ src, fallback }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(video)
    return () => io.disconnect()
  }, [])

  return (
    <div className="relative w-full">
      {/* laptop */}
      <div className="relative rounded-t-xl border border-line bg-surface-2 p-2 shadow-2xl">
        <div className="rounded-md overflow-hidden bg-ink aspect-video">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="none"
          >
            {src && <source src={src} type="video/mp4" />}
            <source src={fallback} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* laptop base */}
      <div className="h-3 rounded-b-xl bg-surface-2 border-x border-b border-line mx-auto w-[108%] -ml-[4%] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-b-md bg-line" />
      </div>
      {/* glow */}
      <div className="absolute -inset-6 -z-10 bg-violet/20 blur-3xl rounded-full" />
    </div>
  )
}
