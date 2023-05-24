import { useEffect, useState } from 'react';
import Axios from "axios";
import Card from './cardPalavras';
import Home from './Home';


export default function Table() {
    const [palavras, setPalavras] = useState();
    const handleClickAtualiza = (() => {
        Axios.get("http://localhost:3001/getCards").then((response) => {
            setPalavras(response.data);
        });

    });

    useEffect(()=>{
        handleClickAtualiza()
    })
    
    return <>
        <Home/>
        <br/>
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
    </>
}