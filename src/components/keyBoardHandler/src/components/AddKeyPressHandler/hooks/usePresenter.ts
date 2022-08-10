import { IProps } from '../interface'
import { Callback, KeyNames } from '../../../interfaces'

interface IReturnedProps {
  callbacks: Callback[]
}

export const usePresenter = ({ isCaptured = false, onEsc }: IProps): IReturnedProps => {
  const callbacks = [
    {
      isCaptured,
      callback: onEsc,
      keyName: KeyNames.ESC,
    },
  ].filter((item) => item.callback) as Callback[]

  return {
    callbacks,
  }
}
