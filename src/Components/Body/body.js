import React from 'react'
import "./body.css"
import Sobre from './sobre/sobre';
import Projetos from './projetos/projetos';
import Experiencias from './experiencias/experiencias';
import Trabalhos from './trabalhos/trabalhos';
import Contatos from './contatos/contatos';

function Body() {
  return <div className="body">
    <section id="about">
        <Sobre />
    </section>

    <section id="project">
        <Projetos />
    </section>

    <section id="skills">
        <Experiencias />
    </section>

    <section id="work">
        <Trabalhos />
    </section>

    <section id="contact">
        <Contatos />
    </section>

  </div>;
}

export default Body