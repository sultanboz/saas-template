'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export interface Tab {
  id:       string
  label:    string
  content?: React.ReactNode
  badge?:   string | number
}

export interface TabsProps {
  tabs:         Tab[]
  defaultTab?:  string
  variant?:     'line' | 'pill' | 'card'
  onChange?:    (id: string) => void
  className?:   string
}

export function Tabs({
  tabs,
  defaultTab,
  variant   = 'line',
  onChange,
  className,
}: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id)

  function select(id: string) {
    setActive(id)
    onChange?.(id)
  }

  const activeTab = tabs.find(t => t.id === active)

  return (
    <div className={cn('w-full', className)}>
      {/* Tab list */}
      <div className={cn(
        'flex items-center',
        variant === 'line' && 'border-b border-surface-800 gap-1',
        variant === 'pill' && 'gap-1 p-1 rounded-xl bg-surface-900 border border-surface-800 w-fit',
        variant === 'card' && 'gap-1',
      )}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => select(tab.id)}
            className={cn(
              'inline-flex items-center gap-2 font-medium text-sm transition-all duration-200',
              'focus-visible:outline-none',

              variant === 'line' && [
                'px-3 py-2.5 -mb-px border-b-2',
                active === tab.id
                  ? 'border-brand-500 text-surface-50'
                  : 'border-transparent text-surface-500 hover:text-surface-300 hover:border-surface-700'
              ],

              variant === 'pill' && [
                'px-3 py-1.5 rounded-lg',
                active === tab.id
                  ? 'bg-surface-700 text-surface-50 shadow-sm'
                  : 'text-surface-500 hover:text-surface-300'
              ],

              variant === 'card' && [
                'px-4 py-2 rounded-lg border',
                active === tab.id
                  ? 'border-surface-700 bg-surface-900 text-surface-50'
                  : 'border-transparent text-surface-500 hover:text-surface-300'
              ]
            )}
          >
            {tab.label}
            {tab.badge !== undefined && (
              <span className={cn(
                'text-[10px] font-semibold px-1.5 py-0.5 rounded-full',
                active === tab.id
                  ? 'bg-brand-500/20 text-brand-400'
                  : 'bg-surface-800 text-surface-500'
              )}>
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab?.content && (
        <div className="mt-4">{activeTab.content}</div>
      )}
    </div>
  )
}
