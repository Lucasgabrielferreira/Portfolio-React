import React from "react";
import "./sobre.css";
import Contato from "../../comp/social-contato/contato";
import videoSrc from "../../../assets/202409200955.mp4"; // Caminho correto do arquivo

function Sobre() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h1 className="title">Olá, Sou</h1>
          <span className="info-name">Lucas Gabriel Ferreira.</span>
          <p className="subtitle">
          Desenvolvedor.
          </p>
          <p>Transformo ideias em código e desafios em soluções inovadoras.</p>
          <p>Exploro diferentes linguagens para transformar ideias em realidade.</p>
        </div>

        <div className="video-container">
          <video
            className="video-background"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ width: "100%", height: "auto" }}
          >
             <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>

      <Contato />
    </div>
  );
}

export default Sobre;
