import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header/header'



// switch 가 Routes ?
class App extends Component{
  render(){
    return (
      <div className="App">
        <Router>
          <Header />
          {/* 아래 부분이 없으면 실행이 안된다!! */}
          <Routes>
            <Route path="/" />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
