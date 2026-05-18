import { memo } from 'react'
import { motion } from 'framer-motion'
import { experience } from '@/data/portfolio'

export const Experience = memo(() => (
  <div>
    <div className="section-heading compact">
      <span className="eyebrow">Experience</span>
      <h2>Focused delivery across product and client environments.</h2>
      <p>
        Experience spans production SaaS interfaces, integrations, dashboards,
        and responsive websites.
      </p>
    </div>
    <div className="timeline">
      {experience.map((item, index) => (
        <motion.article
          key={`${item.company}-${item.role}`}
          className="timeline-item"
          initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <div className="timeline-marker" aria-hidden="true" />
          <div className="glass-card timeline-card">
            <span>{item.period}</span>
            <h3>{item.role}</h3>
            <strong>{item.company}</strong>
            <p>{item.description}</p>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
))

Experience.displayName = 'Experience'
