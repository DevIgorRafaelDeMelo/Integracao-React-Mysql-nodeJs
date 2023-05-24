import react, { useEffect } from "react"
import Axios from "axios";

export default function Card(props) {

  
  return <>

    <div className="Card--Palavra">
      <div className="Palavra--Chav" onClick={handleComfirm}>{props.name}</div>
    </div>
  </>
}