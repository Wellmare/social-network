import s from './DialogsItem.module.css'
import {NavLink} from 'react-router-dom'

const active = s.active

const DialogItem = ({id, name}) => {
    return (<NavLink to={`/dialogs/${id}`} className={({isActive}) => isActive ? active : undefined}>
        <li className={`${s.link}`}>
            <img className={s.avatar} src="https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827" alt="avatar"/>
            <span className={s.name}>{name}</span>
        </li>
    </NavLink>)
}

export default DialogItem