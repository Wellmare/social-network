import Post from '../post/Post'
import FormAddPost from '../form-add-post/FormAddPost'

import s from './MyPosts.module.css'


const MyPosts = ({postsData, addPost}) => {
    const posts = postsData.map(({message, likesCount}, i) => <Post key={i} message={message} likesCount={likesCount}/>)
    return (
        <div className={s.posts}>
            <h2>My posts</h2>
            <FormAddPost addPost={addPost}/>

            {posts}
        </div>
    )
}
export default MyPosts