import s from './FormAddPost.module.css'

const FormAddPost = ({newPostText, addPost, updateNewPostText}) => {
    const onAddPost = (e) => {
        e.preventDefault()

        //! console.log(e.target.parentNode.querySelector('input').value)
        //! e.target.parentNode.querySelector('input').value = ''

        // dispatch(addPostCreator())
        addPost()

    }
    const onPostChange = (e) => {
        const text = e.target.value

        // const action = updateNewPostTextCreator(text)
        // dispatch(action)
        updateNewPostText(text)
    }


    return (<form className={s.form}>
        <textarea
            onChange={onPostChange}
            className={s.input}
            cols="25" rows="2"
            value={newPostText}
            placeholder={'Enter a new post'}></textarea>
        <button onClick={onAddPost} type="submit" className={s.btn}>Send</button>
    </form>)
}
export default FormAddPost