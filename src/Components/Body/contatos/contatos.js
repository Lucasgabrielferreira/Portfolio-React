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

      <section class="contact-form">
  <h3 class="h3 form-title">Formulário de contato</h3>

  <form action="https://formspree.io/f/xjkbzdny" method="POST" class="form" data-form>

    <div class="input-group">
      <input type="text" name="fullname" class="form-input" placeholder="Nome Completo" required data-form-input />
      <input type="email" name="email" class="form-input" placeholder="Endereço de email" required data-form-input />
    </div>

    <textarea name="message" class="form-input" placeholder="Sua Mensagem" required data-form-input></textarea>

    <button class="form-btn" type="submit">
      <ion-icon name="paper-plane"></ion-icon>
      <span>Enviar Mensagem</span>
    </button>

  </form>
</section>


      <div className="informacoes-contato">
        <h3>Informações de Contato</h3>
        <p>Email: lg139826065@gmail.com</p>
        <p>Telefone: (11) 94914-5048</p>
        {/* Adicione mais informações de contato, se necessário */}
      </div>

      <div className="redes-sociais">
        <h3>Redes Sociais</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/lucas-gabriel-ferreira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Lucasgabrielferreira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          {/* Adicione mais redes sociais, se desejar */}
        </ul>
      </div>

      <section className="mapbox" data-mapbox>
  <figure>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468145.64808997244!2d-46.843295747149305!3d-23.554508954303742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1725890732694!5m2!1spt-BR!2sbr"
      width="600"
      height="450"
      style={{ border: 0 }} // Aqui o style está sendo passado como um objeto
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa de São Paulo, SP"
    ></iframe>
  </figure>
</section>

      {/* Adicione um formulário de contato, se necessário */}
    </div>
  );
}

export default Contatos;
