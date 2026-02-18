import { motion } from 'framer-motion'
import { SiLinkedin } from 'react-icons/si'

function Contact() {
  return (
    <section id="contact" className="px-4 py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-honey border border-honey/30 rounded-full px-4 py-1 mb-4">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white italic mb-3">
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            I&apos;m always open to new opportunities and connections.
            Feel free to reach out!
          </p>
        </div>

        {/* Contact card */}
        <div className="bg-slate-800 rounded-xl p-8 sm:p-10 border border-slate-700/50 max-w-xl mx-auto text-center">
          <p className="text-slate-300 leading-relaxed mb-8">
            Whether you have a question, want to collaborate on a project, or just
            want to say hello — the best way to reach me is on LinkedIn.
          </p>

          <a
            href="https://linkedin.com/in/BradenMStevens"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-colors"
          >
            <SiLinkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
