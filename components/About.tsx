import React from 'react';
import { GraduationCap, Palette, Code, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-sage-50 to-cream-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">About Me</h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Passionate digital artist with a fresh perspective and strong technical foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-sage-700">
                <p className="text-lg leading-relaxed">
                  Hi, I'm Phamkv, a recent graduate from the British Columbia Institute of Technology (BCIT) 
                  with a passion for creating compelling digital art that bridges traditional artistic techniques 
                  with cutting-edge digital technology.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey in digital art began with a fascination for how technology can amplify creative 
                  expression. Through my studies at BCIT, I've developed a strong foundation in digital design 
                  principles while maintaining an organic, nature-inspired aesthetic that brings warmth and 
                  authenticity to digital spaces.
                </p>
                <p className="text-lg leading-relaxed">
                  I specialize in creating artwork that tells stories, evokes emotions, and connects with 
                  audiences on a meaningful level. Whether it's through abstract compositions, character design, 
                  or environmental studies, I strive to bring a unique perspective to every project.
                </p>
              </div>

              {/* Skills/Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="text-terracotta-500" size={24} />
                    <h3 className="font-semibold text-sage-800">Education</h3>
                  </div>
                  <p className="text-sage-600 text-sm">BCIT Graduate</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Palette className="text-terracotta-500" size={24} />
                    <h3 className="font-semibold text-sage-800">Specialty</h3>
                  </div>
                  <p className="text-sage-600 text-sm">Digital Art & Design</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Code className="text-terracotta-500" size={24} />
                    <h3 className="font-semibold text-sage-800">Technical</h3>
                  </div>
                  <p className="text-sage-600 text-sm">Digital Tools & Software</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="text-terracotta-500" size={24} />
                    <h3 className="font-semibold text-sage-800">Focus</h3>
                  </div>
                  <p className="text-sage-600 text-sm">Creative Innovation</p>
                </div>
              </div>
            </div>

            {/* Image/Visual Element */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1084687/pexels-photo-1084687.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Digital art workspace"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-sage-800 mb-2">Creative Process</h3>
                  <p className="text-sage-600">
                    Blending traditional artistic principles with digital innovation to create unique visual experiences.
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-terracotta-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-sage-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;