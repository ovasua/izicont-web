import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'outline'
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium',
          {
            'bg-gray-100 text-primary-900': variant === 'default',
            'bg-accent/10 text-accent': variant === 'accent',
            'border-2 border-current': variant === 'outline',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'
