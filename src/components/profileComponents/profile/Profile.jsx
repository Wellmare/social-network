import s from './Profile.module.css'
import ProfileInfo from '../profileInfo/ProfileInfo'
import MyPostsContainer from '../postsComponents/my-posts/MyPostsContainer'

const Profile = ({store}) => {
    const profileInfo = store.getState().profilePage.profileInfo

    return (
        <main className={s.profile}>
            <ProfileInfo {...profileInfo}/>
            <MyPostsContainer/>
        </main>
    )
}
export default Profile