import Post from '../post/Post'

import {addPostCreator, updateNewPostTextCreator} from '../../../../redux/reducers/profileReducer'
import MyPosts from './MyPosts'
import StoreContext from '../../../../StoreContext'


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {({getState, dispatch}) => {
                const state = getState()
                const posts = state.profilePage.postsData.map(({message, likesCount}, i) => <Post key={i}
                                                                                                  message={message}
                                                                                                  likesCount={likesCount}/>)

                const addPost = () => {
                    dispatch(addPostCreator())
                }
                const updateNewPostText = (text) => {
                    dispatch(updateNewPostTextCreator(text))
                }

                return (
                    <MyPosts posts={posts} addPost={addPost} updateNewPostText={updateNewPostText}
                             newPostText={state.profilePage.newPostText}/>
                )
            }}
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer