import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

import store from './redux/redux-store'

import StoreContext from './StoreContext'


const root = ReactDOM.createRoot(document.getElementById('root'))
const rerenderEntireTree = (store) => {
    root.render(<React.StrictMode>
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>
    </React.StrictMode>)
}

const renderWithState = () => {
    rerenderEntireTree(store)
}

renderWithState()

store.subscribe(renderWithState)