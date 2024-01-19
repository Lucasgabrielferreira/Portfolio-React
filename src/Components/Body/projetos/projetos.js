import React from 'react';
import './projetos.css';

function Projetos() {
  return (
    <div className="projetos-container">
      <h2>Projetos Recentes</h2>
      <div className="projeto">
        <h3>Portfolio Website</h3>
        <p>Desenvolvimento de um website de portfólio pessoal utilizando React.</p>
        <ul>
          <li>Implementação de um design moderno e responsivo.</li>
          <li>Integração de animações e efeitos para aprimorar a experiência do usuário.</li>
          <li>Utilização de tecnologias como React Router para navegação.</li>
          {/* Adicione mais detalhes sobre projetos */}
        </ul>
      </div>

      <div className="projeto">
        <h3>Sistema de Gerenciamento de Tarefas</h3>
        <p>Desenvolvimento de um aplicativo para gerenciamento de tarefas utilizando Node.js e MongoDB.</p>
        <ul>
          <li>Implementação de autenticação de usuário e autorização.</li>
          <li>Integração de um banco de dados MongoDB para armazenar informações das tarefas.</li>
          <li>Desenvolvimento de APIs RESTful para manipulação de dados.</li>
          {/* Adicione mais detalhes sobre projetos */}
        </ul>
      </div>

      {/* Adicione mais projetos conforme necessário */}
    </div>
  );
}


export default Projetos;