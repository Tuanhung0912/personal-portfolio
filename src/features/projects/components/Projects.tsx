import { memo, useCallback, useMemo, useState, type CSSProperties } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { projects, type Project } from '@/data/portfolio'

const filters: Array<Project['category'] | 'All'> = ['All', 'Backend', 'API', 'Web']

export const Projects = memo(() => {
  const [activeFilter, setActiveFilter] = useState<Project['category'] | 'All'>('All')

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  )

  const handleFilter = useCallback((filter: Project['category'] | 'All') => {
    setActiveFilter(filter)
  }, [])

  return (
    <div>
      <div className="section-heading compact">
        <span className="eyebrow">Projects</span>
        <h2>Backend-focused projects built while learning by doing.</h2>
        <p>
          A practical set of APIs and portfolio work showing Java, Spring Boot,
          database design, and documentation habits.
        </p>
      </div>
      <div className="filter-row" role="tablist" aria-label="Project category">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? 'active' : ''}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter}
            onClick={() => handleFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.48, delay: index * 0.08 }}
            style={{ '--project-accent': project.accent } as CSSProperties}
          >
            <div className="project-media" aria-hidden="true">
              <span>{project.category}</span>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stack-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveUrl} aria-label={`${project.title} live demo`}>
                  <FiExternalLink aria-hidden="true" />
                  Demo
                </a>
                <a href={project.repoUrl} aria-label={`${project.title} source code`}>
                  <FiGithub aria-hidden="true" />
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
})

Projects.displayName = 'Projects'
