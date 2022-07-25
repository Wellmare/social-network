import dialogsReducer from './reducers/dialogsReducer'
import profileReducer from './reducers/profileReducer'

let store = {
    _state: {
        dialogsPage: {
            newMessageText: '',
            dialogsListData: [{
                id: 1, name: 'Andrew', img: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
            }, {
                id: 2, name: 'Dmitry', img: 'https://coolsen.ru/wp-content/uploads/2021/06/138-8-1018x1024.jpg'
            }, {id: 3, name: 'Ivan', img: 'https://a.d-cd.net/1a424f2s-960.jpg'}, {
                id: 4, name: 'Sweta', img: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827'
            }], dialogMessagesData: [{
                id: 1,
                talkerName: 'Me',
                message: 'Hello, i`m Ivan',
                img: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827'
            }, {
                id: 2,
                talkerName: 'Dmitry',
                message: 'Hello, how are you?',
                img: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
            }, {
                id: 3,
                talkerName: 'Me',
                message: 'Normalno',
                img: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827'
            }, {
                id: 4,
                talkerName: 'Me',
                message: 'Normalno Normalno Normalno Normalno Normalno Normalno Normalno Normalno Normalno Normalno Normalno Normalno',
                img: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827'
            }],
        },
        profilePage: {
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
        },
        navBar: {
            friends: [{
                id: 1, name: 'Andrew', avatarUrl: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
            }, {
                id: 4,
                name: 'Sweta',
                avatarUrl: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827'
            }, {id: 2, name: 'Dmitry', avatarUrl: 'https://coolsen.ru/wp-content/uploads/2021/06/138-8-1018x1024.jpg'},]
        }
    }, _callSubscriber() {
        console.error('Observer not selected')
    }, getState() {
        return this._state
    }, subscribe(observer) {
        this._callSubscriber = observer
    }, _renderSubscriber() {
        this._callSubscriber(this._state, this.dispatch)
    },


    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._renderSubscriber()
    }
}

// BIND THIS
for (const storeKey in store) {
    if (typeof store[storeKey] === 'function') {
        store[storeKey] = store[storeKey].bind(store)
    }
}
// BIND THIS

export default store