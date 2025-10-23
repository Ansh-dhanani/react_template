import React, { useState, useEffect } from 'react';
import { Menu, X, User, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-white font-bold text-xl">GameHub</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Home</a>
            <a href="#games" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Games</a>
            <a href="#tournaments" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Tournaments</a>
            <a href="#community" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Community</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200">
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4 space-y-2">
            <a href="#home" className="block text-gray-300 hover:text-cyan-400 py-2">Home</a>
            <a href="#games" className="block text-gray-300 hover:text-cyan-400 py-2">Games</a>
            <a href="#tournaments" className="block text-gray-300 hover:text-cyan-400 py-2">Tournaments</a>
            <a href="#community" className="block text-gray-300 hover:text-cyan-400 py-2">Community</a>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium mt-4">
              Login
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;