import { motion } from 'framer-motion'
import { HiGlobeAmericas, HiCpuChip, HiVideoCamera } from 'react-icons/hi2'
import { GiMountainRoad, GiCycling, GiCampfire } from 'react-icons/gi'
import profilePhoto from '../assets/Stevens,Braden copy.jpg'

const funFacts = [
  { label: 'Hiking', icon: GiMountainRoad },
  { label: 'Biking', icon: GiCycling },
  { label: 'Travel', icon: HiGlobeAmericas },
  { label: 'AI Side Projects', icon: HiCpuChip },
  { label: 'Apple Tech YouTube', icon: HiVideoCamera },
  { label: 'Eagle Scout', icon: GiCampfire },
]

function About() {
  return (
    <section id="about" className="px-4 py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-400 border border-primary-500/30 rounded-full px-4 py-1 mb-4">
          About
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white italic mb-3">
          About Me
        </h2>
        <p className="text-slate-400">
          A bit about who I am, what I do, and what I enjoy.
        </p>
      </div>

      {/* Two-column layout: bio left, fun facts right */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Bio card */}
        <div className="bg-slate-800 rounded-xl p-6 sm:p-8 border border-slate-700/50 lg:flex-1 flex flex-col">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start flex-1">
            <img
              src={profilePhoto}
              alt="Braden Stevens"
              className="w-36 h-36 rounded-full object-cover border-2 border-primary-500/30 shrink-0"
            />
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                I&apos;m an early-career full-stack software engineer and Information Systems
                master&apos;s student at Brigham Young University. I have hands-on experience
                building web applications with React, .NET, SQL, and cloud platforms like AWS
                and Azure.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I&apos;m passionate about writing clean code, teaching others, and exploring how
                AI can be integrated into real-world applications. I&apos;m looking for
                full-stack development roles where I can grow alongside a strong engineering
                team and make a meaningful impact.
              </p>
            </div>
          </div>
        </div>

        {/* Fun facts card */}
        <div className="bg-slate-800 rounded-xl p-6 sm:p-8 border border-slate-700/50 lg:w-72 shrink-0">
          <h3 className="text-lg font-semibold text-primary-400 mb-5 text-center">
            When I&apos;m Not Coding
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {funFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
              >
                <fact.icon className="text-primary-400" size={22} />
                <span className="text-slate-300 text-xs font-medium text-center">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  )
}

export default About