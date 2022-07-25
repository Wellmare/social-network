import s from './Dialogs.module.css'
import Dialog from '../dialog/Dialog'


// const Dialogs = ({dialogsPage: {dialogsListData, dialogMessagesData, newMessageText}, dispatch}) => {
const Dialogs = ({messages, sendMessage, changeMessage, newMessageText, dialogsList}) => {
    return (<div className={s.dialogs}>
        <ol className={s.list_dialogs}>
            {dialogsList}
        </ol>

        <Dialog messages={messages} sendMessage={sendMessage} changeMessage={changeMessage} newMessageText={newMessageText}/>
    </div>)
}

export default Dialogs