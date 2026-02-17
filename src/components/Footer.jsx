import { SiGithub, SiLinkedin } from 'react-icons/si'

function Footer() {
  return (
    <footer className="border-t border-slate-800 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Braden Stevens. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/byubraden"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-primary-400 transition-colors"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/BradenMStevens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-primary-400 transition-colors"
          >
            <SiLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer