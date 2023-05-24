import react, { useEffect } from "react"
import Axios from "axios";
import { useState } from "react";
import Home from "./Home";

export default function Jogo() {

    const [valores, setValores] = useState();
    const [count, setCount] = useState();
    
    useEffect(() => {
        Axios.get("http://localhost:3001/getCard").then((response) => {
            setValores(response.data);
        });
    }, [count])

    var arr = [0, 1, 2, 3, 4]
    var palavras = [];
    var num;

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }


    const Card = (props) => {

        const handleComfirm = () => {
            {
                console.log(palavras[num])
                console.log(props)
                if (palavras[num] == props.id) {
                    
                    var div = document.createElement("div");
                    var res = document.getElementById("Res")
                    var acerto = '<div>Acerto</div>'
                    res.innerHTML= acerto
                    setTimeout(function() {
                        {
                            setCount(count+1);
                        }
                      }, 1000);

                }else(alert("Erro"))
            }
        }

        return <>

            <div className="Card--Palavra">
                <div className="Palavra--Chav" onClick={handleComfirm}>{props.name}</div>
            </div>
        </>
    }

    const Options = (props) => {
        shuffle(arr)



        return <>
            <div className="Card--Palavras">
                <div className="Palavra--Chave">{typeof valores !== "undefined" && valores.map((value) => {
                    if (value.idpalavras == palavras[num + arr[0]]) {
                        return <>
                            <Card
                                key={value.idpalavras}
                                id={value.idpalavras}
                                name={value.nameeng}

                            ></Card>
                        </>
                    }
                })}</div>
                <div className="Palavra--Chave">{typeof valores !== "undefined" && valores.map((value) => {
                    if (value.idpalavras == palavras[num + arr[1]]) {
                        return <>
                            <Card
                                key={value.idpalavras}
                                id={value.idpalavras}
                                name={value.nameeng}
                            ></Card>
                        </>
                    }
                })}</div>
                <div className="Palavra--Chave">{typeof valores !== "undefined" && valores.map((value) => {
                    if (value.idpalavras == palavras[num + arr[2]]) {
                        return <>
                            <Card
                                key={value.idpalavras}
                                id={value.idpalavras}
                                name={value.nameeng}
                            ></Card>
                        </>
                    }
                })}</div>
                <div className="Palavra--Chave">{typeof valores !== "undefined" && valores.map((value) => {
                    if (value.idpalavras == palavras[num + arr[3]]) {
                        return <>
                            <Card
                                key={value.idpalavras}
                                id={value.idpalavras}
                                name={value.nameeng}
                            ></Card>
                        </>
                    }
                })}</div>
                <div className="Palavra--Chave">{typeof valores !== "undefined" && valores.map((value) => {
                    if (value.idpalavras == palavras[num + arr[4]]) {
                        return <>
                            <Card
                                key={value.idpalavras}
                                id={value.idpalavras}
                                name={value.nameeng}
                            ></Card>
                        </>
                    }
                })}</div>
            </div>
        </>
    }

    const Cardd = (() => {
        return <>
            {typeof valores !== "undefined" && valores.map((value) => {
                palavras.push(value.idpalavras)
                const segredo = Math.round(Math.random() * palavras.length);

                num = Math.round((segredo / 2))


            })}
            {typeof valores !== "undefined" && valores.map((value) => {

                if (value.idpalavras == palavras[num]) {
                    return <>
                        <Card
                            key={value.idpalavras}
                            id={value.idpalavras}
                            name={value.namept}
                            eng={value.nameeng}
                        ></Card>
                        <Options>
                        </Options>
                    </>
                }
            })}
            <div id="Res" >Qual está correta ?</div>
        </>
    })


    return <>
        <Home />
        <br />
        <Cardd />

    </>
}