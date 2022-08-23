import React, {FC} from 'react'

import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import {Manager} from "./components/PopupManager";
import {BarPopup} from "./components/Popups/BarPopup";
import {usePresenter} from "./usePresenter";
import {FooPopup} from './components/Popups/FooPopup'

const config = {
    foo: FooPopup,
    bar: BarPopup
}

const style = {
    backgroundColor: "green",
    zIndex: 1,
    widths: '100Vh',
    height: '100Vh'
}

const btnStyle = {
    zIndex: 2
}


export const AppContainer: FC = () => {
    const {callFoo, close} = usePresenter()

    return <>
        <div style={style}>
            <button data-test="clickMeBtn" style={btnStyle} onClick={callFoo}>Click me =)</button>
        </div>
        <Routes>
            <Route path='/foo' element={<FooPopup close={close}/>}/>
        </Routes>
        <Manager config={config}/>
    </>
}