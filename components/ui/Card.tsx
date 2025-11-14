import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-2xl p-6 shadow-card',
          hover && 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'
