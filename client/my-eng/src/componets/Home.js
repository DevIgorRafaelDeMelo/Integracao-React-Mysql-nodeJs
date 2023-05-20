import react from "react"
import './Card.css';
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {

    return <>
        <Link to="/" >Home</Link>
        <Link to="/cadastro" >Cadastrar</Link>
        <Link to="/Table"  >Table</Link>

    </>
}