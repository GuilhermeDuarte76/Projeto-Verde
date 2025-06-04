import { useEffect } from 'react'

export const useScrollReveal = (selector, options = {}) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ScrollReveal) {
      const defaultOptions = {
        distance: '30px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: false,
        ...options
      }

      const sr = window.ScrollReveal(defaultOptions)
      sr.reveal(selector, options)

      return () => {
        if (sr && typeof sr.destroy === 'function') {
          sr.destroy()
        }
      }
    }
  }, [selector, options])
}