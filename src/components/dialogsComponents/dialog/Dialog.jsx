import DialogMessage from '../dialog-message/DialogMessage'

import s from './Dialog.module.css'
import FormSendMessage from '../form-send-message/FormSendMessage'

const Dialog = ({dialogMessagesData}) => {
    const messages = dialogMessagesData.map(({id, talkerName, message, img}) => <DialogMessage key={id} talkerName={talkerName} img={img} message={message}/>)
    return (
        <div className={s.dialog}>
            {messages}
            <FormSendMessage/>
        </div>
    )
}

export default Dialog