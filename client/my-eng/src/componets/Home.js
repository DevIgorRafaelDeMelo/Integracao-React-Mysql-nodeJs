import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import eng from '../img/eng.jpg'
import Axios from "axios";

export default function Home() {

    return <section className='Banner--menu'>
        <Link to="/" ><img className='img--logo' src={eng}></img></Link>
        <div className='Menu--link'>
            <Link className='Btn--link' to="/jogo" >Aprender</Link>
            <Link className='Btn--link' to="/cadastro" >Cadastrar</Link>
            <Link className='Btn--link' to="/Table"  >Palavras</Link>
        </div>

    </section>
}