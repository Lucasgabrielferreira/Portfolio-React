import React from 'react'
import './trabalhos.css';

function Trabalhos() {
  return (
    <div className="trabalhos-container">
      <h2>Meus Trabalhos</h2>

      <div className="trabalho">
        <h3>Projeto EbookStore</h3>
        <p>Este projeto é uma aplicação ASP.NET Core MVC para gerenciar uma loja de ebooks. Ele foi desenvolvido com o intuito de aprender e aplicar boas práticas de desenvolvimento, incluindo o uso de FluentValidation para validação de modelos.</p>
        <a href="https://github.com/Lucasgabrielferreira/EbookStore" target="_blank" rel="noopener noreferrer">Veja mais</a>
      </div>

      <div className="trabalho">
      <h3>Hanburqueria Programação Web TCC</h3>
      <p>Este projeto foi desenvolvido para demonstrar as habilidades adquiridas durante o curso de Programação Web. A aplicação foca em boas práticas de desenvolvimento, design responsivo e interação com o usuário.</p>
        <a href="https://lucasgabrielferreira.github.io/ProgramacaoWebTCC/" target="_blank" rel="noopener noreferrer">Veja mais</a>
      </div>

      {/* Adicione mais trabalhos conforme necessário */}
    </div>
  );
}

export default Trabalhos;