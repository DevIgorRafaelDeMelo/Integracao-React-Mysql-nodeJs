import React, { useState, useEffect } from 'react';
import Table from './componets/Table';
import Cadastro from './componets/Cadastro';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './componets/Home';
import Jogo from './componets/Jogo';

function App() {


  return (
    <div className="App">


        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cadastro' element={<Cadastro/>} />
            <Route path='/table' element={<Table/>} />
            <Route path='/jogo' element={<Jogo/>} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
