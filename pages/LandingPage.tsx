import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ToolGrid from '../components/ToolGrid';
import ValueStrip from '../components/ValueStrip';
import Footer from '../components/Footer';

interface LandingPageProps {
  isAuthed: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ isAuthed }) => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar isAuthed={isAuthed} />
      <main className="flex-grow">
        <Hero isAuthed={isAuthed} />
        <ValueStrip />
        <ToolGrid isAuthed={isAuthed} />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
