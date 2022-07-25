import s from './FormSendMessage.module.css'
import s2 from '../../profileComponents/postsComponents/form-add-post/FormAddPost.module.css'

const FormSendMessage = ({sendMessage, changeMessage, newMessageText}) => {
    const onSendMessage = (e) => {
        e.preventDefault()
        sendMessage()
    }
    const onMessageChange = (e) => {
        const text = e.target.value
        changeMessage(text)
    }

    return (<form className={s.form}>
        <textarea className={`${s2.input}
                  ${s.textarea}`}
                  cols="35" rows="1"
                  placeholder={'Enter message'}
                  onChange={onMessageChange}
                  value={newMessageText}></textarea>
        <button onClick={onSendMessage} type={'button'} className={s2.btn}>Send</button>
    </form>)
}

export default FormSendMessage