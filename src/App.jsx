import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GithubContributions from './components/GithubContributions';
import ProjectsSection from './components/ProjectsSection';
import DemosSection from './components/DemosSection';
import SkillsSection from './components/SkillsSection';
import ExperienceEducation from './components/ExperienceEducation';
import Footer from './components/Footer';
import ChatbotPrototype from './components/ChatbotPrototype';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeDemoId, setActiveDemoId] = useState('rag-platform');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleSelectDemo = (demoId) => {
    setActiveDemoId(demoId);
    setActiveSection('demos');
    const demoElement = document.getElementById('demos');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreDemos = () => {
    handleSelectDemo('rag-platform');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-emerald-600 selection:text-white">
      {/* Navigation */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onOpenChatbot={() => setIsChatbotOpen(true)} 
      />

      {/* Main Content Body */}
      <main className="flex-1">
        <Hero 
          onExploreDemos={handleExploreDemos} 
          onOpenChatbot={() => setIsChatbotOpen(true)} 
        />

        {/* GitHub Green Contribution Pulse */}
        <GithubContributions />
        
        <ProjectsSection 
          onSelectDemo={handleSelectDemo} 
        />
        
        <DemosSection 
          activeDemoId={activeDemoId} 
          onSelectDemo={setActiveDemoId} 
        />
        
        <SkillsSection />
        
        <ExperienceEducation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Requirement Discovery Chatbot Modal */}
      <ChatbotPrototype 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
        onSelectDemo={handleSelectDemo} 
      />
    </div>
  );
}
