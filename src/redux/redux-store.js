import {combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from './reducers/profileReducer'
import dialogsReducer from './reducers/dialogsReducer'
import navbarReducer from './reducers/navbarReducer'
// import {configureStore} from '@reduxjs/toolkit'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navbarReducer
})

const store = createStore(reducers)



// const store = configureStore({
//     reducer: {
//         profilePage: profileReducer,
//         dialogsPage: dialogsReducer,
//         navBar: navbarReducer
//     }
// })

export default store