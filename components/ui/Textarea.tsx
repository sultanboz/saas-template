import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?:    string
  hint?:     string
  error?:    string
  maxChars?: number
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, maxChars, className, id, value, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    const charCount = typeof value === 'string' ? value.length : 0

    return (
      <div className="w-full">
        {(label || hint) && (
          <div className="flex items-center justify-between mb-1.5">
            {label && (
              <label htmlFor={inputId} className="block text-sm font-medium text-surface-300">
                {label}
              </label>
            )}
            {hint && <span className="text-xs text-surface-600">{hint}</span>}
          </div>
        )}

        <textarea
          ref={ref}
          id={inputId}
          value={value}
          className={cn(
            'w-full px-3 py-2.5 rounded-xl text-sm',
            'bg-surface-900 border border-surface-800',
            'text-surface-100 placeholder:text-surface-600',
            'transition-all duration-200 resize-y min-h-[100px]',
            'focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/10',
            'hover:border-surface-700',
            error && 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/10',
            className
          )}
          {...props}
        />

        <div className="flex items-center justify-between mt-1.5">
          {error && <p className="text-xs text-red-400">{error}</p>}
          {maxChars && (
            <span className={cn(
              'text-xs ml-auto',
              charCount > maxChars * 0.9 ? 'text-amber-400' : 'text-surface-600'
            )}>
              {charCount}/{maxChars}
            </span>
          )}
        </div>
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'
