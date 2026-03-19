import { cn } from '@/lib/utils'

export interface SkeletonProps {
  className?: string
  variant?:   'text' | 'circle' | 'rect'
  lines?:     number
}

export function Skeleton({ className, variant = 'rect' }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-surface-800',
        variant === 'circle' && 'rounded-full',
        variant === 'text'   && 'rounded-md h-4',
        variant === 'rect'   && 'rounded-xl',
        className
      )}
      aria-hidden
    />
  )
}

// ─── Skeleton Card ───────────────────────────────────────
export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-surface-800 bg-surface-900/40 p-6 space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton className="w-10 h-10 rounded-xl" />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" className="w-1/2" />
          <Skeleton variant="text" className="w-1/3 h-3" />
        </div>
      </div>
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-4/5" />
      <Skeleton variant="text" className="w-2/3 h-3" />
    </div>
  )
}

// ─── Skeleton Text block ─────────────────────────────────
export function SkeletonText({ lines = 3 }: { lines?: number }) {
  const widths = ['w-full', 'w-5/6', 'w-4/5', 'w-3/4', 'w-2/3']
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={widths[i % widths.length]}
        />
      ))}
    </div>
  )
}

// ─── Skeleton Avatar row ─────────────────────────────────
export function SkeletonAvatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeMap = { sm: 'w-7 h-7', md: 'w-9 h-9', lg: 'w-12 h-12' }
  const textH   = { sm: 'h-3', md: 'h-4', lg: 'h-5' }
  return (
    <div className="flex items-center gap-3">
      <Skeleton className={cn('rounded-full', sizeMap[size])} />
      <div className="space-y-1.5 flex-1">
        <Skeleton variant="text" className={cn('w-28', textH[size])} />
        <Skeleton variant="text" className="w-20 h-3" />
      </div>
    </div>
  )
}
