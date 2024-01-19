import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h3>Redes Sociais</h3>
          <ul className="social-list">
            <li><a href="https://www.linkedin.com/in/lucas-gabriel-ferreira/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/Lucasgabrielferreira/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            {/* Adicione mais redes sociais, se desejar */}
          </ul>
        </div>
        <div>
          <h3>Contato</h3>
          <p>Email: lg139826065@gmail.com</p>
          {/* Adicione mais informações de contato, se desejar */}
        </div>
      </div>
      <div className="copy-right">© 2024 Lucas Gabriel Ferreira. Todos os direitos reservados.</div>
    </footer>
  );
}

export default Footer;