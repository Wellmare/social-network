import s from './ProfileInfo.module.css'

const ProfileInfo = ({headerImg, avatarImg, name, birthday, city, education}) => {
    return (<>
        <div className={s.profile_header}>
            <img
                // src="https://cs1.livemaster.ru/storage/2c/bd/3c821fcf5e320b4457ca7f0e25p1--aksessuary-shapka-avatar.jpg"
                src={headerImg}
                alt="profile-header-img"/>
        </div>
        <div className={s.information}>
            <div className={s.avatar_name}>
                {/*<img src="https://a.d-cd.net/9c1d81u-960.jpg" alt="avatar" className={s.avatar}/>*/}
                <img src={avatarImg} alt="avatar" className={s.avatar}/>
                <p className={s.name}>{name}</p>
            </div>
            <p className={s.user_info}>
                Date of Birth: {birthday} <br/>
                City: {city} <br/>
                Education: {education}
            </p>
        </div>
    </>)
}
export default ProfileInfo