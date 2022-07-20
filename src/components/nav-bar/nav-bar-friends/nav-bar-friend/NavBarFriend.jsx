import s from '../../NavBar.module.css'

const NavBarFriend = ({name, avatarUrl}) => {
    return (<div className={s.friend}>
        <img className={s.avatar} src={avatarUrl}
             alt="avatar"/>
        <span className={s.name}>{name}</span>
    </div>)
}

export default NavBarFriend