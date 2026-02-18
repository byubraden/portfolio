import { useState } from 'react'
import { motion } from 'framer-motion'
import { summary, education, experience } from '../data/resume'
import resumePdf from '../assets/resume.pdf'
import {
  HiArrowDownTray,
  HiBriefcase,
  HiAcademicCap,
  HiCalendarDays,
  HiMapPin,
} from 'react-icons/hi2'

function Resume() {
  const [tab, setTab] = useState('experience')

  return (
    <section id="resume" className="px-4 py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-honey border border-honey/30 rounded-full px-4 py-1 mb-4">
          Experience
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white italic mb-3">
          My Resume
        </h2>
        <p className="text-slate-400 mb-8">{summary}</p>
        <a
          href={resumePdf}
          download="Braden_Stevens_Resume.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full transition-colors border border-slate-700"
        >
          <HiArrowDownTray size={18} />
          Download Resume (PDF)
        </a>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-slate-800 rounded-full p-1">
          <button
            onClick={() => setTab('experience')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
              tab === 'experience'
                ? 'bg-primary-500 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <HiBriefcase size={16} />
            Experience
          </button>
          <button
            onClick={() => setTab('education')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
              tab === 'education'
                ? 'bg-primary-500 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <HiAcademicCap size={16} />
            Education
          </button>
        </div>
      </div>

      {/* Experience cards */}
      {tab === 'experience' && (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-500/20 hidden sm:block" />

          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.title} className="relative sm:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-slate-800 border-2 border-primary-500 hidden sm:flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                </div>

                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-700/50 rounded-lg shrink-0 sm:hidden">
                        <HiBriefcase className="text-primary-400" size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{job.title}</h4>
                        <p className="text-primary-400 text-sm font-medium">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-slate-400 shrink-0">
                      <span className="flex items-center gap-1.5">
                        <HiCalendarDays size={14} />
                        {job.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <HiMapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-4">{job.description}</p>

                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="text-slate-300 text-sm flex gap-2">
                        <span className="text-primary-400 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400 inline-block" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {job.tags && job.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-slate-700 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education cards */}
      {tab === 'education' && (
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-500/20 hidden sm:block" />

          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className="relative sm:pl-16">
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-slate-800 border-2 border-primary-500 hidden sm:flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                </div>

                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-700/50 rounded-lg shrink-0 sm:hidden">
                        <HiAcademicCap className="text-primary-400" size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <p className="text-primary-400 text-sm font-medium">{edu.school}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-slate-400 shrink-0">
                      <span className="flex items-center gap-1.5">
                        <HiCalendarDays size={14} />
                        {edu.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <HiMapPin size={14} />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm italic mb-4">{edu.detail}</p>

                  {edu.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="text-slate-300 text-sm flex gap-2">
                          <span className="text-primary-400 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400 inline-block" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </motion.div>
    </section>
  )
}

export default Resume