import React from 'react';

function Projects() {
  return (
    <div className="project-container">
        {/* Proyecto 1: AI_model_for_detection_of_obstacles */}
        <a 
            href="https://github.com/Kobalt09/AI_model_for_detection_of_obstacles" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contenedor-grid-link"
        >
            <div className="contenedor-grid">
            <div className="panel text text_p">
                <h3>AI model for detection of obstacles</h3>
                <p>Artificial Intelligence model for real-time obstacle detection.</p>
            </div>
            
            <div className="panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className="image" src="#" alt="AI model for detection of obstacles" />
            </div>
            </div>
        </a>

        {/* Proyecto 2: Irrigation-system */}
        <a 
            href="https://github.com/Kobalt09/Sistema-de-riego" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contenedor-grid-link"
        >
            <div className="contenedor-grid">
            <div className="panel text text_p">
                <h3>Irrigation-system</h3>
                <p>Automated irrigation system and integration with hardware and IoT.</p>
            </div>
            
            <div className="panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className="image" src="#" alt="Irrigation system" />
            </div>
            </div>
        </a>

        {/* Proyecto 3: PolkaEdu */}
        <a 
            href="https://github.com/notoriussss/PolkaEdu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contenedor-grid-link"
        >
            <div className="contenedor-grid">
            <div className="panel text text_p">
                <h3>PolkaEdu</h3>
                <p>Interactive platform geared towards technological learning with blockchain technology.</p>
            </div>
            
            <div className="panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className="image" src="#" alt="PolkaEdu" />
            </div>
            </div>
        </a>

        {/* Proyecto 4: Ctrl-Home */}
        <a 
            href="https://github.com/Carlos19men/Ctrl-Home" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contenedor-grid-link"
        >
            <div className="contenedor-grid">
            <div className="panel text text_p">
                <h3>Ctrl-Home</h3>
                <p>Home automation control system for intelligent home automation.</p>
            </div>
            
            <div className="panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className="image" src="#" alt="Ctrl-Home" />
            </div>
            </div>
        </a>

        {/* Proyecto 5: UcaBytes */}
        <a 
            href="https://github.com/iadev0721/UcaBytes" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contenedor-grid-link"
        >
            <div className="contenedor-grid">
            <div className="panel text text_p">
                <h3>UcaBytes</h3>
                <p>Collaborative project for the development of IT solutions and web/software development.</p>
            </div>
            
            <div className="panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className="image" src="#" alt="UcaBytes" />
            </div>
            </div>
        </a>



    </div>
  );
}

export default Projects;
