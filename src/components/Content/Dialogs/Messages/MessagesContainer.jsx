import React from 'react';
import classes from './Messages.module.css';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../../../redux/dialogReducer';
import Messages from './Messages';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
    isAuth: state.auth.isAuth
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
