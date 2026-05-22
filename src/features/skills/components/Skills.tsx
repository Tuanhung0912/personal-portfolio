import { memo } from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '@/data/portfolio'

export const Skills = memo(() => (
  <div>
    <div className="section-heading compact">
      <span className="eyebrow">Skills</span>
      <h2>Backend fundamentals centered on Java and Spring Boot.</h2>
      <p>
        The current skill set reflects fresher-level backend practice with APIs,
        databases, testing tools, and a basic frontend understanding.
      </p>
    </div>
    <div className="skills-grid">
      {skillCategories.map((category) => (
        <div key={category.title} className="glass-card skill-category">
          <h3>{category.title}</h3>
          <div className="skill-list">
            {category.skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                >
                  <div className="skill-meta">
                    <span>
                      <Icon aria-hidden="true" />
                      {skill.name}
                    </span>
                    <strong>{skill.level}%</strong>
                  </div>
                  <div className="skill-track" aria-hidden="true">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.75, delay: 0.12 }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
))

Skills.displayName = 'Skills'
