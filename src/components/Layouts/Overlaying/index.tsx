import React, {FC} from 'react'

import styles from './style.module.css'

interface IProps {
    onClose: () => void
    children: React.ReactElement
}

export const OverlayingPopupLayout: FC<IProps> = (props) => {
    return (
        <div className={styles.container}>
            <div onClick={props.onClose} className={styles.overlay}/>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}
