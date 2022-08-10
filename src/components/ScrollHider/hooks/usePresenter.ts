import { useEffect } from 'react'

export const usePresenter = (): void => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'scroll'
    }
  }, [])
}
