import React from "react";
import "./sobre.css";
import Contato from "../../comp/social-contato/contato";

function Sobre() {
  return (
    <div className="about">
      {/* Seção Principal */}
      <div className="about-top">
        {/* Informações do Usuário */}
        <div className="about-info">
          <h1 className="title">Olá, Sou</h1>
          <span className="info-name">Lucas Gabriel Ferreira.</span>
          <p className="subtitle">
          Sabedoria é saber o que fazer; habilidade é saber como fazer; virtude é fazer. 
          </p>
          <p>Desenvolvedor Junior</p>
          <p>Em várias linguagens de programação.</p>
        </div>

        {/* Contêiner do Globo Animado */}
        <div className="globe-container">
          <video
            className="video-background"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => {
              e.target.style.display = "none"; // Esconde o vídeo se houver erro
              const imgFallback = document.getElementById("fallback-image");
              imgFallback.style.display = "block"; // Mostra a imagem fallback
            }}
          >
            {/* Corrigido o 'src' para letras minúsculas */}
            <source
              type="video/mp4"
              src={require("../../../assets/202409200955.mp4")}
            />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <img
            id="fallback-image"
            src="https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg"
            alt="Fallback globe"
            className="fallback-image"
            style={{ display: "none" }} // Inicialmente escondido, será exibido se o vídeo falhar
          />
        </div>
      </div>

      {/* Seção de Contato */}
      <Contato />
    </div>
  );
}

export default Sobre;
