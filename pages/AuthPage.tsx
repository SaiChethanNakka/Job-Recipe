import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Lock } from 'lucide-react';

const AuthPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const next = searchParams.get('next');
  const navigate = useNavigate();

  // In a real app, this would be a real login form
  const handleSimulateLogin = () => {
    // This is just a simulation. In a real app, we'd update global auth state.
    // For this demo, we can't easily flip the 'isAuthed' prop in App.tsx without Context or Redux.
    // So we'll just alert the user.
    alert("In a real implementation, you would be logged in and redirected to: " + (next || '/'));
    if (next) {
        // Just redirecting for demo flow feeling
        navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar isAuthed={false} />
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
          <div className="p-8 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 mb-6">
              <Lock className="h-6 w-6 text-brand-600" />
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-2">Sign in to JobRecipie</h2>
            <p className="text-stone-600 mb-8">
              {next ? 'Please log in to access this tool.' : 'Welcome back! Please enter your details.'}
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-stone-700 text-left mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 text-left mb-1">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <button 
                onClick={handleSimulateLogin}
                className="w-full bg-brand-600 text-white font-semibold py-2.5 rounded-lg hover:bg-brand-700 transition-colors shadow-sm mt-2"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-sm text-stone-500">
              Don't have an account? <a href="#" className="text-brand-600 font-medium hover:underline">Sign up</a>
            </div>
          </div>
          <div className="bg-stone-50 px-8 py-4 border-t border-stone-100 text-center">
             <p className="text-xs text-stone-400">This is a demo authentication page.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthPage;
