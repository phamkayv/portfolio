import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-cream-50 to-sage-100">
      {/* Background Organic Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-terracotta-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-sage-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cream-300 rounded-full opacity-30 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-sage-800 mb-6 leading-tight">
            Phamkv
          </h1>
          <p className="text-2xl md:text-3xl text-sage-600 mb-4 font-light">
            Digital Artist
          </p>
          <p className="text-lg md:text-xl text-sage-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            BCIT graduate crafting compelling digital experiences through art and design. 
            Transforming ideas into visual stories that inspire and connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToPortfolio}
              className="bg-terracotta-500 text-white px-8 py-3 rounded-full font-medium hover:bg-terracotta-600 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <a 
              href="#contact"
              className="text-sage-700 px-8 py-3 border-2 border-sage-300 rounded-full font-medium hover:bg-sage-100 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;