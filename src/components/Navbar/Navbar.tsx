import { memo, useCallback, useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navItems } from '@/data/portfolio'

export const Navbar = memo(() => {
  const [activeSection, setActiveSection] = useState('about')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-42% 0px -50% 0px', threshold: 0 },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigate = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleToggle = useCallback(() => {
    setIsOpen((current) => !current)
  }, [])

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Go to top">
        TH
      </a>
      <nav className={`nav-links ${isOpen ? 'is-open' : ''}`} aria-label="Primary">
        {navItems.map((item) => {
          const sectionId = item.href.replace('#', '')
          return (
            <a
              key={item.href}
              className={activeSection === sectionId ? 'active' : ''}
              href={item.href}
              onClick={handleNavigate}
            >
              {item.label}
            </a>
          )
        })}
      </nav>
      <button
        className="icon-button menu-toggle"
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>
    </header>
  )
})

Navbar.displayName = 'Navbar'
