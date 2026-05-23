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
          <ul className="skill-list">
            {category.skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.li
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                >
                  <Icon aria-hidden="true" />
                  <span>{skill.name}</span>
                </motion.li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  </div>
))

Skills.displayName = 'Skills'
