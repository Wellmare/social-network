import s from './DialogMessage.module.css'

const DialogMessage = ({talkerName, message}) => {
    return (<div className={s.message}>
        <div className={s.talker_info}>
            <img
                src="https://i.pinimg.com/236x/1b/30/9f/1b309f045a7edc200489908d942fe307--korean-beauty-asian-beauty.jpg"
                alt="avatar" className={s.avatar}/>
            <span className={s.name}>{talkerName}</span>
        </div>

        <div className={s.message_text}>
            <span>{message}</span>
        </div>
    </div>)
}

export default DialogMessage