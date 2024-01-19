import React from "react";
import "./sobre.css";
import Contato from "../../comp/social-contato/contato";

function Sobre() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Olá, Sou <br />
          <span className="info-name">Lucas Gabriel Ferreira</span>.
          <h6>Menos é mais. ser simples requer tempo e esforço</h6>
          Desenvolvedor Full-Stack <br />
          Em varias liguagens de programação.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/img3.png")}
            className="picture"
            alt="foto de perfil"
          />
        </div>
      </div>
      <Contato/>
    </div>
  );
}

export default Sobre;
