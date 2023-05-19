import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [values , setValues] = useState();
  const handleChangeValues = (value) =>{
    setValues((prevValue) =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () =>{
    console.log(values)
  }

  return (
    <div className="App">
      <div className='card-input'>
        <div className='text-1'>Ingles</div>
        <input type='text'
          name="name-eng"
          className='name-eng'
          onChange={handleChangeValues}
        />
        <br/>
        <div className='text-1'>tradução</div>
        <input type='text'
          name="name-pt"
          className='name-pt'
          onChange={handleChangeValues}
        />
        <br/>
      <button className='btn-send' onClick={handleClickButton}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
