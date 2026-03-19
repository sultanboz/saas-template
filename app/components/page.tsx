'use client'

import { useState } from 'react'
import { Button }   from '@/components/ui/Button'
import { Badge }    from '@/components/ui/Badge'
import { Card }     from '@/components/ui/Card'
import { Input }    from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select }   from '@/components/ui/Select'
import { Switch }   from '@/components/ui/Switch'
import { Checkbox } from '@/components/ui/Checkbox'
import { Avatar, AvatarGroup } from '@/components/ui/Avatar'
import { Progress } from '@/components/ui/Progress'
import { Tabs }     from '@/components/ui/Tabs'
import { Skeleton, SkeletonCard, SkeletonText, SkeletonAvatar } from '@/components/ui/Skeleton'
import { Tooltip }  from '@/components/ui/Tooltip'
import {
  Mail, Lock, Search, User, Plus, Trash2, Download, ArrowRight,
  Bell, Settings, Star, Zap, Check, AlertCircle, Info, X, ChevronRight,
} from 'lucide-react'

// ─── Section wrapper ─────────────────────────────────────
function Section({ title, desc, children }: {
  title: string
  desc?: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-20">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-surface-100 mb-1">{title}</h2>
        {desc && <p className="text-sm text-surface-500">{desc}</p>}
      </div>
      {children}
    </section>
  )
}

// ─── Demo row ────────────────────────────────────────────
function Row({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      {label && <p className="text-xs text-surface-600 uppercase tracking-wider mb-2">{label}</p>}
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────
export default function ComponentsPage() {
  const [switchA, setSwitchA] = useState(true)
  const [switchB, setSwitchB] = useState(false)
  const [checked, setChecked] = useState<boolean>(false)
  const [indeterminate] = useState(true)
  const [inputVal, setInputVal] = useState('')
  const [textareaVal, setTextareaVal] = useState('')

  return (
    <div className="min-h-screen bg-surface-950">

      {/* Hero */}
      <div className="border-b border-surface-800/60 bg-surface-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
          <Badge variant="brand" dot className="mb-5">Component Library</Badge>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-surface-50 mb-5">
            UI Components
          </h1>
          <p className="text-lg text-surface-400 max-w-xl leading-relaxed">
            Every component that ships with NexLayer — fully typed, accessible,
            and ready to drop into your project.
          </p>
        </div>
      </div>

      {/* Sidebar + content layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">

        {/* ── Buttons ── */}
        <Section title="Button" desc="5 variants × 4 sizes. Accessible with keyboard focus ring.">
          <Row label="Variants">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </Row>
          <Row label="Sizes">
            <Button size="lg">Large</Button>
            <Button size="md">Medium</Button>
            <Button size="sm">Small</Button>
            <Button size="xs">XSmall</Button>
          </Row>
          <Row label="With icons">
            <Button><Plus size={14} /> New project</Button>
            <Button variant="secondary"><Download size={14} /> Export</Button>
            <Button variant="danger"><Trash2 size={14} /> Delete</Button>
            <Button variant="outline">
              Get started <ArrowRight size={14} />
            </Button>
          </Row>
          <Row label="States">
            <Button disabled>Disabled</Button>
            <Button variant="secondary" disabled>Disabled</Button>
          </Row>
        </Section>

        {/* ── Badges ── */}
        <Section title="Badge" desc="8 color variants, dot indicator, and 2 sizes.">
          <Row label="Variants">
            <Badge variant="default">Default</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="blue">Blue</Badge>
            <Badge variant="amber">Amber</Badge>
            <Badge variant="red">Red</Badge>
            <Badge variant="purple">Purple</Badge>
            <Badge variant="cyan">Cyan</Badge>
            <Badge variant="outline">Outline</Badge>
          </Row>
          <Row label="With dot">
            <Badge variant="brand" dot>Online</Badge>
            <Badge variant="red" dot>Critical</Badge>
            <Badge variant="amber" dot>Warning</Badge>
            <Badge variant="blue" dot>Info</Badge>
          </Row>
          <Row label="Sizes">
            <Badge variant="brand" size="sm">Small</Badge>
            <Badge variant="brand" size="md">Medium</Badge>
          </Row>
        </Section>

        {/* ── Cards ── */}
        <Section title="Card" desc="4 visual variants and 4 padding options.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card variant="default" padding="md">
              <p className="text-sm font-medium text-surface-200 mb-1">Default card</p>
              <p className="text-xs text-surface-500">Subtle border on dark background.</p>
            </Card>
            <Card variant="elevated" padding="md">
              <p className="text-sm font-medium text-surface-200 mb-1">Elevated card</p>
              <p className="text-xs text-surface-500">Slightly lighter background with shadow.</p>
            </Card>
            <Card variant="accent" padding="md">
              <p className="text-sm font-medium text-surface-200 mb-1">Accent card</p>
              <p className="text-xs text-surface-500">Brand-tinted border and subtle glow.</p>
            </Card>
            <Card variant="ghost" padding="md">
              <p className="text-sm font-medium text-surface-200 mb-1">Ghost card</p>
              <p className="text-xs text-surface-500">No border or background — pure content.</p>
            </Card>
          </div>
        </Section>

        {/* ── Inputs ── */}
        <Section title="Input" desc="Text input with label, hint, error, prefix, and suffix slots.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Email address" placeholder="you@example.com" type="email" />
            <Input label="Password" placeholder="••••••••" type="password"
                   hint="Min. 8 characters" />
            <Input
              label="Search"
              placeholder="Search projects…"
              prefix={<Search size={14} />}
            />
            <Input
              label="Username"
              placeholder="johndoe"
              prefix={<User size={14} />}
              suffix={<span className="text-xs text-surface-500">.nexlayer.io</span>}
            />
            <Input label="With error" placeholder="wrong@" value="wrong@"
                   error="Please enter a valid email." onChange={() => {}} />
            <Input
              label="With value"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              placeholder="Start typing…"
            />
          </div>
        </Section>

        {/* ── Textarea ── */}
        <Section title="Textarea" desc="Multi-line input with optional character counter.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Textarea label="Message" placeholder="Write something…" rows={4} />
            <Textarea
              label="Bio"
              hint="Describe yourself"
              placeholder="I'm a developer who…"
              maxChars={200}
              value={textareaVal}
              onChange={e => setTextareaVal(e.target.value)}
              rows={4}
            />
          </div>
        </Section>

        {/* ── Select ── */}
        <Section title="Select" desc="Native select with custom chevron icon.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Framework"
              placeholder="Pick a framework"
              options={[
                { value: 'next',   label: 'Next.js' },
                { value: 'remix',  label: 'Remix' },
                { value: 'astro',  label: 'Astro' },
                { value: 'nuxt',   label: 'Nuxt.js' },
              ]}
            />
            <Select
              label="Status"
              hint="Required"
              options={[
                { value: 'active',   label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
                { value: 'pending',  label: 'Pending' },
              ]}
              error="Please select a status."
            />
          </div>
        </Section>

        {/* ── Switch ── */}
        <Section title="Switch" desc="Accessible toggle with label and hint text.">
          <div className="flex flex-col gap-4 max-w-xs">
            <Switch
              checked={switchA}
              onChange={setSwitchA}
              label="Email notifications"
              hint="Receive updates via email"
            />
            <Switch
              checked={switchB}
              onChange={setSwitchB}
              label="Marketing emails"
            />
            <Switch
              checked={false}
              onChange={() => {}}
              label="Disabled switch"
              disabled
            />
          </div>
        </Section>

        {/* ── Checkbox ── */}
        <Section title="Checkbox" desc="Supports checked, unchecked, and indeterminate states.">
          <div className="flex flex-col gap-3 max-w-xs">
            <Checkbox
              checked={checked}
              onChange={(v) => setChecked(v)}
              label="Agree to terms"
              hint="You must accept to continue"
            />
            <Checkbox checked={indeterminate} indeterminate label="Select all (indeterminate)" onChange={() => {}} />
            <Checkbox checked={false} label="Disabled option" disabled onChange={() => {}} />
          </div>
        </Section>

        {/* ── Avatar ── */}
        <Section title="Avatar" desc="5 sizes, 8 color variants, with AvatarGroup overflow.">
          <Row label="Sizes">
            <Avatar fallback="Alex" size="xl" color="violet" />
            <Avatar fallback="Sam" size="lg" color="blue" />
            <Avatar fallback="Jo" size="md" color="emerald" />
            <Avatar fallback="Kim" size="sm" color="amber" />
            <Avatar fallback="Mx" size="xs" color="rose" />
          </Row>
          <Row label="Colors">
            {(['violet','blue','amber','rose','emerald','cyan','orange','pink'] as const).map(c => (
              <Avatar key={c} fallback={c.slice(0,2)} color={c} size="md" />
            ))}
          </Row>
          <Row label="Avatar group">
            <AvatarGroup
              size="md"
              max={4}
              avatars={[
                { fallback: 'Alice',   color: 'violet'  },
                { fallback: 'Bob',     color: 'blue'    },
                { fallback: 'Carol',   color: 'emerald' },
                { fallback: 'Dave',    color: 'amber'   },
                { fallback: 'Eve',     color: 'rose'    },
                { fallback: 'Frank',   color: 'cyan'    },
              ]}
            />
          </Row>
        </Section>

        {/* ── Progress ── */}
        <Section title="Progress" desc="Animated fill bar with 5 color variants and 3 sizes.">
          <div className="max-w-sm flex flex-col gap-4">
            <Progress value={72} label="Storage" showValue variant="brand" />
            <Progress value={45} label="CPU usage" showValue variant="blue" />
            <Progress value={88} label="Memory" showValue variant="amber" />
            <Progress value={23} label="Errors" showValue variant="red" />
          </div>
          <Row label="Sizes">
            <div className="w-full max-w-sm flex flex-col gap-3">
              <Progress value={60} size="sm" label="Small" />
              <Progress value={60} size="md" label="Medium" />
              <Progress value={60} size="lg" label="Large" />
            </div>
          </Row>
        </Section>

        {/* ── Tabs ── */}
        <Section title="Tabs" desc="3 visual variants: line, pill, and card.">
          <div className="flex flex-col gap-8">
            <Tabs
              variant="line"
              tabs={[
                { id: 'overview',  label: 'Overview',
                  content: <p className="text-sm text-surface-400">Overview content goes here.</p> },
                { id: 'analytics', label: 'Analytics', badge: 'New',
                  content: <p className="text-sm text-surface-400">Analytics data and charts.</p> },
                { id: 'settings',  label: 'Settings',
                  content: <p className="text-sm text-surface-400">Configure your preferences.</p> },
              ]}
            />

            <Tabs
              variant="pill"
              tabs={[
                { id: 'monthly', label: 'Monthly',
                  content: <p className="text-sm text-surface-400">Monthly billing plan.</p> },
                { id: 'yearly',  label: 'Yearly', badge: '20% off',
                  content: <p className="text-sm text-surface-400">Annual billing — save 20%.</p> },
              ]}
            />

            <Tabs
              variant="card"
              tabs={[
                { id: 'code',    label: 'Code',
                  content: <p className="text-sm font-mono text-brand-400">{'<Button variant="primary" />'}</p> },
                { id: 'preview', label: 'Preview',
                  content: <Button size="sm">Preview button</Button> },
              ]}
            />
          </div>
        </Section>

        {/* ── Tooltip ── */}
        <Section title="Tooltip" desc="4 placement options with configurable show delay.">
          <Row>
            <Tooltip content="Top tooltip" placement="top">
              <Button variant="secondary" size="sm">Top</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" placement="bottom">
              <Button variant="secondary" size="sm">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" placement="left">
              <Button variant="secondary" size="sm">Left</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" placement="right">
              <Button variant="secondary" size="sm">Right</Button>
            </Tooltip>
            <Tooltip content="Quick tooltip!" delay={0}>
              <Button variant="outline" size="sm">No delay</Button>
            </Tooltip>
          </Row>
          <Row label="With icons">
            <Tooltip content="Download all files" placement="top">
              <button className="p-2 rounded-lg bg-surface-800 text-surface-400
                                  hover:text-surface-200 hover:bg-surface-700 transition-colors">
                <Download size={16} />
              </button>
            </Tooltip>
            <Tooltip content="Notification settings" placement="top">
              <button className="p-2 rounded-lg bg-surface-800 text-surface-400
                                  hover:text-surface-200 hover:bg-surface-700 transition-colors">
                <Bell size={16} />
              </button>
            </Tooltip>
            <Tooltip content="Open settings" placement="top">
              <button className="p-2 rounded-lg bg-surface-800 text-surface-400
                                  hover:text-surface-200 hover:bg-surface-700 transition-colors">
                <Settings size={16} />
              </button>
            </Tooltip>
          </Row>
        </Section>

        {/* ── Skeleton ── */}
        <Section title="Skeleton" desc="Loading placeholders: base, SkeletonCard, SkeletonText, SkeletonAvatar.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <p className="text-xs text-surface-600 uppercase tracking-wider mb-3">SkeletonCard</p>
              <SkeletonCard />
            </div>
            <div>
              <p className="text-xs text-surface-600 uppercase tracking-wider mb-3">SkeletonText</p>
              <SkeletonText lines={4} />
            </div>
            <div>
              <p className="text-xs text-surface-600 uppercase tracking-wider mb-3">SkeletonAvatar</p>
              <div className="flex flex-col gap-4">
                <SkeletonAvatar size="sm" />
                <SkeletonAvatar size="md" />
                <SkeletonAvatar size="lg" />
              </div>
            </div>
            <div>
              <p className="text-xs text-surface-600 uppercase tracking-wider mb-3">Custom shapes</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Skeleton variant="circle" className="w-10 h-10" />
                  <Skeleton variant="text" className="flex-1" />
                </div>
                <Skeleton variant="rect" className="w-full h-20" />
                <Skeleton variant="rect" className="w-full h-10 rounded-lg" />
              </div>
            </div>
          </div>
        </Section>

        {/* ── Colors ── */}
        <Section title="Color palette" desc="Surface scale and brand color tokens.">
          <div className="mb-6">
            <p className="text-xs text-surface-600 uppercase tracking-wider mb-3">Surface scale</p>
            <div className="flex gap-2 flex-wrap">
              {[
                ['50',  'bg-surface-50'],
                ['100', 'bg-surface-100'],
                ['200', 'bg-surface-200'],
                ['300', 'bg-surface-300'],
                ['400', 'bg-surface-400'],
                ['500', 'bg-surface-500'],
                ['600', 'bg-surface-600'],
                ['700', 'bg-surface-700'],
                ['800', 'bg-surface-800'],
                ['900', 'bg-surface-900'],
                ['950', 'bg-surface-950'],
              ].map(([step, cls]) => (
                <div key={step} className="flex flex-col items-center gap-1">
                  <div className={`w-10 h-10 rounded-lg border border-surface-700/30 ${cls}`} />
                  <span className="text-[10px] text-surface-600">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-surface-600 uppercase tracking-wider mb-3">Brand colors</p>
            <div className="flex gap-2 flex-wrap">
              {[
                ['300', 'bg-brand-300'],
                ['400', 'bg-brand-400'],
                ['500', 'bg-brand-500'],
                ['600', 'bg-brand-600'],
              ].map(([step, cls]) => (
                <div key={step} className="flex flex-col items-center gap-1">
                  <div className={`w-10 h-10 rounded-lg ${cls}`} />
                  <span className="text-[10px] text-surface-600">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Typography ── */}
        <Section title="Typography" desc="Font scale using Inter (body) and display weight.">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[10px] text-surface-600 uppercase tracking-wider">Display / 4xl</span>
              <p className="text-4xl font-display font-bold text-surface-50 leading-tight mt-1">
                The fastest way to ship.
              </p>
            </div>
            <div>
              <span className="text-[10px] text-surface-600 uppercase tracking-wider">Heading / 2xl</span>
              <p className="text-2xl font-semibold text-surface-100 mt-1">
                Built for modern teams
              </p>
            </div>
            <div>
              <span className="text-[10px] text-surface-600 uppercase tracking-wider">Body / base</span>
              <p className="text-base text-surface-400 leading-relaxed mt-1 max-w-lg">
                NexLayer gives you a production-ready foundation so you can focus
                on building your product, not your marketing site.
              </p>
            </div>
            <div>
              <span className="text-[10px] text-surface-600 uppercase tracking-wider">Small / sm</span>
              <p className="text-sm text-surface-500 mt-1">
                Helper text, captions, and secondary information.
              </p>
            </div>
            <div>
              <span className="text-[10px] text-surface-600 uppercase tracking-wider">Mono / code</span>
              <p className="text-sm font-mono text-brand-400 mt-1">
                npx create-nexlayer-app my-project
              </p>
            </div>
          </div>
        </Section>

        {/* ── Alert patterns ── */}
        <Section title="Alert / Toast patterns" desc="Inline notification patterns built from primitives.">
          <div className="flex flex-col gap-3 max-w-lg">
            {[
              { icon: Check,        color: 'text-emerald-400', bg: 'bg-emerald-500/8 border-emerald-500/20', label: 'Success', msg: 'Your changes have been saved.' },
              { icon: Info,         color: 'text-blue-400',    bg: 'bg-blue-500/8 border-blue-500/20',    label: 'Info',    msg: 'A new software update is available.' },
              { icon: AlertCircle,  color: 'text-amber-400',   bg: 'bg-amber-500/8 border-amber-500/20',  label: 'Warning', msg: 'Your API key will expire in 3 days.' },
              { icon: X,            color: 'text-red-400',     bg: 'bg-red-500/8 border-red-500/20',      label: 'Error',   msg: 'Something went wrong. Please try again.' },
            ].map(({ icon: Icon, color, bg, label, msg }) => (
              <div key={label} className={`flex items-start gap-3 px-4 py-3 rounded-xl border ${bg}`}>
                <Icon size={15} className={`${color} flex-shrink-0 mt-0.5`} />
                <div>
                  <span className={`text-xs font-semibold ${color}`}>{label}</span>
                  <p className="text-xs text-surface-400 mt-0.5">{msg}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Icon grid ── */}
        <Section title="Icons" desc="Lucide React — every icon from the template at a glance.">
          <div className="flex flex-wrap gap-6">
            {[
              Mail, Lock, Search, User, Plus, Trash2, Download, ArrowRight,
              Bell, Settings, Star, Zap, Check, AlertCircle, Info, X, ChevronRight,
            ].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-surface-800 flex items-center justify-center
                                text-surface-300 hover:bg-surface-700 hover:text-surface-100
                                transition-colors cursor-default">
                  <Icon size={18} />
                </div>
                <span className="text-[10px] text-surface-600">
                  {Icon.displayName ?? Icon.name}
                </span>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  )
}
