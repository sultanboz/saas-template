'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Avatar } from '@/components/ui/Avatar'
import { Twitter, Linkedin, Github } from 'lucide-react'

const team = [
  {
    name:    'Alex Morgan',
    role:    'Co-founder & CEO',
    bio:     'Previously infra lead at Vercel. Ships products at the intersection of DX and design.',
    color:   'violet' as const,
    fallback:'AM',
    social:  { twitter: '#', linkedin: '#', github: '#' },
  },
  {
    name:    'Sam Rivera',
    role:    'Co-founder & CTO',
    bio:     'Full-stack engineer, open-source contributor. Obsessed with performance and TypeScript.',
    color:   'blue' as const,
    fallback:'SR',
    social:  { twitter: '#', linkedin: '#', github: '#' },
  },
  {
    name:    'Jordan Lee',
    role:    'Head of Design',
    bio:     'Turned dark-mode aesthetics into a craft. Figma files are works of art here.',
    color:   'emerald' as const,
    fallback:'JL',
    social:  { twitter: '#', linkedin: '#', github: '#' },
  },
  {
    name:    'Casey Park',
    role:    'Head of Growth',
    bio:     'Built two bootstrapped SaaS products before joining. Knows what makes users convert.',
    color:   'amber' as const,
    fallback:'CP',
    social:  { twitter: '#', linkedin: '#', github: '#' },
  },
]

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-4 sm:px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold
                             uppercase tracking-widest text-brand-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              The team
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-surface-50 mb-4">
              Built by people who ship
            </h2>
            <p className="text-surface-400 max-w-lg mx-auto leading-relaxed">
              A small, remote-first team united by a love of fast products and dark themes.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {team.map(member => (
            <motion.div
              key={member.name}
              variants={item}
              className="p-6 rounded-2xl border border-surface-800 bg-surface-900/50
                         hover:border-surface-700 hover:bg-surface-900
                         transition-all duration-300 group"
            >
              <Avatar
                fallback={member.fallback}
                color={member.color}
                size="lg"
                className="mb-4"
              />
              <div className="font-semibold text-surface-100 text-sm">{member.name}</div>
              <div className="text-xs text-brand-400 mt-0.5 mb-3">{member.role}</div>
              <p className="text-xs text-surface-500 leading-relaxed mb-5">{member.bio}</p>

              {/* Social */}
              <div className="flex items-center gap-2">
                {member.social.twitter && (
                  <a href={member.social.twitter} aria-label="Twitter"
                     className="text-surface-600 hover:text-surface-300 transition-colors">
                    <Twitter size={13} />
                  </a>
                )}
                {member.social.linkedin && (
                  <a href={member.social.linkedin} aria-label="LinkedIn"
                     className="text-surface-600 hover:text-surface-300 transition-colors">
                    <Linkedin size={13} />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} aria-label="GitHub"
                     className="text-surface-600 hover:text-surface-300 transition-colors">
                    <Github size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
