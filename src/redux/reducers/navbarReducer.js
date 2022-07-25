const initialState = {
    friends: [{
        id: 1, name: 'Andrew', avatarUrl: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
    }, {
        id: 4,
        name: 'Sweta',
        avatarUrl: 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827'
    }, {id: 2, name: 'Dmitry', avatarUrl: 'https://coolsen.ru/wp-content/uploads/2021/06/138-8-1018x1024.jpg'},]
}

const navbarReducer = (state = initialState, action) => {
    return state
}

export default navbarReducer