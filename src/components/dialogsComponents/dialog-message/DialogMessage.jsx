import s from './DialogMessage.module.css'

const DialogMessage = ({talkerName, message, img}) => {
    return (<div className={s.message}>
        <div className={s.talker_info}>
            <img
                src={img}
                alt="avatar" className={s.avatar}/>
            <span className={s.name}>{talkerName}</span>
        </div>

        <div className={s.message_text}>
            <span>{message}</span>
        </div>
    </div>)
}

export default DialogMessage