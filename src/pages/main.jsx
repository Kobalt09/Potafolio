import React, { useState } from 'react';
import Navbar from '../components/navbar.jsx';
import Home from './home.jsx';
import About_Me from './about_me.jsx';
import Projects from './projects.jsx';
import './terminal.css';

function Screen() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'about_me':
        return <About_Me />;
      case 'projects':
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="screen">
      {/* Navbar separada */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Contenedor principal de contenido, ahora es el contenedor base transparente */}
      <main className="content-area">
        {renderContent()}
      </main>
    </div>
  );
}

export default Screen;
