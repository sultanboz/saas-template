'use client'

import { cn } from '@/lib/utils'

export interface SwitchProps {
  checked:   boolean
  onChange:  (checked: boolean) => void
  label?:    string
  hint?:     string
  disabled?: boolean
  size?:     'sm' | 'md'
  className?: string
}

export function Switch({
  checked,
  onChange,
  label,
  hint,
  disabled,
  size     = 'md',
  className,
}: SwitchProps) {
  return (
    <label className={cn(
      'flex items-start gap-3 cursor-pointer group',
      disabled && 'opacity-50 cursor-not-allowed',
      className
    )}>
      <div className="relative flex-shrink-0 mt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={e => !disabled && onChange(e.target.checked)}
          className="sr-only"
        />
        <div className={cn(
          'rounded-full transition-all duration-200',
          size === 'sm' ? 'w-7 h-4' : 'w-10 h-6',
          checked ? 'bg-brand-500' : 'bg-surface-700',
          !disabled && 'group-hover:opacity-90'
        )}>
          <div className={cn(
            'absolute top-0.5 rounded-full bg-white shadow-sm transition-all duration-200',
            size === 'sm' ? 'w-3 h-3 left-0.5' : 'w-5 h-5 left-0.5',
            checked && (size === 'sm' ? 'translate-x-3' : 'translate-x-4')
          )} />
        </div>
      </div>

      {(label || hint) && (
        <div>
          {label && (
            <span className={cn(
              'block font-medium text-surface-200',
              size === 'sm' ? 'text-xs' : 'text-sm'
            )}>
              {label}
            </span>
          )}
          {hint && (
            <span className="block text-xs text-surface-500 mt-0.5">{hint}</span>
          )}
        </div>
      )}
    </label>
  )
}
