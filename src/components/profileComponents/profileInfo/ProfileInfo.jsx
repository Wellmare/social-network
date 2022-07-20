import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (<>
        <div className={s.profile_header}>
            <img
                // src="https://cs1.livemaster.ru/storage/2c/bd/3c821fcf5e320b4457ca7f0e25p1--aksessuary-shapka-avatar.jpg"
                src="https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827"
                alt="profile-header"/>
        </div>
        <div className={s.information}>
            <div className={s.avatar_name}>
                {/*<img src="https://a.d-cd.net/9c1d81u-960.jpg" alt="avatar" className={s.avatar}/>*/}
                <img src="https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827" alt="avatar" className={s.avatar}/>
                <p className={s.name}>Ivan Kolipov</p>
            </div>
            <p className={s.user_info}>
                Date of Birth: 3 december <br/>
                City: Ukhta <br/>
                Education: School №10
            </p>
        </div>
    </>)
}
export default ProfileInfo