import React from 'react';
import classes from './Messages.module.css';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../../../redux/dialogReducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
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
let AuthRedirectComponent = withAuthRedirect(Messages)


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MessagesContainer;
