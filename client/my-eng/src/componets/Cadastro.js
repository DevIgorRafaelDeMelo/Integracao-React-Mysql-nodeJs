import react from "react"
import './Cadastrar.css';
import Axios from "axios";
import { useState } from "react";
import Home from "./Home";

export default function Cadastro() {
    const [values, setValues] = useState("");


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
        alert("Cadastrado")
        
    };


    return <>
        <Home/>
        <div className='card-input'>
            <div className='text-1'>Inglês</div>
            <input type='text'
                name="name"
                className='name'
                onChange={handleChangeValues}
            />
            <br />
            <div className='text-1'>Portugues</div>
            <input type='text'
                name="cost"
                className='name'
                onChange={handleChangeValues}
            />
            <br />
            <button className='btn-send' onClick={handleClickButton}>Cadastrar</button>
        </div>
    </>
}