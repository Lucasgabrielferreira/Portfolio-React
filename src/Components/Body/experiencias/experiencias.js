import React from 'react';
import "./experiencias.css";

function Experiencias() {
  return (
    <div className="experiencias-container">
      <h2>Experiências Profissionais</h2>

      <div className="experiencia">
        <h3>Engenheiro de software</h3>
        <p>Evertec Brasil, São Paulo, Sp | Novrembro de 2025 - Atual.</p>
        <ul>
          <li>Especializado na personalização de soluções para o setor de previdência privada, com foco na adequação de sistemas e funcionalidades às necessidades específicas da área, garantindo conformidade com regulamentações vigentes.</li>
          <li>Desenvolvimento e implementação de melhorias em sistemas web, utilizando tecnologias como C# (MVC e Blazor Pages), com ênfase na otimização de performance, manutenção da integridade de dados e aprimoramento da experiência do usuário.</li>
          <li>Uso contínuo de Inteligência Artificial (IA), incluindo GitHub Copilot e SonarQube, para acelerar o processo de desenvolvimento, otimizar a escrita de código e garantir a qualidade do código com validação constante, resultando em entregas mais rápidas e eficazes.</li>
          <li>Atualização anual de textos regulamentares e ajustes nas rotinas de IRRF, com impacto direto nos cálculos tributários, assegurando que os sistemas estejam sempre alinhados com as mudanças fiscais e tributárias de cada ano, garantindo precisão e conformidade com as exigências legais.</li>
          <li>Conhecimentos sólidos em ASP.NET, JavaScript, HTML e CSS.</li>
          <li>Familiaridade com integrações de Web APIs e Web Services.</li> 
          <li>Conhecimento em bancos de dados SQL Server e Oracle, incluindo criação de tabelas e queries.</li>
          {/* Adicione mais pontos relevantes da experiência profissional */}
        </ul>
      </div>

      <div className="experiencia">
        <h3>Desenvolvedor júnior</h3>
        <p>WeDoo Consultoria em Informática, São Paulo, Sp | Outubro de 2024 - Novembro de 2025.</p>
        <ul>
          <li>Levantamento de requisitos com clientes para criação de Especificações Funcionais.</li>
          <li>Análise e desenvolvimento de novas funcionalidades em sistemas web utilizando a plataforma .NET.</li>
          <li>Atendimento a chamados de clientes, realizando correções de bugs, suporte e desenvolvimento de projetos.</li>
          <li>Experiência prática com VB.NET e C#.</li>
          <li>Conhecimentos sólidos em ASP.NET, JavaScript, HTML e CSS.</li>
          <li>Familiaridade com integrações de Web APIs e Web Services.</li> 
          <li>Conhecimento em bancos de dados SQL Server e Oracle, incluindo criação de tabelas e queries.</li>
          {/* Adicione mais pontos relevantes da experiência profissional */}
        </ul>
      </div>

      <div className="experiencia">
        <h3>Analista de Suporte Computacional</h3>
        <p>RRSoft, São Paulo, Sp | Dezembro de 2022 - Maio de 2024.</p>
        <ul>
          <li>Suporte técnico aos usuários de software.</li>
          <li>Testes e validações de sistemas para garantir estabilidade.</li>
          <li>Instalação e manutenção de software e hardware.</li>
          <li>Desenvolvimento em C# e .NET.</li>
          <li>Consultas e manipulação de dados em MySQL.</li>
          {/* Adicione mais pontos relevantes da experiência profissional */}
        </ul>
      </div>

      <div className="experiencia">
        <h3>Auxiliar de estoque</h3>
        <p>Vimap, São Paulo, Sp | Novembro de 2017 - Abril de 2022 .</p>
        <ul>
          <li>Gestão de estoque e controle de mercadorias.</li>
          <li>Atendimento ao cliente e suporte à equipe de vendas.</li>
          <li>Emissão e conferência de notas fiscais.</li>
          <li>Análise de rotas e otimização de entregas.</li>
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
        <li>VB.Net</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML5, CSS3</li>
        <li>Git</li>
        <li>GitHub</li>
        {/* Adicione mais habilidades conforme necessário */}
      </ul>
    </div>
  );
}

export default Experiencias;