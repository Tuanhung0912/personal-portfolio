import { memo, type PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type SectionWrapperProps = PropsWithChildren<{
  id: string
}>

export const SectionWrapper = memo(({ children, id }: SectionWrapperProps) => {
  const { ref, inView } = useInView({
    threshold: 0.16,
    triggerOnce: true,
  })

  return (
    <motion.section
      ref={ref}
      id={id}
      className="section-shell"
      initial={{ opacity: 0, y: 34 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.62, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
})

SectionWrapper.displayName = 'SectionWrapper'
