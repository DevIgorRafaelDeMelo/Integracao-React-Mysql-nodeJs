import react, { useEffect } from "react"
import './Card.css';
import Axios from "axios";

export default function Card(props) {

  

  return <>

    <div className="Card--Palavras">
      <div className="Palavra--Chave">{props.name}</div>
      <div className="Palavra--Traducao">{props.cost}</div>
    </div>
  </>
}