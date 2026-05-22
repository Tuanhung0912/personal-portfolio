import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import { profile, quickFacts, stats } from '@/data/portfolio'

export const About = memo(() => {
  const traits = useMemo(
    () => ['Java-focused', 'API design', 'SQL fundamentals', 'Willing to learn'],
    [],
  )

  return (
    <div className="section-grid about-grid">
      <div className="section-heading">
        <span className="eyebrow">About</span>
        <h2>Fresh graduate building a strong Java backend foundation.</h2>
        <p>
          I focus on writing understandable backend code, designing REST APIs,
          working with relational databases, and improving through hands-on
          Spring Boot projects.
        </p>
      </div>
      <div className="about-content">
        <div className="glass-card profile-card">
          <div className="avatar" aria-hidden="true">
            TH
          </div>
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <span>
              <FiMapPin aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>
        <div className="stats-grid">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="tag-cloud" aria-label="Core working style">
          {traits.map((trait) => (
            <span key={trait}>{trait}</span>
          ))}
        </div>
        <div className="quick-facts">
          {quickFacts.map((fact) => {
            const Icon = fact.icon
            return (
              <div key={fact.label}>
                <Icon aria-hidden="true" />
                <span>{fact.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
})

About.displayName = 'About'
