import React, { FC } from 'react'

import styles from './style.module.css'

interface IProps {
  children: React.ReactElement
}

export const FullScreenPopupLayout: FC<IProps> = (props) => {
  return <div className={styles.container}>{props.children}</div>
}
