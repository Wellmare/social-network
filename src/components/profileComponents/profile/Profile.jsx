import s from './Profile.module.css'
import Posts from '../postsComponents/my-posts/MyPosts'
import ProfileInfo from '../profileInfo/ProfileInfo'


const Profile = ({postsData, addPost}) => {
    return (
        <main className={s.profile}>
            <ProfileInfo/>
            <Posts postsData={postsData} addPost={addPost}/>
        </main>
    )
}
export default Profile