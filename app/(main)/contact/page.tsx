'use client'

import { useState } from 'react'
import { Footer }   from '@/components/layout/Footer'
import { Badge }    from '@/components/ui/Badge'
import { Input }    from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select }   from '@/components/ui/Select'
import { Button }   from '@/components/ui/Button'
import { Mail, MessageSquare, CheckCircle } from 'lucide-react'
import { GithubIcon, XIcon } from '@/components/icons/BrandIcons'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name:    '',
    email:   '',
    subject: '',
    message: '',
  })

  function onChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        console.error('[contact]', data.error)
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
    <div id="main-content" className="min-h-screen bg-surface-950">

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <Badge variant="brand" dot className="mb-5">Contact</Badge>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-surface-50 mb-5">
            Get in touch
          </h1>
          <p className="text-lg text-surface-400 leading-relaxed">
            Have a question, a feature request, or just want to say hello?
            We reply to every message within 24 hours.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10">

          {/* Form */}
          <div className="rounded-2xl border border-surface-800 bg-surface-900/50 p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-500/10 flex items-center
                                justify-center mb-5">
                  <CheckCircle size={24} className="text-brand-400" />
                </div>
                <h2 className="text-xl font-semibold text-surface-100 mb-2">Message sent!</h2>
                <p className="text-surface-400 mb-6 max-w-xs">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => { setStatus('idle'); setForm({ name:'',email:'',subject:'',message:'' }) }}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    label="Full name"
                    placeholder="Alex Morgan"
                    required
                    value={form.name}
                    onChange={onChange('name')}
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="alex@example.com"
                    required
                    value={form.email}
                    onChange={onChange('email')}
                  />
                </div>
                <Select
                  label="Subject"
                  placeholder="Select a topic"
                  options={[
                    { value: 'support',   label: 'Technical support' },
                    { value: 'billing',   label: 'Billing & licensing' },
                    { value: 'feature',   label: 'Feature request' },
                    { value: 'feedback',  label: 'General feedback' },
                    { value: 'other',     label: 'Other' },
                  ]}
                />
                <Textarea
                  label="Message"
                  placeholder="Tell us what's on your mind…"
                  rows={5}
                  maxChars={1000}
                  required
                  value={form.message}
                  onChange={onChange('message')}
                />
                {status === 'error' && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20
                                rounded-lg px-4 py-2.5">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <Button
                  type="submit"
                  size="md"
                  disabled={status === 'loading'}
                  className="self-end"
                >
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </Button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">

            {/* Contact channels */}
            <div className="rounded-2xl border border-surface-800 bg-surface-900/50 p-6">
              <h3 className="font-semibold text-surface-100 mb-4">Other ways to reach us</h3>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'hello@nexlayer.io',
                    desc:  'Best for licensing & billing',
                  },
                  {
                    icon: XIcon,
                    label: 'Twitter / X',
                    value: '@nexlayer',
                    desc:  'Quick questions & updates',
                  },
                  {
                    icon: GithubIcon,
                    label: 'GitHub',
                    value: 'github.com/nexlayer',
                    desc:  'Bug reports & feature requests',
                  },
                  {
                    icon: MessageSquare,
                    label: 'Discord',
                    value: 'discord.gg/nexlayer',
                    desc:  'Community chat & support',
                  },
                ].map(({ icon: Icon, label, value, desc }) => (
                  <div key={label} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-surface-800 flex items-center
                                    justify-center flex-shrink-0">
                      <Icon size={14} className="text-surface-400" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-surface-300">{label}</div>
                      <div className="text-xs text-brand-400 mt-0.5">{value}</div>
                      <div className="text-xs text-surface-600 mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ hint */}
            <div className="rounded-2xl border border-surface-800 bg-surface-900/50 p-6">
              <h3 className="font-semibold text-surface-100 mb-2">Looking for docs?</h3>
              <p className="text-sm text-surface-500 mb-4 leading-relaxed">
                Many questions are already answered in our documentation and FAQ section.
              </p>
              <a
                href="/#faq"
                className="text-sm font-medium text-brand-400 hover:text-brand-300
                           transition-colors inline-flex items-center gap-1"
              >
                Browse FAQ →
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
