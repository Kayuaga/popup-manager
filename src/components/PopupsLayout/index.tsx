import React, { FC } from 'react'

import { AddKeyPressHandler } from 'components/keyBoardHandler'
import { OverlayingPopupLayout } from 'components/Layouts'
import { Portal } from 'components/Portal'


import { ScrollHider } from 'components/ScrollHider'

interface IProps {
  close: () => void
  children: React.ReactElement
}

export const PopupLayout: FC<IProps> = ({ close, children }) => {
  return (
    <>
        <Portal>
          <ScrollHider />
          <AddKeyPressHandler onEsc={close} />
          <OverlayingPopupLayout onClose={close}>{children}</OverlayingPopupLayout>
        </Portal>
    </>
  )
}
