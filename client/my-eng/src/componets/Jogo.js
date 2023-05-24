import react, { useEffect } from "react"
import Axios from "axios";
import { useState } from "react";
import Home from "./Home";
import './jogo.css';

export default function Jogo() {

    const [valores, setValores] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:3001/getCard").then((response) => {
            setValores(response.data);
        });
    }, [count])

    var arr = [0, 1, 2, 3, 4]
    var palavras = [];
    var num;
    var contador
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
                    var acerto = '<div>Correta !!!</div>'
                    res.innerHTML = acerto
                    setTimeout(function () {
                        {   
                            var res = document.getElementById("Res")
                    var acerto = ''
                    res.innerHTML= acerto
                            setCount(count + 1);
                        }
                    }, 1500);

                } else {
                    var div = document.createElement("div");
                    var res = document.getElementById("Res")
                    var acerto = '<div>Errada !!!</div>'
                    res.innerHTML = acerto
                    setTimeout(function () {
                        {
                            var res = document.getElementById("Res")
                            var acerto = ''
                            res.innerHTML = acerto
                            setCount(count + 1);
                        }
                    }, 1500);
                }
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
            <div >
                <div className="Palavras--Chave">{typeof valores !== "undefined" && valores.map((value) => {
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
                <div className="Palavras--Chave">{typeof valores !== "undefined" && valores.map((value) => {
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
                <div className="Palavras--Chave">{typeof valores !== "undefined" && valores.map((value) => {
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
                <div className="Palavras--Chave">{typeof valores !== "undefined" && valores.map((value) => {
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
                <div className="Palavras--Chave">{typeof valores !== "undefined" && valores.map((value) => {
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
                        <div className="palavra--chave"
                            key={value.idpalavras}
                            id={value.idpalavras}
                            name={value.namept}
                            eng={value.nameeng}
                        >{value.namept}</div>
                        <Options>
                        </Options>
                    </>
                }
            })}
            <div id="Res" ></div>
        </>
    })


    return <>
        <Home />
        <br />
        <Cardd />

    </>
}