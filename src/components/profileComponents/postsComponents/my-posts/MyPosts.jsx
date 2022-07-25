import s from './MyPosts.module.css'
import FormAddPost from '../form-add-post/FormAddPost'


// const MyPosts = ({ postsData, newPostText, dispatch }) => {
const MyPosts = ({posts, newPostText, addPost, updateNewPostText}) => {
    return (
        <div className={s.posts}>
            <h2>My posts</h2>
            <FormAddPost addPost={addPost} updateNewPostText={updateNewPostText} newPostText={newPostText}/>

            {posts}
        </div>
    )
}
export default MyPosts