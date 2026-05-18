import { memo, useCallback } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { profile, socialLinks } from '@/data/portfolio'

export const Footer = memo(() => {
  const year = new Date().getFullYear()

  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <footer className="site-footer">
      <div>
        <strong>{profile.name}</strong>
        <span>© {year} Portfolio</span>
      </div>
      <div className="footer-actions">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a key={link.label} className="icon-link" href={link.href} aria-label={link.label}>
              <Icon aria-hidden="true" />
            </a>
          )
        })}
        <button
          className="icon-button"
          type="button"
          aria-label="Back to top"
          onClick={handleBackToTop}
        >
          <FiArrowUp aria-hidden="true" />
        </button>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'
