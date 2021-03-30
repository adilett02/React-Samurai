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

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        let sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        return (
          <Messages
            onMessageChange={onMessageChange}
            sendMessage={sendMessage}
            dialogPage={store.getState().dialogPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
