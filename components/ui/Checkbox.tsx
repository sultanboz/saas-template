'use client'

import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface CheckboxProps {
  checked:       boolean
  onChange:      (checked: boolean) => void
  indeterminate?: boolean
  label?:        string
  hint?:         string
  disabled?:     boolean
  className?:    string
}

export function Checkbox({
  checked,
  onChange,
  indeterminate,
  label,
  hint,
  disabled,
  className,
}: CheckboxProps) {
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
          'w-4 h-4 rounded border flex items-center justify-center',
          'transition-all duration-150',
          (checked || indeterminate)
            ? 'bg-brand-500 border-brand-500'
            : 'border-surface-700 bg-surface-900 group-hover:border-surface-600'
        )}>
          {indeterminate && !checked && (
            <Minus size={10} className="text-surface-950" strokeWidth={3} />
          )}
          {checked && (
            <Check size={10} className="text-surface-950" strokeWidth={3} />
          )}
        </div>
      </div>

      {(label || hint) && (
        <div>
          {label && (
            <span className="block text-sm font-medium text-surface-200">{label}</span>
          )}
          {hint && (
            <span className="block text-xs text-surface-500 mt-0.5">{hint}</span>
          )}
        </div>
      )}
    </label>
  )
}
