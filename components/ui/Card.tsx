import { cn } from '@/lib/utils'

export interface CardProps {
  variant?: 'default' | 'elevated' | 'accent' | 'ghost'
  padding?: 'sm' | 'md' | 'lg' | 'none'
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function Card({
  variant  = 'default',
  padding  = 'md',
  className,
  children,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-2xl border transition-all duration-300',

        padding === 'none' && 'p-0',
        padding === 'sm'   && 'p-4',
        padding === 'md'   && 'p-6',
        padding === 'lg'   && 'p-8',

        variant === 'default' &&
          'border-surface-800 bg-surface-900/50',
        variant === 'elevated' &&
          'border-surface-800 bg-surface-900 shadow-xl shadow-black/20',
        variant === 'accent' &&
          'border-brand-500/25 bg-surface-900 shadow-xl shadow-brand-500/6',
        variant === 'ghost' &&
          'border-transparent bg-transparent',

        onClick && 'cursor-pointer hover:border-surface-700 hover:bg-surface-900',

        className
      )}
    >
      {children}
    </div>
  )
}
