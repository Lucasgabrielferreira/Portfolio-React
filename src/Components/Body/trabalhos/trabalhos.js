import React from 'react'
import './trabalhos.css';

function Trabalhos() {
  return (
    <div className="trabalhos-container">
      <h2>Meus Trabalhos</h2>

      <div className="trabalho">
        <h3>Projeto XYZ</h3>
        <p>Descrição do projeto ou trabalho realizado. Inclua detalhes sobre seu papel, tecnologias usadas, etc.</p>
        <a href="#projeto-xyz" target="_blank" rel="noopener noreferrer">Veja mais</a>
      </div>

      <div className="trabalho">
        <h3>Website ABC</h3>
        <p>Descrição do projeto ou trabalho realizado. Inclua detalhes sobre seu papel, tecnologias usadas, etc.</p>
        <a href="#website-abc" target="_blank" rel="noopener noreferrer">Veja mais</a>
      </div>

      {/* Adicione mais trabalhos conforme necessário */}
    </div>
  );
}

export default Trabalhos;