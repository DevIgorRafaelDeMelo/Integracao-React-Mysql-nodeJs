import react from "react"
import Axios from "axios";
import './Cardpalavras.css'
import { IoTrashOutline } from "react-icons/io5";

export default function Card(props) {

  const handleSubmitButtonDel = () => {
    Axios.post("http://localhost:3001/delet", {
      id: props.id,
    }).then((resposta) => {
      console.log(resposta);
    });

  }

  return <>

    <div className="Tabela--palavras">
      <div className="Tabela--eng">{props.name}</div>
      <div className="Tabela--pt">{props.cost}</div>
      <IoTrashOutline
        className="Btn--delet"
        id={props.id}
        onClick={handleSubmitButtonDel}
      />
    </div>
  </>
}