import { useNavigate, useLocation } from 'react-router-dom';
import { MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const goHome = () => {
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={goHome}
        >
          <MapPin size={24} className="text-amber-400" />
          <h1 className="text-xl md:text-2xl font-serif font-bold">My US Adventures</h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <a 
            href="/" 
            className={`transition hover:text-amber-300 ${location.pathname === '/' ? 'text-amber-400 font-medium' : ''}`}
          >
            Map
          </a>
          <a 
            href="/about" 
            className={`transition hover:text-amber-300 ${location.pathname === '/about' ? 'text-amber-400 font-medium' : ''}`}
          >
            About
          </a>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 px-4 py-2">
          <nav className="flex flex-col space-y-3 pb-3">
            <a 
              href="/" 
              className={`transition hover:text-amber-300 ${location.pathname === '/' ? 'text-amber-400 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Map
            </a>
            <a 
              href="/about" 
              className={`transition hover:text-amber-300 ${location.pathname === '/about' ? 'text-amber-400 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;