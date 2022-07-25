const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const id = +state.dialogMessagesData[state.dialogMessagesData.length - 1].id + 1
            const img = 'https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827'
            const message = state.newMessageText

            const newMessage = {
                id, talkerName: 'Me', message, img
            }
            state.dialogMessagesData.push(newMessage)

            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default dialogsReducer
