import React from "react";
import "./sobre.css";
import Contato from "../../comp/social-contato/contato";

function Sobre() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h1 className="title">Olá, Sou</h1>
          <span className="info-name">Lucas Gabriel Ferreira.</span>
          <p className="subtitle">
            Sabedoria é saber o que fazer; habilidade é saber como fazer; virtude é fazer.
          </p>
          <p>Desenvolvedor Junior</p>
          <p>Em várias linguagens de programação.</p>
        </div>

        <div className="video-container">
          <video
            className="video-background"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "auto" }}
          >
            <source
              type="video/mp4"
              src={require("../../../assets/202409200955.mp4")}
            />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>

      <Contato />
    </div>
  );
}

export default Sobre;
