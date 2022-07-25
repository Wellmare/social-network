import s from '../NavBar.module.css'
import {NavLink} from 'react-router-dom'

const link_active = s.link_active


const Navigation = () => {
    return (<div className={s.navigation}>
        <NavLink to="/profile" className={({isActive}) => {
            return isActive ? link_active : undefined
        }}>Profile</NavLink>
        <NavLink to="/dialogs" className={({isActive}) => {
            return isActive ? link_active : undefined
        }}>Dialogs</NavLink>
        <NavLink to="/news" className={({isActive}) => {
            return isActive ? link_active : undefined
        }}>News</NavLink>
        <NavLink to="/music" className={({isActive}) => {
            return isActive ? link_active : undefined
        }}>Music</NavLink>

        <div className={s.settings}>
            <NavLink to="/settings" className={({isActive}) => {
                return isActive ? link_active : undefined
            }}>Settings</NavLink>
        </div>
    </div>)
}

export default Navigation