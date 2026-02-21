import { motion } from 'framer-motion'
import projects from '../data/projects'
import { SiGithub } from 'react-icons/si'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

function Projects() {
  return (
    <section id="projects" className="px-4 py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-honey border border-honey/30 rounded-full px-4 py-1 mb-4">
          Portfolio
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-white italic mb-3">
          My Projects
        </h2>
        <p className="text-slate-400">
          A selection of things I&apos;ve built and contributed to.
        </p>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-800 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-all overflow-hidden group"
          >
            {/* Image area */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className={`w-full aspect-[2/1] object-cover ${project.imagePosition ?? 'object-center'}`}
              />
            ) : (
              <div className="w-full aspect-[2/1] bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-slate-600">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <span className="text-xs text-primary-400 font-medium">
                  {project.year}
                </span>
              </div>

              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-slate-700 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    <SiGithub size={16} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    <HiArrowTopRightOnSquare size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </section>
  )
}

export default Projects