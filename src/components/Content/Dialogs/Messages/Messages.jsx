import React from 'react';
import { Redirect } from 'react-router-dom';
import classes from './Messages.module.css';

const Message = (props) => {
  return (
    <div>
      <div>{props.message}</div>
    </div>
  );
};

const Messages = (props) => {
  let newMessageElement = React.createRef();

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text);
  };

  let sendMessage = () => {
    props.sendMessage();
  };

  let messageElements = props.dialogPage.messageData.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));


  if (!props.isAuth) return <Redirect to={'/login'} />
  return (
    <div className={classes.messages}>
      {messageElements}
      <textarea
        onChange={onMessageChange}
        value={props.dialogPage.newMessageText}
        ref={newMessageElement}
        placeholder="Введите сообщение"></textarea>
      <button onClick={sendMessage}>Отправить</button>
    </div>
  );
};

export default Messages;
