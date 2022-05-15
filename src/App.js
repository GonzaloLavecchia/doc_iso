import React from 'react';
import logo from './logo.png';
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Login from './login';
import Menu from './menu';

function App(){
  return (
    <div className="App">
      <div className="App-header">
        <Router>
            <Routes>
                  <Route path="/"element={<Login/>}/>
                  <Route path="/menu"element={<Menu/>}/>
            </Routes>
      </Router>
    </div>
      </div>
  );
}

export default App;
