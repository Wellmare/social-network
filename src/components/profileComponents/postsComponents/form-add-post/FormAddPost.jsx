import s from './FormAddPost.module.css'
import {createRef} from 'react'

const FormAddPost = ({addPost}) => {
    const textArea = createRef()

    const onAddPost = (e) => {
        e.preventDefault()
        // console.log(e.target.parentNode.querySelector('input').value)
        // e.target.parentNode.querySelector('input').value = ''
        const text = textArea.current.value

        console.log(addPost, text)
        debugger
        addPost(text)
    }


    return (
        <form className={s.form}>
            {/*<input type="text" className={s.input}/>*/}
            <textarea className={s.input} cols="25" rows="2" ref={textArea}></textarea>
            <button onClick={onAddPost} type="submit" className={s.btn}>Send</button>
        </form>
    )
}
export default FormAddPost