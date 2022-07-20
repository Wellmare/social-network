import s from './DialogsItem.module.css'
import {NavLink} from 'react-router-dom'

const active = s.active

const DialogItem = ({id, name, img}) => {
    return (<NavLink to={`/dialogs/${id}`} className={({isActive}) => isActive ? active : undefined}>
        <li className={`${s.link}`}>
            <img className={s.avatar} src={img} alt="avatar"/>
            <span className={s.name}>{name}</span>
        </li>
    </NavLink>)
}

export default DialogItem