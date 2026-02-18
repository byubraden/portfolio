import { useState, useEffect } from 'react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-6 top-24 bottom-8 z-40 hidden lg:flex flex-col items-center gap-2">
      {/* Top dot */}
      <div className="w-1 h-1 rounded-full bg-slate-600 shrink-0" />

      {/* Track */}
      <div className="relative flex-1 w-px bg-slate-700/40 rounded-full">
        {/* Fill */}
        <div
          className="absolute top-0 left-0 w-full rounded-full transition-none"
          style={{
            height: `${progress * 100}%`,
            background: 'linear-gradient(to bottom, #1a8fd4, #f6ae2d)',
          }}
        />
        {/* Glowing dot at tip of fill */}
        <div
          className="absolute left-1/2 w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 transition-none"
          style={{
            top: `${progress * 100}%`,
            backgroundColor: progress < 0.5 ? '#1a8fd4' : '#f6ae2d',
            boxShadow: progress < 0.5
              ? '0 0 6px 2px rgba(26, 143, 212, 0.7)'
              : '0 0 6px 2px rgba(246, 174, 45, 0.7)',
          }}
        />
      </div>

      {/* Bottom dot */}
      <div className="w-1 h-1 rounded-full bg-slate-600 shrink-0" />
    </div>
  )
}

export default ScrollProgress
