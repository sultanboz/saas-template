'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'Do I need a ThemeForest account to use this template?',
    answer:   'No — the template is also available directly on Gumroad. A ThemeForest account is only needed if you purchase from that marketplace. Either way, you get the same files.',
  },
  {
    question: 'Can I use this for client projects?',
    answer:   'The Regular License covers one end product (your own SaaS). If you want to build landing pages for clients or multiple projects, you need the Agency (Extended) License. It covers unlimited client projects.',
  },
  {
    question: 'Is this a WordPress theme?',
    answer:   'No. This is a pure Next.js 15 template. It requires Node.js 18+ and runs as a modern React application. There is no WordPress dependency.',
  },
  {
    question: 'Do I need to know React to use this?',
    answer:   'Basic React knowledge helps, but the template is designed to be customized through simple prop changes and config files. The documentation walks you through every customization step — even for beginners.',
  },
  {
    question: 'How does the dark/light mode work?',
    answer:   'Dark mode is implemented via a CSS class on the <html> element. Switching modes is a single classList.toggle("dark") call. All colors are CSS variables that automatically update — no JavaScript-heavy theming library needed.',
  },
  {
    question: 'Will I get updates?',
    answer:   'Yes. All purchases include lifetime updates. New sections, bug fixes, and dependency updates are pushed regularly. ThemeForest buyers receive update notifications automatically.',
  },
  {
    question: 'Can I use my own fonts?',
    answer:   'Absolutely. Fonts are loaded via next/font/google in layout.tsx. Swap them for any Google Font by changing two lines. The font variables (--font-display, --font-body, --font-mono) cascade through the entire design system.',
  },
  {
    question: 'Is there a Figma file?',
    answer:   'The Pro and Agency plans include a Figma source file with all components organized into a proper design system. The Starter plan includes code only.',
  },
]

interface FaqItemProps {
  question: string
  answer:   string
  isOpen:   boolean
  onToggle: () => void
  index:    number
  id:       string
}

function FaqItem({ question, answer, isOpen, onToggle, index, id }: FaqItemProps) {
  const answerId = `${id}-answer`
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      className={cn(
        'border rounded-2xl overflow-hidden transition-all duration-250',
        isOpen
          ? 'border-surface-700 bg-surface-900'
          : 'border-surface-800/80 bg-surface-900/30 hover:border-surface-700 hover:bg-surface-900/50'
      )}
    >
      <button
        id={id}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className={cn(
          'font-medium text-[0.9375rem] leading-relaxed transition-colors duration-200',
          isOpen ? 'text-surface-50' : 'text-surface-300'
        )}>
          {question}
        </span>
        <div className={cn(
          'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center',
          'transition-all duration-200',
          isOpen
            ? 'bg-brand-500/15 text-brand-400'
            : 'bg-surface-800 text-surface-500'
        )}>
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={answerId}
            role="region"
            aria-labelledby={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-5 pb-5 text-sm text-surface-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          border border-surface-800 bg-surface-900/80 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs text-surface-400 font-medium">Got questions?</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-surface-50">
            Frequently asked{' '}
            <span className="text-gradient">questions</span>
          </h2>
          <p className="text-surface-400 text-lg leading-relaxed">
            Can&apos;t find your answer?{' '}
            <a
              href="mailto:hello@nexlayer.dev"
              className="text-brand-400 hover:text-brand-300
                         underline underline-offset-2 transition-colors"
            >
              Email us
            </a>
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              id={`faq-${i}`}
              {...faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
