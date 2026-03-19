'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline'
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium',
          'transition-all duration-200 rounded-lg',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50',
          'disabled:opacity-50 disabled:pointer-events-none',

          // sizes
          size === 'xs' && 'px-2.5 py-1 text-xs rounded-md',
          size === 'sm' && 'px-3.5 py-1.5 text-xs',
          size === 'md' && 'px-4 py-2.5 text-sm',
          size === 'lg' && 'px-6 py-3.5 text-base',

          // variants
          variant === 'primary' &&
            'bg-brand-500 text-surface-950 hover:bg-brand-400 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5',
          variant === 'secondary' &&
            'border border-surface-700 text-surface-300 hover:border-surface-600 hover:text-surface-50 hover:bg-surface-800/50',
          variant === 'ghost' &&
            'text-surface-400 hover:text-surface-50 hover:bg-surface-800/60',
          variant === 'outline' &&
            'border border-brand-500/30 text-brand-400 hover:border-brand-500/60 hover:bg-brand-500/8',
          variant === 'danger' &&
            'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20',

          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
