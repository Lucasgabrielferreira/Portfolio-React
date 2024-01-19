import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">

        <div className="mobile-option">
          <a href="#project">
            <i class="fi-rr-edit-alt option-icon"></i> Projetos
          </a>
        </div>

        <div className="mobile-option">
          <a href="#skills">
            <i class="fi-rr-laptop option-icon"></i> Experiencias
          </a>
        </div>

        <div className="mobile-option">
          <a href="#work">
            <i class="fi-rr-briefcase option-icon"></i> Trabalhos
          </a>
        </div>

        <div className="mobile-option">
          <a href="#contact">
            <i class="fi-rr-user option-icon"></i> Contatos
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
