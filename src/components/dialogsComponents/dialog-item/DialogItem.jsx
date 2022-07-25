import s from './DialogsItem.module.css'
import {NavLink} from 'react-router-dom'

const active = s.active

const DialogItem = ({id, name, img}) => {
    return (<NavLink to={`/dialogs/${id}`} className={({isActive}) => isActive ? active : undefined}>
        <li className={`${s.link}`}>
            <div className={s.wrapper}>
                <img className={s.avatar} src={img} alt="avatar"/>
                <span className={s.name}>{name}</span>
            </div>
        </li>
    </NavLink>)
}

export default DialogItem