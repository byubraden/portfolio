import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import skills from '../data/skills'
import { HiCodeBracket, HiCircleStack, HiCloud } from 'react-icons/hi2'

const tabIcons = [HiCodeBracket, HiCircleStack, HiCloud]
const SPEED = 50 // pixels per second

function Skills() {
  const [tab, setTab] = useState(0)
  const [duration, setDuration] = useState(30)
  const scrollRef = useRef(null)
  const items = skills[tab].items

  useEffect(() => {
    if (scrollRef.current) {
      const halfWidth = scrollRef.current.scrollWidth / 2
      setDuration(halfWidth / SPEED)
    }
  }, [tab])

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-10 px-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-honey border border-honey/30 rounded-full px-4 py-1 mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white italic mb-3">
            My Skills
          </h2>
          <p className="text-slate-400">
            Languages, frameworks, and tools I work with.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 px-4">
          <div className="inline-flex bg-slate-800 rounded-full p-1">
            {skills.map((group, i) => {
              const Icon = tabIcons[i]
              return (
                <button
                  key={group.category}
                  onClick={() => setTab(i)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    tab === i
                      ? 'bg-primary-500 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{group.category}</span>
                  <span className="sm:hidden">{group.category.split(/[,&]/)[0].trim()}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Auto-scrolling marquee for active tab */}
        <div
          className="mx-auto overflow-hidden"
          style={{
            width: '70%',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >
          <div
            ref={scrollRef}
            key={tab}
            className="flex w-max gap-4"
            style={{ animation: `scroll ${duration}s linear infinite` }}
          >
            {Array(6).fill(items).flat().map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="flex items-center gap-2.5 px-5 py-3 rounded-lg bg-slate-800 border border-slate-700/50 shrink-0"
              >
                <skill.icon className="text-primary-400 shrink-0" size={20} />
                <span className="text-slate-300 text-sm font-medium whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
