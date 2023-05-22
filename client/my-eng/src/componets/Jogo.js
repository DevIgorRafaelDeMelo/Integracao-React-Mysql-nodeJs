import react, { useEffect } from "react"
import './Card.css';
import Axios from "axios";
import { useState } from "react";
import Home from "./Home";
import Card from "./Cardpalavra";

export default function Jogo() {

    const [valores, setValores] = useState();
    const [count, setCount] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/getCard").then((response) => {
            setValores(response.data);
        });
    }, [count])

    var palavras = [];
    var num;

    const Cardd = (() => {



        return <>
            {typeof valores !== "undefined" && valores.map((value) => {
                palavras.push(value.idpalavras)
                const segredo = Math.round(Math.random() * palavras.length);
                
                num = Math.round((segredo/2))
                
                
                console.log(palavras)
            })}
            {typeof valores !== "undefined" && valores.map((value) => {

                if (value.idpalavras == palavras[num]) {
                    return <>
                        <Card
                            key={value.idpalavras}
                            id={value.idpalavras}
                            name={value.nameeng}
                            cost={value.namept}
                        ></Card>
                    </>
                }


            })}


        </>

    })


    return <>
        <Home />
        <br />
        <Cardd />

    </>
}