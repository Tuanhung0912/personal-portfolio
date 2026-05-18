import { memo, useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

const PARTICLE_COUNT = 72
const CONNECT_DISTANCE = 150

const createParticle = (width: number, height: number): Particle => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.34,
  vy: (Math.random() - 0.5) * 0.34,
  radius: 1 + Math.random() * 1.8,
  alpha: 0.25 + Math.random() * 0.45,
})

export const ParticleBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext('2d')
    if (!context) {
      return undefined
    }

    let animationFrame = 0
    let width = window.innerWidth
    let height = window.innerHeight
    let particles: Particle[] = []

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(width, height),
      )
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      const gradient = context.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, 'rgba(79, 70, 229, 0.18)')
      gradient.addColorStop(1, 'rgba(6, 182, 212, 0.10)')

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1
        }
        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1
        }

        context.beginPath()
        context.fillStyle = `rgba(188, 214, 255, ${particle.alpha})`
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fill()

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const nextParticle = particles[nextIndex]
          const distance = Math.hypot(
            particle.x - nextParticle.x,
            particle.y - nextParticle.y,
          )

          if (distance < CONNECT_DISTANCE) {
            context.beginPath()
            context.strokeStyle = gradient
            context.globalAlpha = (1 - distance / CONNECT_DISTANCE) * 0.42
            context.moveTo(particle.x, particle.y)
            context.lineTo(nextParticle.x, nextParticle.y)
            context.stroke()
            context.globalAlpha = 1
          }
        }
      })

      animationFrame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-background" aria-hidden="true" />
})

ParticleBackground.displayName = 'ParticleBackground'
