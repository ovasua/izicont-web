import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct asset path for images, handling GitHub Pages subdirectory
 * @param path - The path to the asset (e.g., '/img/logo.png')
 * @returns The full path including basePath in production
 */
export function getAssetPath(path: string): string {
  // In production (GitHub Pages), prepend the basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/izicont-web' : ''
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}
