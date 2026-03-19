import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind class birleştirici — tüm component'larda kullanılır
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
