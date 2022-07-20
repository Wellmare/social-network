import s from '../NavBar.module.css'
import {Link} from 'react-router-dom'

const link_active = s.link_active


const Navigation = () => {
    const changeActiveClass = (e) => {
        const navBar = e.target.parentNode.parentNode
        navBar.querySelector('.' + s.link_active).classList.remove(link_active)
        e.target.parentNode.classList.add(link_active)
    }
    return (
        <>
            <div className={`${s.item} ${s.link_active}`}>
                <Link to="/profile" onClick={changeActiveClass}>Profile</Link>
            </div>
            <div className={s.item}>
                <Link to="/dialogs" onClick={changeActiveClass}>Messages</Link>
            </div>
            <div className={s.item}>
                <Link to="/news" onClick={changeActiveClass}>News</Link>
            </div>
            <div className={s.item}>
                <Link to="/music" onClick={changeActiveClass}>Music</Link>
            </div>
            <div className={`${s.item} ${s.settings}`}>
                <Link to="/settings" onClick={changeActiveClass}>Settings</Link>
            </div>
        </>
    )
}

export default Navigation