import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AIDemo from './components/AIDemo';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import ChatInterface from './components/ChatInterface';
import FolkloreGuide from './components/FolkloreGuide';

function App() {
  const [showChatInterface, setShowChatInterface] = useState(false);
  const [showFolkloreGuide, setShowFolkloreGuide] = useState(false);

  if (showChatInterface) {
    return <ChatInterface onBack={() => setShowChatInterface(false)} />;
  }

  if (showFolkloreGuide) {
    return <FolkloreGuide onBack={() => setShowFolkloreGuide(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Header onChatClick={() => setShowChatInterface(true)} />
      <Hero />
      <Features 
        onChatClick={() => setShowChatInterface(true)}
        onFolkloreClick={() => setShowFolkloreGuide(true)}
      />
      <AIDemo />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;