import {
  FaBriefcase,
  FaCss3Alt,
  FaDocker,
  FaEnvelope,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import {
  SiExpress,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  icon: IconType
}

export type Skill = {
  name: string
  level: number
  icon: IconType
}

export type SkillCategory = {
  title: string
  skills: Skill[]
}

export type Project = {
  title: string
  category: 'Web' | 'Dashboard' | 'Automation'
  description: string
  stack: string[]
  accent: string
  liveUrl: string
  repoUrl: string
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export const profile = {
  name: 'DINH LE TUAN HUNG',
  role: 'Full-Stack Developer',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'tuanhung.bh2003@gmail.com',
  bio: 'I build fast, polished web products with React, TypeScript, and modern backend systems. My work focuses on clean interfaces, reliable delivery, and measurable product outcomes.',
}

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Tuanhung0912', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/%C4%91inh-l%C3%AA-tu%E1%BA%A5n-h%C6%B0ng-7008322a9', icon: FaLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
]

export const stats = [
  { value: '35+', label: 'Projects shipped' },
  { value: '5+', label: 'Years building' },
  { value: '12', label: 'Core technologies' },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 94, icon: FaReact },
      { name: 'TypeScript', level: 91, icon: SiTypescript },
      { name: 'Next.js', level: 86, icon: SiNextdotjs },
      { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss },
      { name: 'Framer Motion', level: 82, icon: SiFramer },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', level: 89, icon: FaNodeJs },
      { name: 'Spring Boot', level: 84, icon: SiExpress },
      { name: 'MySQL', level: 81, icon: SiPostgresql },
      { name: 'PostgreSQL', level: 78, icon: SiMongodb },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Vite', level: 90, icon: SiVite },
      { name: 'Docker', level: 76, icon: FaDocker },
      { name: 'HTML', level: 95, icon: FaHtml5 },
      { name: 'CSS', level: 92, icon: FaCss3Alt },
      { name: 'JavaScript', level: 93, icon: SiJavascript },
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Commerce Intelligence Suite',
    category: 'Dashboard',
    description:
      'Analytics workspace for tracking revenue, conversion, and campaign performance across multiple storefronts.',
    stack: ['React', 'TypeScript', 'PostgreSQL'],
    accent: '#06b6d4',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/',
  },
  {
    title: 'Creative Portfolio System',
    category: 'Web',
    description:
      'High-performance portfolio engine with content collections, rich case studies, and animated transitions.',
    stack: ['Vite', 'Framer Motion', 'CSS'],
    accent: '#8b5cf6',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/',
  },
  {
    title: 'Ops Automation Hub',
    category: 'Automation',
    description:
      'Internal tool for orchestrating approval workflows, notifications, and reporting across distributed teams.',
    stack: ['Node.js', 'Express', 'MongoDB'],
    accent: '#22c55e',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/',
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Product Studio',
    period: '2024 - Present',
    description:
      'Lead the frontend architecture for SaaS products with a strong focus on performance and maintainability.',
    highlights: ['Design system delivery', 'React performance tuning', 'Feature planning'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Digital Agency',
    period: '2021 - 2024',
    description:
      'Built web apps, dashboards, and integrations for clients in commerce, education, and operations.',
    highlights: ['API integrations', 'Admin dashboards', 'Production support'],
  },
  {
    role: 'Frontend Developer',
    company: 'Freelance',
    period: '2019 - 2021',
    description:
      'Delivered responsive marketing sites, landing pages, and portfolio systems for small businesses.',
    highlights: ['Responsive UI', 'SEO foundations', 'Client handoff'],
  },
]

export const quickFacts = [
  { icon: FaBriefcase, label: 'Available for selected projects' },
  { icon: FaEnvelope, label: profile.email },
]
