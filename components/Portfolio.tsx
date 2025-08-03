import React, { useState } from 'react';
import { ExternalLink, Zap } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Using Pexels images as placeholders for portfolio pieces
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Digital Nature Series",
      category: "Digital Art",
      description: "Exploring organic forms through digital mediums",
      image: "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Abstract Compositions",
      category: "Abstract",
      description: "Contemporary abstract digital paintings",
      image: "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Character Design",
      category: "Illustration",
      description: "Original character concepts and designs",
      image: "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Environmental Studies",
      category: "Digital Art",
      description: "Digital landscape and environment concepts",
      image: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Geometric Patterns",
      category: "Abstract",
      description: "Mathematical beauty in digital form",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Portrait Studies",
      category: "Illustration",
      description: "Digital portrait exploration and techniques",
      image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const categories = ['All', 'Digital Art', 'Abstract', 'Illustration'];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">Portfolio</h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            A curated selection of my digital artwork, showcasing various techniques and creative explorations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-terracotta-500 text-white shadow-lg'
                  : 'bg-cream-100 text-sage-700 hover:bg-cream-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={16} className="text-terracotta-500" />
                  <span className="text-sm font-medium text-terracotta-600">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold text-sage-800 mb-2">{item.title}</h3>
                <p className="text-sage-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <p className="text-sage-600 mb-6">Want to see more of my work?</p>
          <button className="bg-sage-600 text-white px-8 py-3 rounded-full font-medium hover:bg-sage-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;