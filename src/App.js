import './App.css'
import Header from './components/header/Header'
import NavBar from './components/nav-bar/NavBar'

import {Route, Routes} from 'react-router-dom'

import Dialogs from './components/dialogsComponents/dialogs/Dialogs'
import Profile from './components/profileComponents/profile/Profile'


function App({state: {dialogsPage, profilePage, navBar}, functions}) {
    console.log()

    return (<div className="app-wrapper">
        <Header/>
        <NavBar navBar={navBar}/>

        <div className={'app-content'}>
            <Routes>

                <Route path={'/profile'} element={
                    <Profile profilePage={profilePage} functions={functions}/>
                }/>

                <Route path={'/dialogs/*'} element={
                    <Dialogs dialogsPage={dialogsPage}/>
                }/>

            </Routes>
        </div>
    </div>)
}

export default App
