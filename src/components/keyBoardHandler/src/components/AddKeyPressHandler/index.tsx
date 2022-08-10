import React, { FC } from 'react'

import { usePresenter } from './hooks/usePresenter'
import { IProps } from './interface'
import { Callback } from '../Callback'

export const AddKeyPressHandler: FC<IProps> = (props) => {
  const { callbacks } = usePresenter(props)
  //test commit 4
  return (
    <>
      {callbacks.map((callbackData) => (
        <Callback key={callbackData.keyName} callbackData={callbackData} />
      ))}
    </>
  )
}
