import React from 'react';

function Home() {
  return (
    <div className="home-container full_body">
      {/* Cabecera de estado del sistema (Panel 1) */}
      <section className="panel">
        <section className="sys-info text text_h1">
          <p>[SYSTEM STATUS: ONLINE]</p>
          <p>[USER: GUEST@PORTFOLIO]</p>
          <p>-----------------------</p>
        </section>

        {/* Título e introducción (Panel 2) */}
        <section className="intro text text_p">
          <h2>&gt; KOBALT_OS v1.0.0</h2>
          <p className="glitch-text">
            Bienvenido al entorno de desarrollo 3D. Desarrollador Full-Stack apasionado por las interfaces retro y la computación gráfica.
          </p>
        </section>

              {/* Lista de habilidades/comandos disponibles (Panel 3) */}
        <section className="skills-summary text text_p">
          <h2>&gt; CONTACT INFO</h2>
          <ul>
            <li>* mail: cristianbaczek@gmail.com </li>
            <li>* +58- 424 - 9126314</li>
            <li>* Venezuela</li>
            <li><br/><b><a href="https://github.com/Kobalt09?tab=repositories" className="links" target="_blank" rel="noopener noreferrer">* My GitHub</a></b></li>
          </ul>
        </section>
      </section>

    </div>
  );
}

export default Home;
