import { cn } from '@/lib/utils'

export interface ProgressProps {
  value:     number          // 0-100
  max?:      number
  label?:    string
  showValue?: boolean
  size?:     'sm' | 'md' | 'lg'
  variant?:  'brand' | 'blue' | 'amber' | 'red' | 'surface'
  className?: string
  animated?:  boolean
}

const sizeMap = { sm: 'h-1', md: 'h-2', lg: 'h-3' }

const variantMap = {
  brand:   'bg-brand-500',
  blue:    'bg-blue-500',
  amber:   'bg-amber-500',
  red:     'bg-red-500',
  surface: 'bg-surface-400',
}

export function Progress({
  value,
  max      = 100,
  label,
  showValue = false,
  size     = 'md',
  variant  = 'brand',
  className,
  animated = true,
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-1.5">
          {label    && <span className="text-xs text-surface-400">{label}</span>}
          {showValue && <span className="text-xs font-mono text-surface-300">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={cn(
        'w-full rounded-full bg-surface-800 overflow-hidden',
        sizeMap[size]
      )}>
        <div
          className={cn(
            'h-full rounded-full',
            variantMap[variant],
            animated && 'transition-all duration-700 ease-out'
          )}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  )
}
