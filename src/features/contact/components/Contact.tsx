import { memo, useCallback, useState, type ChangeEvent, type FormEvent } from 'react'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { profile, socialLinks } from '@/data/portfolio'

type FormState = {
  name: string
  email: string
  message: string
}

const initialFormState: FormState = {
  name: '',
  email: '',
  message: '',
}

export const Contact = memo(() => {
  const [formState, setFormState] = useState(initialFormState)
  const [status, setStatus] = useState('')

  const handleChange = useCallback(
    (field: keyof FormState) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((current) => ({ ...current, [field]: event.target.value }))
      },
    [],
  )

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('Thanks. Your message is ready to send.')
    setFormState(initialFormState)
  }, [])

  return (
    <div className="section-grid contact-grid">
      <div className="section-heading">
        <span className="eyebrow">Contact</span>
        <h2>Open to Java Backend Fresher opportunities.</h2>
        <p>
          I am looking for opportunities to contribute to backend teams, learn
          from real systems, and grow with Java and Spring Boot.
        </p>
        <div className="contact-details">
          <a href={`mailto:${profile.email}`}>
            <FiMail aria-hidden="true" />
            {profile.email}
          </a>
          <span>
            <FiMapPin aria-hidden="true" />
            {profile.location}
          </span>
        </div>
        <div className="hero-socials">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a key={link.label} className="icon-link" href={link.href} aria-label={link.label}>
                <Icon aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
      <form className="glass-card contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={formState.name}
            type="text"
            autoComplete="name"
            required
            onChange={handleChange('name')}
          />
        </label>
        <label>
          Email
          <input
            value={formState.email}
            type="email"
            autoComplete="email"
            required
            onChange={handleChange('email')}
          />
        </label>
        <label>
          Message
          <textarea
            value={formState.message}
            rows={5}
            required
            onChange={handleChange('message')}
          />
        </label>
        <button className="button primary" type="submit">
          <FiSend aria-hidden="true" />
          Send message
        </button>
        {status ? <p className="form-status">{status}</p> : null}
      </form>
    </div>
  )
})

Contact.displayName = 'Contact'
