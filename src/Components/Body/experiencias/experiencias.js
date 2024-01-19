import React from 'react';
import "./experiencias.css";

function Experiencias() {
  return (
    <div className="experiencias-container">
      <h2>Experiências Profissionais</h2>
      <div className="experiencia">
        <h3>Analista de Suporte Computacional</h3>
        <p>RRSoft, São Paulo, Sp | Dezembro de 2022 - Atualmente.</p>
        <ul>
          <li>Desenvolvimento e manutenção de interfaces de usuário responsivas.</li>
          <li>Colaboração com equipes multidisciplinares para alcançar objetivos comuns.</li>
          {/* Adicione mais pontos relevantes da experiência profissional */}
        </ul>
      </div>

      <h2>Projetos Relevantes</h2>
      <div className="projeto">
        <h3>Portfolio Website</h3>
        <p>Desenvolvimento de um website de portfólio pessoal utilizando React.</p>
        <ul>
          <li>Implementação de design responsivo para uma experiência consistente em dispositivos variados.</li>
          <li>Integração de animações e transições para melhorar a usabilidade.</li>
          {/* Adicione mais detalhes sobre projetos relevantes */}
        </ul>
      </div>

      <h2>Habilidades</h2>
      <ul className="habilidades-lista">
        <li>C#</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML5, CSS3</li>
        <li>Git</li>
        {/* Adicione mais habilidades conforme necessário */}
      </ul>
    </div>
  );
}

export default Experiencias;