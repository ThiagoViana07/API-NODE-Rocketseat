import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo.svg'


export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Projects" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro e começe a organizar melhor os seus projetos e suas tarefas</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color=" #669CFF  " />
            Voltar para tela inicial
        </Link>
        </section>

        <form >
          <input placeholder="Nome completo"
          // value={name}
          // onChange={e => setName(e.target.value)}
          />

          <input type="email" placeholder="E-mail"
          //  value={email}
          //  onChange={e => setEmail(e.target.value)}
          />

          <input placeholder="Senha"
          //  value={whatsapp}
          //  onChange={e => setWhatsapp(e.target.value)}       
          />

          <button className="button" type="submit">Cadastrar</button>

      /</form>
      </div>
    </div>
  )
}