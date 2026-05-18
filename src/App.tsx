import { lazy, Suspense } from 'react'
import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import { ParticleBackground } from '@/components/ParticleBackground/ParticleBackground'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Hero } from '@/features/hero/components/Hero'
import './App.css'

const About = lazy(() =>
  import('@/features/about/components/About').then((module) => ({
    default: module.About,
  })),
)
const Skills = lazy(() =>
  import('@/features/skills/components/Skills').then((module) => ({
    default: module.Skills,
  })),
)
const Projects = lazy(() =>
  import('@/features/projects/components/Projects').then((module) => ({
    default: module.Projects,
  })),
)
const Experience = lazy(() =>
  import('@/features/experience/components/Experience').then((module) => ({
    default: module.Experience,
  })),
)
const Contact = lazy(() =>
  import('@/features/contact/components/Contact').then((module) => ({
    default: module.Contact,
  })),
)

const LoadingSection = () => (
  <div className="section-loader" aria-label="Loading section" />
)

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSection />}>
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>
          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>
          <SectionWrapper id="projects">
            <Projects />
          </SectionWrapper>
          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>
          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
