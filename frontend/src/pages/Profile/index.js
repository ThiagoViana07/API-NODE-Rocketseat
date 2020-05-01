import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg'
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './style.css'


export default function Profile() {
  return (
    <div className="profile-container">
      <header >
        <img src={logoImg} alt="Projects"/>
        <span>Bem vindo, Thiago</span>
        
        <Link className="button" to="projects/new">Inserir novo projeto</Link>
        <button type="button">
          <FiPower size={18} color="669CFF"/>
        </button>
      </header>

      <h1>Projetos Cadastrados</h1>

      <ul>
        <li>
          <strong>Projeto:</strong>
          <p>Projeto titulo</p>

          <strong>Tarefas:</strong>
          <p>Descrição das tarefas</p>

          <strong>Concluido:</strong>
          <p>Não</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>

        <li>
          <strong>Projeto:</strong>
          <p>Projeto titulo</p>

          <strong>Tarefas:</strong>
          <p>Descrição das tarefas</p>

          <strong>Concluido:</strong>
          <p>Não</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>

        <li>
          <strong>Projeto:</strong>
          <p>Projeto titulo</p>

          <strong>Tarefas:</strong>
          <p>Descrição das tarefas</p>

          <strong>Concluido:</strong>
          <p>Não</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>

        <li>
          <strong>Projeto:</strong>
          <p>Projeto titulo</p>

          <strong>Tarefas:</strong>
          <p>Descrição das tarefas</p>

          <strong>Concluido:</strong>
          <p>Não</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>
      </ul>

    </div>      
  )

}