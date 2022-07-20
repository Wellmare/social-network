import s from './FormAddPost.module.css'
import {createRef} from 'react'

const FormAddPost = ({newPostText, functions: {addPost, updateNewPostText}}) => {
    const textArea = createRef()

    const onAddPost = (e) => {
        e.preventDefault()

        //! console.log(e.target.parentNode.querySelector('input').value)
        //! e.target.parentNode.querySelector('input').value = ''

        addPost()

    }
    const onPostChange = (e) => {
        const text = textArea.current.value
        updateNewPostText(text)
    }


    return (<form className={s.form}>
        <textarea onChange={onPostChange} className={s.input} cols="25" rows="2" ref={textArea}
                  value={newPostText}></textarea>
        <button onClick={onAddPost} type="submit" className={s.btn}>Send</button>
    </form>)
}
export default FormAddPost