import React, {FC} from 'react'

import {PopupLayout} from "components/PopupsLayout";
import {ModalCard} from "components/ModalCard";
import {usePresenter} from "./usePresenter";

interface IProps {
    close: () => void
}


export const FooPopup:FC<IProps> = (props) => {
    const {onClick} = usePresenter()
    return <PopupLayout close={props.close} dataTest='fooPopup'>
        <ModalCard close={props.close} header="FOO Popup">
            <>
                <button onClick={onClick}>add Bar popup</button>
            </>
        </ModalCard>
    </PopupLayout>

}