import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
          Braden Stevens
        </h1>
        <p className="text-xl sm:text-2xl text-primary-400 font-medium mb-6">
          Full Stack Development Engineer
        </p>
        <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
          Building clean, scalable web applications from front to back.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-64}
            className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg cursor-pointer transition-colors"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-64}
            className="px-8 py-3 border border-primary-500 text-primary-400 hover:bg-primary-500/10 font-medium rounded-lg cursor-pointer transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero