import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Table from './componets/Table';
import Cadastro from './componets/Cadastro';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './componets/Home';

function App() {

  

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="App">


        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cadastro' element={<Cadastro/>} />
            <Route path='/table' element={<Table/>} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
