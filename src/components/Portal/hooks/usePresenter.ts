import { useEffect, useState } from 'react'

export const usePresenter = (): HTMLDivElement => {
  const [container] = useState(() => document.createElement('div'))
  useEffect(() => {
    const parent = document.body
    parent.appendChild(container)
    return () => {
      parent.removeChild(container)
    }
  })
  return container
}
