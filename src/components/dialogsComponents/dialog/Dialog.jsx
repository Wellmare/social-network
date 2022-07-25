import s from './Dialog.module.css'
import FormSendMessage from '../form-send-message/FormSendMessage'

// const Dialog = ({dialogMessagesData, dispatch, newMessageText}) => {
const Dialog = ({messages, sendMessage, changeMessage, newMessageText}) => {
    return (
        <div className={s.dialog}>
            {messages}
            <FormSendMessage sendMessage={sendMessage} changeMessage={changeMessage} newMessageText={newMessageText}/>
        </div>
    )
}

export default Dialog