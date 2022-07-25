const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    postsData: [{id: 1, message: 'Hello world!', likesCount: 0}, {
        id: 2, message: 'It`s my first post!', likesCount: 12
    }, {id: 3, message: 'How are you?', likesCount: 24},], newPostText: '', profileInfo: {
        headerImg: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827',
        avatarImg: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827',
        name: 'Ivan Kolipov',
        birthday: '3 december',
        city: 'Ukhta',
        education: 'School №10',
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            const newPost = {id: 4, message: state.newPostText, likesCount: 0}
            state.postsData.push(newPost)

            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer