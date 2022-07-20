import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = (state, functions) => {


    root.render(<React.StrictMode>
        <BrowserRouter>
            <App
                state={state} functions={functions}
            />
        </BrowserRouter>
    </React.StrictMode>)
}
export default rerenderEntireTree