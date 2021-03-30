import React from 'react';
import classes from './Messages.module.css';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../../../redux/dialogReducer';
import Messages from './Messages';
import { connect } from 'react-redux';

// const MessagesContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {

//         let onMessageChange = (text) => {
//           store.dispatch(updateNewMessageTextActionCreator(text));
//         };

//         let sendMessage = () => {
//           store.dispatch(sendMessageActionCreator());
//         };

//         return (
//           <Messages
//             onMessageChange={onMessageChange}
//             sendMessage={sendMessage}
//             dialogPage={store.getState().dialogPage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };


let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);




export default MessagesContainer;
