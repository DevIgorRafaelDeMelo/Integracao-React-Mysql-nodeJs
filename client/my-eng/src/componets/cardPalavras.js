import react from "react"
import './Card.css';
import Axios from "axios";

export default function Card(props) {

    const handleSubmitButtonDel = () =>{
            Axios.post("http://localhost:3001/delet", {
              id: props.id,
            }).then((resposta) => {
              console.log(resposta);
            });
         
    }

    return <>
        
        <div className="Card--Palavras">
            <div className="Palavra--Chave">{props.name}</div>
            <div className="Palavra--Traducao">{props.cost}</div>
            <button className="Palavra--del" id={props.id} onClick={handleSubmitButtonDel} >excluir</button>
        </div>
    </>
}