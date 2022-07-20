import s from './Dialogs.module.css'
import Dialog from '../dialog/Dialog'
import DialogItem from '../dialog-item/DialogItem'


const Dialogs = ({dialogsPage: {dialogsListData, dialogMessagesData}}) => {
    const dialogs = dialogsListData.map(({id, name}) => <DialogItem key={id} id={id} name={name}/>)

    return (<div className={s.dialogs}>
        <ol className={s.list_dialogs}>
            {dialogs}
        </ol>

        <Dialog dialogMessagesData={dialogMessagesData}/>
    </div>)
}

export default Dialogs