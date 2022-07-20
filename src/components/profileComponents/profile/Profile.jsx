import s from './Profile.module.css'
import Posts from '../postsComponents/my-posts/MyPosts'
import ProfileInfo from '../profileInfo/ProfileInfo'


const Profile = ({profilePage: {postsData, newPostText}, functions}) => {
    return (
        <main className={s.profile}>
            <ProfileInfo/>
            <Posts postsData={postsData} newPostText={newPostText} functions={functions}/>
        </main>
    )
}
export default Profile