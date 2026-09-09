import React from 'react';

function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="terminal-nav">
      <button 
        className= {activeTab === 'home' ? 'active' : ''} 
        onClick={() => setActiveTab('home')}
      >
        [1. HOME]
      </button>

      <button 
        className={activeTab === 'about_me' ? 'active' : ''} 
        onClick={() => setActiveTab('about_me')}
      >
        [2. ABOUT]
      </button>

      <button 
        className={activeTab === 'projects' ? 'active' : ''} 
        onClick={() => setActiveTab('projects')}
      >
        [3. PROJECTS]
      </button>
    </header>
  );
}

export default Navbar;