import { Badge }  from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { Zap, Globe, Users, Heart, ArrowRight } from 'lucide-react'

const team = [
  { name: 'Alex Morgan',    role: 'Co-founder & CEO',      color: 'violet'  as const, fallback: 'AM', bio: 'Previously built infra at Vercel. Loves systems design and cold brew.' },
  { name: 'Sam Rivera',     role: 'Co-founder & CTO',      color: 'blue'    as const, fallback: 'SR', bio: 'Full-stack engineer with a passion for DX and open-source tools.' },
  { name: 'Jordan Lee',     role: 'Head of Design',         color: 'emerald' as const, fallback: 'JL', bio: 'Turned Linear.app dark themes into a career philosophy.' },
  { name: 'Casey Park',     role: 'Head of Growth',         color: 'amber'   as const, fallback: 'CP', bio: 'Built two bootstrapped SaaS products before joining. 0→$30k MRR.' },
  { name: 'Taylor Kim',     role: 'Lead Engineer',          color: 'rose'    as const, fallback: 'TK', bio: 'TypeScript purist. Writes zero `any`. Maintains several OSS projects.' },
  { name: 'Morgan Chen',    role: 'Developer Relations',    color: 'cyan'    as const, fallback: 'MC', bio: 'Ships tutorials, screencasts, and Loom walkthroughs every week.' },
]

const values = [
  {
    icon: Zap,
    title: 'Ship fast',
    desc: 'We believe in momentum. Every decision is optimized to help teams move from idea to production in days, not months.',
  },
  {
    icon: Globe,
    title: 'Built in the open',
    desc: 'Transparency is core to how we build. We share what we learn, publish our roadmap, and ship changelogs every release.',
  },
  {
    icon: Users,
    title: 'Community first',
    desc: 'Our best features have come from conversations with customers. We listen more than we talk.',
  },
  {
    icon: Heart,
    title: 'Craft matters',
    desc: 'Every pixel, every interaction, every line of generated code is reviewed for quality. We don\'t settle for "good enough".',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-950">

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Badge variant="brand" dot className="mb-5">About us</Badge>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-surface-50 leading-tight mb-6">
            We&apos;re on a mission to make<br className="hidden sm:block" />
            <span className="text-brand-400"> great products ship faster</span>
          </h1>
          <p className="text-lg text-surface-400 leading-relaxed">
            NexLayer started as an internal toolkit for our own SaaS projects.
            After the tenth time we rebuilt the same landing page from scratch,
            we decided to package it properly — and share it with the world.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-surface-800/60 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: '2,400+', label: 'Developers' },
            { value: '$4.2M',  label: 'Revenue unlocked' },
            { value: '48h',    label: 'Avg. launch time' },
            { value: '4.9★',   label: 'Average rating' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-surface-50 mb-1">{stat.value}</div>
              <div className="text-sm text-surface-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl font-display font-bold text-surface-100 mb-3">
              What we believe in
            </h2>
            <p className="text-surface-500 max-w-lg mx-auto">
              Four principles that guide every product decision we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-6 rounded-2xl border border-surface-800 bg-surface-900/40
                           hover:border-surface-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-surface-100 mb-1.5">{title}</h3>
                  <p className="text-sm text-surface-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 sm:px-6 border-t border-surface-800/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl font-display font-bold text-surface-100 mb-3">
              Meet the team
            </h2>
            <p className="text-surface-500 max-w-lg mx-auto">
              A small, fully remote team spread across three continents.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(member => (
              <div
                key={member.name}
                className="p-6 rounded-2xl border border-surface-800 bg-surface-900/40
                           hover:border-surface-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Avatar fallback={member.fallback} color={member.color} size="lg" />
                  <div>
                    <div className="font-semibold text-surface-100 text-sm">{member.name}</div>
                    <div className="text-xs text-surface-500 mt-0.5">{member.role}</div>
                  </div>
                </div>
                <p className="text-sm text-surface-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 border-t border-surface-800/60">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold text-surface-100 mb-4">
            Want to join us?
          </h2>
          <p className="text-surface-400 mb-8">
            We&apos;re a remote-first team and occasionally open up new roles.
            Drop us a line if you think you&apos;d be a great fit.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       bg-brand-500 text-surface-950 font-semibold text-sm
                       hover:bg-brand-400 transition-all duration-200
                       shadow-lg shadow-brand-500/20 hover:-translate-y-0.5"
          >
            Get in touch <ArrowRight size={15} />
          </a>
        </div>
      </section>

    </div>
  )
}
