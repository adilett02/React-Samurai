import React from 'react';
import classes from './Messages.module.css';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../../../redux/dialogReducer';
import Messages from './Messages';
import StoreContext from '../../../../StoreContext';

const MessagesContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let newMessageElement = React.createRef();

        let onMessageChange = () => {
          let text = newMessageElement.current.value;
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        let sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        return (
          <Messages
            onMessageChange={onMessageChange}
            sendMessage={sendMessage}
            newMessageElement={newMessageElement}
            state={store.getState()}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
