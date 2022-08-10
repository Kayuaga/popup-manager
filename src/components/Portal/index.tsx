import { FC } from 'react'
import ReactDom from 'react-dom'
import { usePresenter } from './hooks/usePresenter'

export const Portal: FC<any> = (props) => {
    const container = usePresenter()
    return ReactDom.createPortal(props.children, container)
}
