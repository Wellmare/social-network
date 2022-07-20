import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'


import state, {addPost, subscribe, updateNewPostText} from './redux/state'


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
rerenderEntireTree(state, {addPost, updateNewPostText})

subscribe(rerenderEntireTree)