import react from "react"
import './Card.css';
import Axios from "axios";
import { useState } from "react";
import Home from "./Home";

export default function Cadastro() {
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

    return <>
        <Home/>
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
}