import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const App = (props) => {
    // let dialogsData = [
    //     { id: 1, name: "Ivan" },
    //     { id: 2, name: "Petya" },
    //     { id: 3, name: "Ksyusha" },
    // ]
    return (
        <BrowserRouter >
            <div className="app-wrapper">
                <Header />
                <Nav />
                <Content dialogsData={props.dialogsData} messageData={props.messageData} postData={props.postData} />
            </div>
        </BrowserRouter>


    );
}






export default App;
