import DialogItem from '../dialog-item/DialogItem'
import DialogMessage from '../dialog-message/DialogMessage'
import {sendMessageCreator, updateNewMessageTextCreator} from '../../../redux/reducers/dialogsReducer'
import StoreContext from '../../../StoreContext'
import Dialogs from './Dialogs'


// const Dialogs = ({dialogsPage: {dialogsListData, dialogMessagesData, newMessageText}, dispatch}) => {
const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {({getState, dispatch}) => {
                const state = getState()

                const dialogsList = state.dialogsPage.dialogsListData.map(({id, name, img}) => <DialogItem key={id} id={id} img={img} name={name}/>)

                const messages = state.dialogsPage.dialogMessagesData.map(({id, talkerName, message, img}) =>
                    <DialogMessage
                        key={id} talkerName={talkerName} img={img} message={message}/>)

                const sendMessage = () => {
                    dispatch(sendMessageCreator())
                }

                const changeMessage = (text) => {
                    dispatch(updateNewMessageTextCreator(text))
                }

                return (
                    <Dialogs messages={messages} sendMessage={sendMessage} changeMessage={changeMessage}
                             newMessageText={state.dialogsPage.newMessageText} dialogsList={dialogsList}/>
                )
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer