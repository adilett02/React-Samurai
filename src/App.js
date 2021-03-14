import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const App = () => {
    return (
        <BrowserRouter >
            <div className="app-wrapper">
                <Header />
                <Nav />
                <Content />
            </div>
        </BrowserRouter>


    );
}






export default App;
