import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'


import projectsImg from '../../assets/projects.png'
import logoImg from '../../assets/logo.svg'

import './style.css'

export default function Logon(){
  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Projects" className="logo"class="w3-grayscale" />

        <form>
          <h1>Faça seu login</h1>

          <input className="email" placeholder="E-mail"/>
          <input placeholder="Senha"/>

          <button className = 'button' type="submit">Entrar</button>
          
          <Link className = "back-link" to = "/register">
            <FiLogIn size = {16} color= " #669CFF" />
            Não tenho cadastro
          </Link>
        </form>
      
      </section>

      <img src={projectsImg} alt="Projects"/>
    </div>
  )   
}
