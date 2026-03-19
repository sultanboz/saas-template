'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'>

export interface InputProps extends NativeInputProps {
  label?:       string
  hint?:        string
  error?:       string
  prefix?:      React.ReactNode
  suffix?:      React.ReactNode
  /** Provide when no visible `label` is rendered — required for accessibility */
  'aria-label'?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, prefix, suffix, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        {(label || hint) && (
          <div className="flex items-center justify-between mb-1.5">
            {label && (
              <label
                htmlFor={inputId}
                className="block text-sm font-medium text-surface-300"
              >
                {label}
              </label>
            )}
            {hint && (
              <span className="text-xs text-surface-600">{hint}</span>
            )}
          </div>
        )}

        <div className="relative">
          {prefix && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-500 flex-shrink-0">
              {prefix}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full rounded-lg text-sm',
              'bg-surface-900 border border-surface-800',
              'text-surface-100 placeholder:text-surface-600',
              'transition-all duration-200',
              'focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/10',
              'hover:border-surface-700',
              prefix ? 'pl-9 pr-3 py-2.5' : 'px-3 py-2.5',
              suffix ? 'pr-28' : '',
              error && 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/10',
              className
            )}
            {...props}
          />

          {suffix && (
            <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
              {suffix}
            </div>
          )}
        </div>

        {error && (
          <p className="mt-1.5 text-xs text-red-400">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'
