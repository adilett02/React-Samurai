import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: "Ivan" },
  { id: 2, name: "Petya" },
  { id: 3, name: "Ksyusha" },
]

let messageData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Im fine' },
]

let postData = [
  { id: 1, postText: 'первый пост' },
  { id: 2, postText: 'второй пост' },
  { id: 3, postText: 'третий пост' },
  { id: 4, postText: 'четвертый пост' },
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
