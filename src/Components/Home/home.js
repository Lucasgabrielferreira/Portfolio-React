import React, { useState, useEffect } from 'react';
import "./home.css";
import Body from "../Body/body";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Adiciona um listener para o evento de rolagem
    window.addEventListener('scroll', handleScroll);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para controlar a exibição do botão com base na posição de rolagem
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Função para rolar para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adiciona uma animação suave
    });
  };

  return (
    <div className="home">
      <div>
        <Header />
      </div>

      <div>
        <Body />
      </div>

      <div>
        <Footer />
      </div>

      {/* Botão "Voltar ao Topo" condicionalmente renderizado */}
      {showScrollButton && (
        <button className="scroll-top-button" onClick={scrollToTop}>
          Voltar ao Topo
        </button>
      )}
    </div>
  );
}

export default Home;
