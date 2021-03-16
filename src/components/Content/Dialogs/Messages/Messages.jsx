import React from 'react';
import classes from './Messages.module.css';

const Message = (props) => {
    return (
        <div>
            <div>{props.message}</div>
        </div>

    )
}



const Messages = (props) => {
    let newMessageElement = React.createRef();
    
    let addPost = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    let messageElements = props.messageData.map(m => <Message message={m.message} id={m.id} />)
    return (
        <div className={classes.messages}>
            {messageElements}
            <textarea ref={newMessageElement} placeholder="Введите сообщение"></textarea>
            <button onClick={addPost}>
                Отправить
            </button>
        </div>
    )
}

export default Messages;