import s from '../../NavBar.module.css'
import {Link} from 'react-router-dom'

const NavBarFriend = ({name, avatarUrl, id}) => {
    return (
        <Link to={`/dialogs/${id}`}>
            <div className={s.friend}>
                <img className={s.avatar} src={avatarUrl}
                     alt="avatar"/>
                <span className={s.name}>{name}</span>
            </div>
        </Link>
    )
}

export default NavBarFriend