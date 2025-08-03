import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Phamkv</h3>
            <p className="text-sage-300">Digital Artist & BCIT Graduate</p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sage-300">
            <span>Made with</span>
            <Heart size={16} className="text-terracotta-400 fill-current" />
            <span>© 2025 Phamkv. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;