let rerenderEntireTree

let state = {
    dialogsPage: {
        dialogsListData: [
            {id: 1, name: 'Andrew', img: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id: 2, name: 'Dmitry', img: 'https://coolsen.ru/wp-content/uploads/2021/06/138-8-1018x1024.jpg'},
            {id: 3, name: 'Ivan', img: 'https://a.d-cd.net/1a424f2s-960.jpg'},
            {id: 4, name: 'Sweta', img: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827'}
        ],
        dialogMessagesData: [
            {
                id: 1,
                talkerName: 'Me',
                message: 'Hello, i`m Ivan',
                img: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827'
            },
            {
                id: 2,
                talkerName: 'Dmitry',
                message: 'Hello, how are you?',
                img: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
            },
            {
                id: 3,
                talkerName: 'Me',
                message: 'Normalno',
                img: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827'
            },
            {
                id: 4,
                talkerName: 'Me',
                message: 'Normalno Normalno Normalno Normalno Normalno Normalno Normalno Normalno Normalno Normalno Normalno Normalno',
                img: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827'
            }],
    },
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello world!', likesCount: 0},
            {id: 2, message: 'It`s my first post!', likesCount: 12},
            {id: 3, message: 'How are you?', likesCount: 24},
        ],
        newPostText: '',
        profileInfo: {
            headerImg: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827',
            avatarImg: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827',
            name: 'Ivan Kolipov',
            birthday: '3 december',
            city: 'Ukhta',
            education: 'School №10',
        }
    },
    navBar: {
        friends: [
            {id: 1, name: 'Andrew', avatarUrl: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id: 2, name: 'Sweta', avatarUrl: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827'},
            {id: 3, name: 'Dmitry', avatarUrl: 'https://coolsen.ru/wp-content/uploads/2021/06/138-8-1018x1024.jpg'},
        ]
    }
}
window.state = state

export function addPost() {
    const newPost = {id: 4, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.postsData.push(newPost)

    state.profilePage.newPostText = ''
    rerenderEntireTree(state, {addPost, updateNewPostText})
}

export function updateNewPostText(newText) {
    state.profilePage.newPostText = newText

    rerenderEntireTree(state, {addPost, updateNewPostText})
}

export function subscribe(observer) {
    rerenderEntireTree = observer
}

export default state