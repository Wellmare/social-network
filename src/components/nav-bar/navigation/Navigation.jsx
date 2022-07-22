import s from '../NavBar.module.css'
import {NavLink} from 'react-router-dom'

const link_active = s.link_active


const Navigation = () => {
    const changeActiveClass = (e) => {
        const navBar = e.target.parentNode.parentNode
        navBar.querySelector('.' + s.link_active).classList.remove(link_active)
        e.target.parentNode.classList.add(link_active)
    }

    // const {} = useState({
    //     profile: false,
    //     dialogs: false,
    //     news: false,
    //     music: false,
    //     settings: false,
    // })

    return (<>
        {/*<div className={`${s.item} ${s.link_active}`}>*/}
        {/*    <Link to="/profile" onClick={changeActiveClass}>Profile</Link>*/}
        {/*</div>*/}

        {/*<div className={`${s.item} ${s.link_active}`}>*/}
        {/*    <NavLink to="/profile" className={({isActive}) => {*/}
        {/*        console.log(this)*/}
        {/*    }}>Profile</NavLink>*/}
        {/*</div>*/}

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
        {/*<div className={`${s.item} ${s.link_active}`}>*/}
        {/*    */}
        {/*</div>*/}

        {/*<div className={s.item}>*/}
        {/*    <Link to="/dialogs" onClick={changeActiveClass}>Messages</Link>*/}
        {/*</div>*/}
        {/*<div className={s.item}>*/}
        {/*    <Link to="/news" onClick={changeActiveClass}>News</Link>*/}
        {/*</div>*/}
        {/*<div className={s.item}>*/}
        {/*    <Link to="/music" onClick={changeActiveClass}>Music</Link>*/}
        {/*</div>*/}
        {/*<div className={`${s.item} ${s.settings}`}>*/}
        {/*    <Link to="/settings" onClick={changeActiveClass}>Settings</Link>*/}
        {/*</div>*/}
    </>)
}

export default Navigation