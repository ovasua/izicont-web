import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent',
          {
            'bg-accent text-white hover:bg-accent-light shadow-lg hover:shadow-xl': variant === 'primary',
            'bg-primary-900 text-white hover:bg-primary-700': variant === 'secondary',
            'border-2 border-white text-white hover:bg-white hover:text-primary-900': variant === 'outline',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
