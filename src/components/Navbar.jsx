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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b border-slate-800 ${
        scrolled || menuOpen ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-slate-950/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white cursor-pointer hover:text-primary-400 transition-colors"
          >
            <span className="text-primary-400">&lt;/</span>BradenStevens<span className="text-primary-400">&gt;</span>
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
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 px-4 pb-4">
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
