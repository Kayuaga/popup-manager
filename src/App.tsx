import React from 'react';

import {BrowserRouter} from "react-router-dom";

import {AppContainer} from "./AppContainer";
import './App.css';

function App() {

    return (
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    );
}

export default App;
