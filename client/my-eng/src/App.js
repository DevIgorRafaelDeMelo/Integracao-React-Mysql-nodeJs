import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Card from "./componets/cardPalavras"

function App() {

  const [values, setValues] = useState();
  const [palavras, setPalavras] = useState();

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

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setPalavras(response.data);
    },[])
  })

  const Register = () =>
    <>
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

    </>
  return (

    <div className="App">
      <Register />
      {typeof palavras !== "undefined" && palavras.map((value) => {
        return <>
          <Card
            key={value.idpalavras}
            palavras={palavras}
            setPalavras={setPalavras}
            id={value.idpalavras}
            name={value.nameeng}
            cost={value.namept}
          ></Card>
        </>;
      })};

    </div>
  );
}

export default App;
