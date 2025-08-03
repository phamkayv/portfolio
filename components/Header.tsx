import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cream-50/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-sage-800">Phamkv</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-sage-700 hover:text-terracotta-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sage-700 hover:text-terracotta-600 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sage-700 hover:text-terracotta-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sage-700 hover:text-terracotta-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-sage-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-sage-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-sage-700 hover:text-terracotta-600 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sage-700 hover:text-terracotta-600 transition-colors text-left">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sage-700 hover:text-terracotta-600 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sage-700 hover:text-terracotta-600 transition-colors text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;