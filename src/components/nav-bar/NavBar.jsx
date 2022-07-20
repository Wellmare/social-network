import s from './NavBar.module.css'
import Navigation from './navigation/Navigation'
import NavBarFriends from './nav-bar-friends/NavBarFriends'

const NavBar = ({navBar: {friends}}) => {
    return (
        <nav className={s.nav}>
            <Navigation/>
            <NavBarFriends friends={friends}/>
        </nav>
    )
}
export default NavBar