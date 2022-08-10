import React, {FC} from 'react'


import styles from './style.module.css'

interface IProps {
    close: () => void
    header?: string
    isThin?: boolean
    children: React.ReactElement
}

export const ModalCard: FC<IProps> = ({isThin, header, close, children}) => {
    return (
        <div
            className={styles.container}>
            <div className={styles.headerContainer}>
                <div className={styles.header}>{header}</div>
                <button onClick={close}>Cross icon should be there=)</button>
            </div>
            <>{children}</>
        </div>
    )
}
