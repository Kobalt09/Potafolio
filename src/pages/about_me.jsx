import React from 'react';

function About_Me() {
  return (
    <div className="home-container">
      {/* personal info grid */}
      <div className="contenedor-grid">
        <div className="panel text text_h1">
          <p>[Name: Cristian Baczek]</p>
          <p>[USER: Kobalt09]</p>
        </div>
        <div className="panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img className="image" src="/images/portrait.png" alt="que miras voz?" />
        </div>
      </div>

      {/* Título e introducción */}
      <section className="panel intro text text_p">
        <h3>&gt; INFO :</h3>
        <p className="glitch-text">
          Computer Engineering student with experience in full-stack development, IoT, process automation, edge computing devices, and AI development. Strong commitment to developing projects that are real and lasting solutions.
        </p>
        <br />
        <h3>&gt; MAIN INTERESTS :</h3>
        <p>IoT, Automation, Programming</p>

              {/* Lista de habilidades/comandos disponibles */}
        <section className="skills-summary text text_p">
          <h3>&gt; SKILLS :</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            <li>
              <div><strong>* FRONTEND:</strong> React, Next.js, TailwindCSS, HTML5, CSS3, Vite, Three.js / R3F</div>
            </li>

            <li>
              <div><strong>* BACKEND:</strong> Node.js, NestJS, Express</div>
            </li>

            <li>
              <div><strong>* DATABASES:</strong> PostgreSQL, MySQL, SQL Server</div>
            </li>

            <li>
              <div><strong>* TOOLS & PLATFORMS:</strong> Git, Docker, Linux, Postman, n8n</div>
            </li>

            <li>
              <div><strong>* GAME DEV & DESIGN:</strong> Godot, Blender, Figma, Blockbench</div>
            </li>

            <li>
              <div><strong>* IOT & HARDWARE:</strong> Arduino, Raspberry Pi, ESP32</div>
            </li>

          </ul>
        </section>
        
        <section className="skills-summary text text_p">
          <h3>&gt; eduCATion :</h3>
          <ul>
            <li>* Escuela Técnica Andres Bello, Intermediate Vocational Training Cycle (Sep 2018 - May 2022) </li>
            <li>* Universidad Católica Andrés Bello, University Degree (Sep 2022 - Present) </li>
          </ul>
        </section>
      </section>



      {/* Prompter simulado de terminal (Panel 4) */}
      <section className="panel prompt-line text text_p">
        <span className="prompt"></span>
        <span className="command">Navega usando la barra superior para explorar mis proyectos...<span className="cursor">█</span></span>
      </section>
    </div>
  );
}

export default About_Me;
