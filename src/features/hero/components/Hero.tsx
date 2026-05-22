import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDownRight, FiMail } from 'react-icons/fi'
import heroImage from '@/assets/hero.png'
import { profile, socialLinks } from '@/data/portfolio'

export const Hero = memo(() => {
  const roleWords = useMemo(() => profile.role.split(' '), [])

  return (
    <section id="top" className="hero-section">
      <div className="hero-copy">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {profile.location}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.08 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="hero-role"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.16 }}
          aria-label={profile.role}
        >
          {roleWords.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.26 + index * 0.08 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.28 }}
        >
          {profile.bio}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.38 }}
        >
          <a className="button primary" href="#projects">
            <FiArrowDownRight aria-hidden="true" />
            View projects
          </a>
          <a className="button secondary" href="#contact">
            <FiMail aria-hidden="true" />
            Contact me
          </a>
        </motion.div>
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a key={link.label} className="icon-link" href={link.href} aria-label={link.label}>
                <Icon aria-hidden="true" />
              </a>
            )
          })}
        </motion.div>
      </div>
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="hero-panel">
          <img src={heroImage} alt="" />
          <div className="terminal-preview" aria-label="Developer status">
            <span>status</span>
            <strong>Learning backend through practical APIs</strong>
            <code>Java - Spring Boot - SQL</code>
          </div>
        </div>
      </motion.div>
    </section>
  )
})

Hero.displayName = 'Hero'
