import react, { useEffect } from "react"
import './Card.css';
import Axios from "axios";
import { useState } from "react";
import Home from "./Home";
import Card from "./Cardpalavra";

export default function Jogo() {

    const [palavras, setPalavras] = useState();

    useEffect(()=>{
        Cardd()
    })
    
    const Cardd =(()=>{
        Axios.get("http://localhost:3001/getCard").then((response) => {
            setPalavras(response.data);
        });


        return<>Card</>
        
    })


    return <>
        <Home />
        <br/>
       

    </>
}