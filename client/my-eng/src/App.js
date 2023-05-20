import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [values, setValues] = useState();
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
    }).then((resposta) => {
      console.log(resposta);
    });
  };

  return (
    <div className="App">
      <div className='card-input'>
        <div className='text-1'>Ingles</div>
        <input type='text'
          name="name"
          className='name-eng'
          onChange={handleChangeValues}
        />
        <br />
        <div className='text-1'>tradução</div>
        <input type='text'
          name="cost"
          className='name-pt'
          onChange={handleChangeValues}
        />
        <br />
        <button className='btn-send' onClick={handleClickButton}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
