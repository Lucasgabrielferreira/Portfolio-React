import React, { useState } from 'react';
import './contatos.css';

function Contatos() {
  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  // Estado para controlar se a mensagem foi enviada com sucesso
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Para controle de loading

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para enviar o formulário via fetch (evita o redirecionamento)
  const handleSubmit = async (e) => {
    e.preventDefault();  // Impede o envio padrão do formulário

    setIsLoading(true);  // Define o estado de carregamento para true

    try {
      const response = await fetch('https://formspree.io/f/xjkbzdny', {
        method: 'POST',
        body: new FormData(e.target),  // Envia o formulário via FormData
        headers: {
          Accept: 'application/json', // Define o tipo de resposta
        },
      });

      if (response.ok) {
        // Limpa os campos após o envio
        setFormData({
          fullname: '',
          email: '',
          message: '',
        });

        // Marca o formulário como enviado
        setIsSubmitted(true);
      } else {
        alert('Houve um erro ao enviar sua mensagem. Tente novamente.');
      }
    } catch (error) {
      alert('Erro de conexão. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);  // Define o estado de carregamento como false
    }
  };

  return (
    <div className="contatos-container">
      <h2>Entre em Contato</h2>
      <p>
        Estou disponível para oportunidades e colaborações. Fique à vontade para
        entrar em contato comigo!
      </p>

      <section className="contact-form">
        <h3 className="h3 form-title">Formulário de contato</h3>

        {/* Se o formulário foi enviado, mostrar uma mensagem de sucesso */}
        {isSubmitted ? (
          <div className="success-message">
            <p>Mensagem enviada com sucesso! Em breve, entrarei em contato.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form" data-form id="contact-form">
            <div className="input-group">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Nome Completo"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Endereço de email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Sua Mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="form-btn" type="submit" disabled={isLoading}>
              {isLoading ? (
                <span>Enviando...</span>
              ) : (
                <>
                  <ion-icon name="paper-plane"></ion-icon>
                  <span>Enviar Mensagem</span>
                </>
              )}
            </button>
          </form>
        )}
      </section>

      <div className="informacoes-contato">
        <h3>Informações de Contato</h3>
        <p>
    Email:{' '}
    <a
      href="mailto:lg139826065@gmail.com"
      className="email-link"
    >
      lg139826065@gmail.com
    </a>
  </p>
        <p>
    Telefone:{' '}
    <a
      href="https://wa.me/5511949145048"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-link"
    >
      (11) 94914-5048
    </a>
  </p>
      </div>

      <div className="redes-sociais">
  <h3>Redes Sociais</h3>
  <ul>
    <li>
      <a
        href="https://www.linkedin.com/in/lucas-gabriel-ferreira/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <i className="fab fa-linkedin"></i> LinkedIn
      </a>
    </li>
    <li>
      <a
        href="https://github.com/Lucasgabrielferreira/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <i className="fab fa-github"></i> GitHub
      </a>
    </li>
  </ul>
</div>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468145.64808997244!2d-46.843295747149305!3d-23.554508954303742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1725890732694!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de São Paulo, SP"
          ></iframe>
        </figure>
      </section>
    </div>
  );
}

export default Contatos;
