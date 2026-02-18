import { motion } from 'framer-motion'
import { HiGlobeAmericas, HiCpuChip, HiVideoCamera } from 'react-icons/hi2'
import { GiMountainRoad, GiCycling, GiCampfire } from 'react-icons/gi'
import profilePhoto from '../assets/Stevens,Braden copy.jpg'

const interests = [
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
        <div className="text-center mb-12">
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

        {/* Two-column: left = photo, right = bio + interests */}
        <div className="flex flex-col sm:flex-row gap-10 items-start">

          {/* Left: photo only */}
          <img
            src={profilePhoto}
            alt="Braden Stevens"
            className="w-52 h-64 rounded-2xl object-cover object-top border border-slate-700 shadow-xl shrink-0 mx-auto sm:mx-0"
          />

          {/* Right: bio then interests */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
              <p>
                Hey, I&apos;m Braden — a full-stack engineer finishing up my master&apos;s in
                Information Systems at BYU. I&apos;ve built web apps with React, .NET, and SQL,
                and picked up plenty of AWS and Azure experience along the way.
              </p>
              <p>
                I care a lot about writing clean code, helping others learn, and figuring out
                where AI actually fits into real products. I&apos;m on the lookout for a
                full-stack role where I can grow fast, work with good people, and build things
                worth using.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary-400 mb-3">
                When I&apos;m not coding
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 bg-slate-800 border border-slate-700/50 rounded-full px-3 py-1.5"
                  >
                    <item.icon className="text-primary-400 shrink-0" size={14} />
                    <span className="text-slate-300 text-xs font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}

export default About
