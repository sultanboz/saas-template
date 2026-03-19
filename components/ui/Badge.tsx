import { cn } from '@/lib/utils'

export interface BadgeProps {
  variant?: 'default' | 'brand' | 'blue' | 'amber' | 'red' | 'purple' | 'cyan' | 'outline'
  size?: 'sm' | 'md'
  dot?: boolean
  children: React.ReactNode
  className?: string
}

export function Badge({
  variant = 'default',
  size = 'sm',
  dot = false,
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium',

        size === 'sm' && 'px-2 py-0.5 text-xs',
        size === 'md' && 'px-2.5 py-1 text-sm',

        variant === 'default' && 'bg-surface-800 text-surface-300',
        variant === 'brand'   && 'bg-brand-500/15 text-brand-400',
        variant === 'blue'    && 'bg-blue-500/15 text-blue-400',
        variant === 'amber'   && 'bg-amber-500/15 text-amber-400',
        variant === 'red'     && 'bg-red-500/15 text-red-400',
        variant === 'purple'  && 'bg-violet-500/15 text-violet-400',
        variant === 'cyan'    && 'bg-cyan-500/15 text-cyan-400',
        variant === 'outline' && 'border border-surface-700 text-surface-400',

        className
      )}
    >
      {dot && (
        <span className={cn(
          'w-1.5 h-1.5 rounded-full flex-shrink-0',
          variant === 'brand'  && 'bg-brand-400',
          variant === 'blue'   && 'bg-blue-400',
          variant === 'amber'  && 'bg-amber-400',
          variant === 'red'    && 'bg-red-400',
          variant === 'purple' && 'bg-violet-400',
          variant === 'cyan'   && 'bg-cyan-400',
          variant === 'default' && 'bg-surface-500',
        )} />
      )}
      {children}
    </span>
  )
}
