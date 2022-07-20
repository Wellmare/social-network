import s from './Post.module.css'

const Post = ({message, likesCount = 0}) => {
    return (<div className={s.post}>
        <img className={s.avatar}
            // src="https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg" alt="avatar"/>
            // src="https://steamuserimages-a.akamaihd.net/ugc/1859420751888450236/623A4F32F2A77635296B9F6C406E9EC20464AC81/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" alt="avatar"/>
             src="https://i.ytimg.com/vi/qwKDAKYJZjM/maxresdefault.jpg?7857057827" alt="avatar"/>
        <div className={s.likes}>
            <i className={`fa-solid fa-heart ${s.heart}`}></i>
            <span>{likesCount}</span>
        </div>
        <span className={s.text}>{message}</span>
    </div>)
}
export default Post