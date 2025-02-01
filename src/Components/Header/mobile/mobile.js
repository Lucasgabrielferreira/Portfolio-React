import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className={`mobile ${isOpen ? "mobile-open" : "mobile-close"}`}>
      <div 
        className="close-icon" 
        role="button" 
        aria-label="Fechar menu"
        onClick={() => setIsOpen(false)}
      >
        <i className="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        {[
          { href: "#project", icon: "fi-rr-edit-alt", text: "Projetos" },
          { href: "#skills", icon: "fi-rr-laptop", text: "Experiências" },
          { href: "#work", icon: "fi-rr-briefcase", text: "Trabalhos" },
          { href: "#contact", icon: "fi-rr-user", text: "Contatos" },
        ].map((item, index) => (
          <div className="mobile-option" key={index}>
            <a href={item.href} onClick={() => setIsOpen(false)}>
              <i className={`${item.icon} option-icon`}></i> {item.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mobile;
