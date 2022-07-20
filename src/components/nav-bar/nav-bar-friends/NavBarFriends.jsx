import s from '../NavBar.module.css'
import NavBarFriend from './nav-bar-friend/NavBarFriend'

const NavBarFriends = ({friends}) => {
    return (
        <div className={s.friends}>
            <span className={s.friends_title}>Friends</span>
            <div className={s.friends_list}>
                {friends.map(({name, avatarUrl}, i) => <NavBarFriend key={i} name={name} avatarUrl={avatarUrl}/>)}
            </div>
        </div>
    )
}

export default NavBarFriends