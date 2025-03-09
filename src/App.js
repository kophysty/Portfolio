import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import AboutMe from './components/AboutMe';
import Career from './components/Career';
import Skills from './components/Skills';
import Technologies from './components/Technologies';
import TechnicalExpertise from './components/TechnicalExpertise';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'about':
        return <AboutMe />;
      case 'career':
        return <Career />;
      case 'skills':
        return <Skills />;
      case 'technologies':
        return <Technologies />;
      case 'expertise':
        return <TechnicalExpertise />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-text font-system">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Header />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="mt-6">
          {renderActiveTab()}
        </main>
      </div>
    </div>
  );
}

export default App; 