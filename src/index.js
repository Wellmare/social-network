import './index.css'
import App from './App'
import state, {addPost} from './redux/state'
import rerenderEntireTree from './render'


rerenderEntireTree(state, addPost)

// const {dialogsPage, profilePage: {postsData}, navBar} = state


