import React, {FC} from 'react'

import {PopupLayout} from "components/PopupsLayout";
import {ModalCard} from "components/ModalCard";
import {usePresenter} from "./usePresenter";

interface IProps {
    close: () => void
}


export const BarPopup:FC<IProps> = (props) => {
    const {onClick} = usePresenter()
    return <PopupLayout close={props.close}>
        <ModalCard close={props.close} header="BAR Popups">
            <>
                <button onClick={onClick}>add Foo popup</button>
            </>
        </ModalCard>
    </PopupLayout>

}