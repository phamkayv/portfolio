import React, { useState } from 'react';
import { Mail, MessageCircle, User, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-sage-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-lg text-sage-200 max-w-2xl mx-auto">
              Ready to bring your creative vision to life? I'd love to hear about your project and discuss how we can collaborate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-sage-200 mb-8">
                  Whether you're looking for custom digital art, illustration work, or creative collaboration, 
                  I'm always excited to discuss new opportunities and bring fresh perspectives to your projects.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-terracotta-500 p-3 rounded-full">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:hello@phamkv.com" className="text-sage-200 hover:text-white transition-colors">
                      hello@phamkv.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-terracotta-500 p-3 rounded-full">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Response Time</h4>
                    <p className="text-sage-200">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-sage-700 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">What I Can Help With:</h4>
                <ul className="space-y-2 text-sage-200">
                  <li>• Custom digital artwork and illustrations</li>
                  <li>• Character design and concept art</li>
                  <li>• Creative consulting and art direction</li>
                  <li>• Collaborative artistic projects</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-sage-800 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-sage-400" size={20} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-sage-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-terracotta-500 text-white py-3 rounded-lg font-medium hover:bg-terracotta-600 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;