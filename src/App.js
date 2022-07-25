import './App.css'
import Header from './components/header/Header'
import NavBar from './components/nav-bar/NavBar'

// noinspection ES6CheckImport
import {Route, Routes} from 'react-router-dom'

import Profile from './components/profileComponents/profile/Profile'
import StoreContext from './StoreContext'
import DialogsContainer from './components/dialogsComponents/dialogs/DialogsContainer'


// function App({ state: { dialogsPage, profilePage, navBar }, dispatch }) {
function App() {
    return (
        <StoreContext.Consumer>
            {(store) => {
                return (
                    <div className="app-wrapper">
                        <Header/>
                        <NavBar navBar={store.getState().navBar}/>

                        <div className={'app-content'}>
                            <Routes>

                                <Route path={'/profile'} element={
                                    <Profile store={store}/>
                                }/>

                                <Route path={'/dialogs/*'} element={
                                    <DialogsContainer/>
                                }/>

                            </Routes>
                        </div>
                    </div>
                )
            }}
        </StoreContext.Consumer>
    )
}

export default App
