import { cn } from '@/lib/utils'

export interface AvatarProps {
  src?:      string
  fallback:  string
  size?:     'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?:    'violet' | 'blue' | 'amber' | 'rose' | 'emerald' | 'cyan' | 'orange' | 'pink'
  className?: string
}

const sizeMap = {
  xs: 'w-5 h-5 text-[8px]',
  sm: 'w-7 h-7 text-[10px]',
  md: 'w-9 h-9 text-xs',
  lg: 'w-12 h-12 text-sm',
  xl: 'w-16 h-16 text-base',
}

const colorMap = {
  violet:  'bg-violet-500',
  blue:    'bg-blue-500',
  amber:   'bg-amber-500',
  rose:    'bg-rose-500',
  emerald: 'bg-emerald-500',
  cyan:    'bg-cyan-500',
  orange:  'bg-orange-500',
  pink:    'bg-pink-500',
}

export function Avatar({ src, fallback, size = 'md', color = 'violet', className }: AvatarProps) {
  return (
    <div className={cn(
      'rounded-full flex items-center justify-center flex-shrink-0',
      'font-semibold text-white overflow-hidden',
      sizeMap[size],
      src ? '' : colorMap[color],
      className
    )}>
      {src
        ? <img src={src} alt={fallback} className="w-full h-full object-cover" />
        : <span>{fallback.slice(0, 2).toUpperCase()}</span>
      }
    </div>
  )
}

// ─── Avatar Group ────────────────────────────────────────
interface AvatarGroupProps {
  avatars: Array<{ fallback: string; color?: AvatarProps['color'] }>
  max?: number
  size?: AvatarProps['size']
}

export function AvatarGroup({ avatars, max = 5, size = 'sm' }: AvatarGroupProps) {
  const visible = avatars.slice(0, max)
  const extra   = avatars.length - max

  return (
    <div className="flex -space-x-2">
      {visible.map((a, i) => (
        <Avatar
          key={i}
          fallback={a.fallback}
          color={a.color}
          size={size}
          className="border-2 border-surface-950 ring-0"
        />
      ))}
      {extra > 0 && (
        <div className={cn(
          'rounded-full flex items-center justify-center flex-shrink-0',
          'border-2 border-surface-950 bg-surface-700 font-semibold text-surface-300',
          sizeMap[size]
        )}>
          +{extra}
        </div>
      )}
    </div>
  )
}
