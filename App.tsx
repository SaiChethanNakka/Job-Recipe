import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';

// Simple Auth Stub as requested
// Change this to true to see the "authenticated" view
const isAuthed = false;

const ToolPlaceholder = ({ slug }: { slug: string }) => (
  <div className="min-h-screen flex items-center justify-center flex-col bg-stone-50 p-4 text-center">
    <h1 className="text-3xl font-bold text-brand-900 mb-4 capitalize">{slug.replace(/-/g, ' ')}</h1>
    <p className="text-stone-600 max-w-md">
        This is the placeholder for the <strong>{slug}</strong> tool. 
        In a real app, the specific tool interface would load here.
    </p>
    <a href="/" className="mt-8 text-brand-600 hover:underline">← Back to Dashboard</a>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage isAuthed={isAuthed} />} />
        <Route path="/auth" element={<AuthPage />} />
        
        {/* Tool Routes - Protected */}
        <Route path="/tools/:slug" element={
            isAuthed 
            ? <ToolPlaceholder slug={window.location.hash.split('/').pop() || 'Tool'} /> 
            : <Navigate to="/auth" replace />
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
