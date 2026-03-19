import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  options:   SelectOption[]
  label?:    string
  hint?:     string
  error?:    string
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label, hint, error, placeholder, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

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

        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={cn(
              'w-full px-3 py-2.5 pr-9 rounded-xl text-sm appearance-none',
              'bg-surface-900 border border-surface-800',
              'text-surface-100',
              'transition-all duration-200',
              'focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/10',
              'hover:border-surface-700 cursor-pointer',
              error && 'border-red-500/50',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>{placeholder}</option>
            )}
            {options.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2
                       text-surface-500 pointer-events-none"
          />
        </div>

        {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
      </div>
    )
  }
)
Select.displayName = 'Select'
