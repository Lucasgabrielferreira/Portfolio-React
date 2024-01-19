import React from "react";
import './contatos.css';

function Contatos() {
  return (
    <div className="contatos-container">
      <h2>Entre em Contato</h2>
      <p>
        Estou disponível para oportunidades e colaborações. Fique à vontade para
        entrar em contato comigo!
      </p>

      <div className="informacoes-contato">
        <h3>Informações de Contato</h3>
        <p>Email: seuemail@example.com</p>
        <p>Telefone: (XX) XXXX-XXXX</p>
        {/* Adicione mais informações de contato, se necessário */}
      </div>

      <div className="redes-sociais">
        <h3>Redes Sociais</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          {/* Adicione mais redes sociais, se desejar */}
        </ul>
      </div>

      {/* Adicione um formulário de contato, se necessário */}
    </div>
  );
}

export default Contatos;
