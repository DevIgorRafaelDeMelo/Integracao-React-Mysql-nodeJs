import './Card.css';
import { Link } from "react-router-dom";

export default function Home() {

    return <>
        <Link to="/" >Home</Link>
        <Link to="/jogo" >jogo</Link>
        <Link to="/cadastro" >Cadastrar</Link>
        <Link to="/Table"  >Table</Link>

    </>
}