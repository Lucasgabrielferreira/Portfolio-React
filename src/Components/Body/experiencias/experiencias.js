import React from 'react';
import "./experiencias.css";

function Experiencias() {
  return (
    <div className="experiencias-container">
      <h2>Experiências Profissionais</h2>
      <div className="experiencia">
        <h3>Analista de Suporte Computacional</h3>
        <p>RRSoft, São Paulo, Sp | Dezembro de 2022 - Maio de 2024.</p>
        <ul>
          <li>Atendimento e Suporte Técnico aos Usuários: Proporcionava suporte técnico aos usuários dos softwares instalados pela empresa, solucionando problemas relatados de forma eficaz para assegurar o bom desempenho dos programas.
          </li>
          <li>Testagem de Programas: Realizava testes rigorosos em programas após o desenvolvimento e instalação, avaliando a qualidade e funcionamento para minimizar riscos de falhas e assegurar uma experiência de usuário estável.</li>
          <li>Instalação, Configuração e Manutenção de Software e Hardware: Executava a instalação, configuração e manutenção de software e hardware, realizando testes funcionais e monitorando o desempenho dos equipamentos e sistemas para garantir a operacionalidade contínua e eficiente.
          </li>
          <li>Desenvolvimento em C# e .NET: Participava do desenvolvimento e manutenção de aplicações utilizando C# e .NET, contribuindo para a melhoria contínua dos sistemas internos. Consultas em MySQL: Realizava consultas e manipulações de dados em bancos de dados MySQL, suportando a extração e análise de informações essenciais para a tomada de decisões e resolução de problemas.</li>
          {/* Adicione mais pontos relevantes da experiência profissional */}
        </ul>
      </div>

      <div className="experiencia">
        <h3>Auxiliar de estoque</h3>
        <p>Vimap, São Paulo, Sp | Novembro de 2017 - Abril de 2022 .</p>
        <ul>
          <li>Gestão de Almoxarifado: Responsável por auxiliar no armazenamento e organização dos produtos no estoque, garantindo a correta disposição e acessibilidade dos itens.</li>
          <li>Recebimento e Armazenagem de Mercadorias: Coordenava o recebimento das mercadorias, realizando a armazenagem de maneira eficiente para manter a integridade dos produtos e facilitar o controle do estoque.</li>
          <li>Atendimento ao Cliente: Possuía experiência no atendimento a clientes internos e externos, fornecendo suporte eficaz e resolvendo dúvidas e problemas com agilidade.</li>
          {/* Adicione mais pontos relevantes da experiência profissional */}
        </ul>
      </div>

      <h2>Projetos Relevantes</h2>
      <div className="projeto">
        <h3>Portfolio Website</h3>
        <p>Desenvolvimento de um website de portfólio pessoal utilizando React.</p>
        <ul>
          <li>Implementação de design responsivo para uma experiência consistente em dispositivos variados.</li>
          <li>Integração de animações e transições para melhorar a usabilidade.</li>
          {/* Adicione mais detalhes sobre projetos relevantes */}
        </ul>
      </div>

      <h2>Habilidades</h2>
      <ul className="habilidades-lista">
        <li>C#</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML5, CSS3</li>
        <li>Git</li>
        {/* Adicione mais habilidades conforme necessário */}
      </ul>
    </div>
  );
}

export default Experiencias;