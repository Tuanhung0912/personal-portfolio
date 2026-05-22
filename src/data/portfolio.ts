import {
  FaBriefcase,
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaReact,
} from 'react-icons/fa'
import {
  SiDocker,
  SiGit,
  SiHibernate,
  SiIntellijidea,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiPostgresql,
  SiRedis,
  SiSpringboot,
  SiSwagger,
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
  category: 'Backend' | 'API' | 'Web'
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
  role: 'Java Spring Boot Backend Developer',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'tuanhung.bh2003@gmail.com',
  bio: 'Fresh graduate focused on Java backend development. I am building practical experience with Spring Boot, RESTful APIs, SQL databases, authentication, and clean service-layer architecture.',
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
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/%C4%91inh-l%C3%AA-tu%E1%BA%A5n-h%C6%B0ng-7008322a9',
    icon: FaLinkedin,
  },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
]

export const stats = [
  { value: '2026', label: 'Fresh graduate' },
  { value: 'Java', label: 'Main backend focus' },
  { value: '3+', label: 'Backend practice projects' },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    skills: [
      { name: 'Java', level: 78, icon: FaJava },
      { name: 'Spring Boot', level: 74, icon: SiSpringboot },
      { name: 'RESTful API', level: 76, icon: SiSwagger },
      { name: 'JPA / Hibernate', level: 70, icon: SiHibernate },
      { name: 'Spring Security', level: 66, icon: SiSpringboot },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', level: 76, icon: SiMysql },
      { name: 'PostgreSQL', level: 68, icon: SiPostgresql },
      { name: 'SQL Design', level: 72, icon: SiMysql },
      { name: 'Redis Basics', level: 55, icon: SiRedis },
    ],
  },
  {
    title: 'Tools & Frontend Basics',
    skills: [
      { name: 'Git', level: 74, icon: SiGit },
      { name: 'Postman', level: 78, icon: SiPostman },
      { name: 'Docker Basics', level: 58, icon: SiDocker },
      { name: 'IntelliJ IDEA', level: 80, icon: SiIntellijidea },
      { name: 'React Basics', level: 58, icon: FaReact },
      { name: 'TypeScript Basics', level: 54, icon: SiTypescript },
      { name: 'Vite', level: 60, icon: SiVite },
      { name: 'HTML', level: 72, icon: FaHtml5 },
      { name: 'CSS', level: 66, icon: FaCss3Alt },
      { name: 'JavaScript', level: 64, icon: SiJavascript },
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Bookstore Management REST API',
    category: 'Backend',
    description:
      'Spring Boot API for managing books, categories, users, carts, and orders with layered architecture and database persistence.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Spring Data JPA'],
    accent: '#06b6d4',
    liveUrl: 'https://github.com/Tuanhung0912',
    repoUrl: 'https://github.com/Tuanhung0912',
  },
  {
    title: 'Student Management API',
    category: 'API',
    description:
      'CRUD API for student records, classes, and search filters, focused on validation, clean DTO mapping, and API documentation.',
    stack: ['Spring Boot', 'PostgreSQL', 'Swagger', 'Postman'],
    accent: '#8b5cf6',
    liveUrl: 'https://github.com/Tuanhung0912',
    repoUrl: 'https://github.com/Tuanhung0912',
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Web',
    description:
      'Responsive portfolio website for presenting backend skills, academic projects, contact information, and learning direction.',
    stack: ['React', 'Vite', 'TypeScript', 'CSS'],
    accent: '#22c55e',
    liveUrl: '#top',
    repoUrl: 'https://github.com/Tuanhung0912',
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Java Backend Graduate',
    company: 'University Graduation',
    period: '2026',
    description:
      'Completed undergraduate studies with a clear direction toward backend development using Java and Spring Boot.',
    highlights: ['Object-oriented programming', 'Database fundamentals', 'Backend architecture'],
  },
  {
    role: 'Backend Project Practice',
    company: 'Academic and personal projects',
    period: '2024 - 2026',
    description:
      'Built small backend systems to practice REST API design, CRUD flows, authentication, validation, and SQL persistence.',
    highlights: ['RESTful APIs', 'Spring Data JPA', 'Postman testing'],
  },
  {
    role: 'Continuous Learning',
    company: 'Java and Spring ecosystem',
    period: 'Present',
    description:
      'Strengthening backend fundamentals through documentation, coding practice, debugging, and project-based learning.',
    highlights: ['Spring Security basics', 'Docker basics', 'Clean code habits'],
  },
]

export const quickFacts = [
  { icon: FaBriefcase, label: 'Open to Java Backend Fresher roles' },
  { icon: FaEnvelope, label: profile.email },
]
