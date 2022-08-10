import { FC } from 'react'

import { IProps } from './interfaces'
import { usePresenter } from './hooks/usePresenter'

export const Callback: FC<IProps> = (props) => {
  usePresenter(props)

  return null
}
