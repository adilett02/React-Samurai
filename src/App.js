import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import HeaderConatiner from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderConatiner />
        <Nav />
        <Content store={props.store} />
      </div>
    </BrowserRouter>
  );
};

export default App;
