import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { HiMapPin, HiBriefcase, HiArrowRight } from 'react-icons/hi2'

function CodeWindow() {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700/60 shadow-2xl overflow-hidden w-96">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800 border-b border-slate-700/60">
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-3 text-xs text-slate-500 font-mono">BradenStevens.jsx</span>
      </div>

      {/* Code body */}
      <div className="p-5 text-[13px] font-mono leading-6 select-none">
        <div className="text-slate-500">// portfolio config</div>
        <div className="h-3" />
        <div>
          <span className="text-blue-400">const </span>
          <span className="text-white">BradenStevens</span>
          <span className="text-slate-300"> = () =&gt; {'({'}</span>
        </div>
        <div className="pl-4">
          <span className="text-sky-300">name</span>
          <span className="text-slate-300">{': '}</span>
          <span className="text-emerald-400">&apos;Braden Stevens&apos;</span>
          <span className="text-slate-500">,</span>
        </div>
        <div className="pl-4">
          <span className="text-sky-300">role</span>
          <span className="text-slate-300">{': '}</span>
          <span className="text-emerald-400">&apos;Full Stack Engineer&apos;</span>
          <span className="text-slate-500">,</span>
        </div>
        <div className="pl-4">
          <span className="text-sky-300">stack</span>
          <span className="text-slate-300">{': ['}</span>
          <span className="text-emerald-400">&apos;React&apos;</span>
          <span className="text-slate-500">, </span>
          <span className="text-emerald-400">&apos;.NET&apos;</span>
          <span className="text-slate-500">, </span>
          <span className="text-emerald-400">&apos;SQL&apos;</span>
          <span className="text-slate-500">, </span>
          <span className="text-emerald-400">&apos;AWS&apos;</span>
          <span className="text-slate-300">{']'}</span>
          <span className="text-slate-500">,</span>
        </div>
        <div className="pl-4">
          <span className="text-sky-300">available</span>
          <span className="text-slate-300">{': '}</span>
          <span className="text-orange-400">true</span>
          <span className="text-slate-500">,</span>
        </div>
        <div><span className="text-slate-300">{'}'}</span></div>
        <div className="h-3" />
        <div>
          <span className="text-blue-400">export default </span>
          <span className="text-white">BradenStevens</span>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 -z-10" />

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 py-24">

        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-start max-w-xl"
        >
          {/* Status chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700/60 rounded-full px-3 py-1.5">
              <HiBriefcase className="text-primary-400 shrink-0" size={13} />
              Open to full-stack roles
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700/60 rounded-full px-3 py-1.5">
              <HiMapPin className="text-primary-400 shrink-0" size={13} />
              Provo, UT
            </span>
          </div>

          {/* Intro */}
          <p className="text-slate-400 text-lg mb-2">👋 Hi, I&apos;m</p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Braden <span className="text-primary-400">Stevens</span>
          </h1>

          {/* Role */}
          <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-4">
            Full Stack Development Engineer
          </p>

          {/* Tagline */}
          <p className="text-slate-400 text-lg mb-10">
            Building clean, scalable web applications from front to back.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-64}
                className="group btn-shimmer inline-flex items-center gap-2 px-8 py-3 text-white font-medium rounded-lg cursor-pointer"
              >
                View My Work
                <HiArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-64}
              className="px-8 py-3 border border-primary-500 text-primary-400 hover:bg-primary-500/10 font-medium rounded-lg cursor-pointer transition-colors text-center"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        {/* Right: floating code window */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="hidden lg:flex flex-1 justify-center"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CodeWindow />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
