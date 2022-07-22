import s from './FormSendMessage.module.css'
import s2 from '../../profileComponents/postsComponents/form-add-post/FormAddPost.module.css'
import {createRef} from 'react'

const FormSendMessage = () => {
    const textArea = createRef()

    const onSendMessage = (e) => {
        e.preventDefault()
        console.log(textArea.current.value)
    }

    return (
        <form className={s.form}>
            <textarea ref={textArea}
                      className={`${s2.input}
                      ${s.textarea}`}
                      cols="35" rows="1"
                      placeholder={'Enter message'}
            ></textarea>
            <button onClick={onSendMessage} type={'button'} className={s2.btn}>Send</button>
        </form>
    )
}

export default FormSendMessage