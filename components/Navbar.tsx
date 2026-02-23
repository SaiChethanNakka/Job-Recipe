import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { APP_NAME } from '../constants';

interface NavbarProps {
  isAuthed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLoginClick = () => {
    navigate('/auth');
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const isAuthPage = location.pathname === '/auth';

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button 
            onClick={handleLogoClick} 
            className="text-xl font-bold tracking-tight text-brand-900 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-md p-1"
          >
            <span className="bg-brand-600 text-white p-1 rounded-lg">JR</span>
            {APP_NAME}
          </button>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {!isAuthed && !isAuthPage ? (
              <>
                <button
                  onClick={handleLoginClick}
                  className="text-sm font-medium text-stone-600 hover:text-brand-700 transition-colors px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-200"
                >
                  Log in
                </button>
                <button
                  onClick={handleLoginClick}
                  className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                >
                  Create account
                </button>
              </>
            ) : isAuthed ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-stone-600">Welcome back!</span>
                <div className="h-8 w-8 rounded-full bg-brand-100 border border-brand-200 flex items-center justify-center text-brand-700 font-bold text-xs">
                  JD
                </div>
              </div>
            ) : null}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
             {!isAuthPage && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-stone-600 hover:bg-stone-100 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
             )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && !isAuthPage && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="p-4 flex flex-col gap-4">
             {!isAuthed ? (
              <>
                <button
                  onClick={handleLoginClick}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-50 rounded-md"
                >
                  Log in
                </button>
                <button
                  onClick={handleLoginClick}
                  className="w-full bg-brand-600 text-white text-sm font-medium px-4 py-3 rounded-md shadow-sm active:bg-brand-800"
                >
                  Create account
                </button>
              </>
            ) : (
               <div className="px-4 py-3 text-sm font-medium text-stone-700">
                  Logged in as John Doe
               </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
