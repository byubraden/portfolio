import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'resume', label: 'Resume' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed z-50 w-full transition-all duration-300 ${
      scrolled
        ? 'top-4 px-4 sm:px-10 lg:px-24'
        : 'top-0 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800'
    }`}>

      {/* Main bar */}
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'max-w-4xl bg-slate-900/95 backdrop-blur-md border border-slate-700/60 rounded-2xl shadow-2xl px-5 h-14'
            : 'max-w-6xl px-4 sm:px-6 lg:px-8 h-16'
        }`}
      >
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-xl font-bold text-white cursor-pointer hover:text-primary-400 transition-colors"
        >
          <span className="text-primary-400">&lt;</span>bradenstevens<span className="text-primary-400">/&gt;</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={link.to === 'hero' ? 0 : -64}
              spy={true}
              activeClass="!border-slate-600 !text-white"
              className="text-slate-400 hover:text-white cursor-pointer transition-colors text-sm font-medium px-4 py-1.5 rounded-full border border-transparent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social icons + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/byubraden"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary-400 transition-colors"
          >
            <SiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/BradenMStevens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary-400 transition-colors"
          >
            <SiLinkedin size={20} />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-400 hover:text-primary-400 transition-colors"
          >
            {menuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`md:hidden mt-2 mx-auto transition-all duration-300 ${
            scrolled
              ? 'max-w-4xl bg-slate-900/95 backdrop-blur-md border border-slate-700/60 rounded-2xl shadow-2xl px-5 py-2'
              : 'w-full bg-slate-950/95 backdrop-blur-sm border-t border-slate-800 px-4 pb-4 pt-2'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={link.to === 'hero' ? 0 : -64}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-slate-400 hover:text-primary-400 cursor-pointer transition-colors text-sm font-medium border-b border-slate-800 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
