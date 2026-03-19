'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

export interface TooltipProps {
  content:   React.ReactNode
  children:  React.ReactElement
  placement?: 'top' | 'bottom' | 'left' | 'right'
  delay?:    number
  className?: string
}

export function Tooltip({
  content,
  children,
  placement = 'top',
  delay     = 300,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  function show() {
    timer.current = setTimeout(() => setVisible(true), delay)
  }
  function hide() {
    clearTimeout(timer.current)
    setVisible(false)
  }

  useEffect(() => () => clearTimeout(timer.current), [])

  const positionMap = {
    top:    'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left:   'right-full top-1/2 -translate-y-1/2 mr-2',
    right:  'left-full top-1/2 -translate-y-1/2 ml-2',
  }

  const arrowMap = {
    top:    'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-surface-800',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-surface-800',
    left:   'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-surface-800',
    right:  'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-surface-800',
  }

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}

      {visible && (
        <div
          role="tooltip"
          className={cn(
            'absolute z-50 pointer-events-none',
            positionMap[placement]
          )}
        >
          <div className={cn(
            'px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap',
            'bg-surface-800 border border-surface-700 text-surface-100',
            'shadow-lg shadow-black/20',
            className
          )}>
            {content}
          </div>
        </div>
      )}
    </div>
  )
}
