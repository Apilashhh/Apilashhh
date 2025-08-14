import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import { websiteConfig } from '../data/mockData';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialIcons = {
    Mail,
    Github,
    Linkedin,
    Twitter
  };

  const activeSocials = websiteConfig.social.filter(social => social.active);
  const activeNavItems = websiteConfig.navigation.filter(nav => nav.active);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-xl font-semibold text-slate-100 hover:text-emerald-400 transition-colors duration-200"
            >
              {websiteConfig.personal.name}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {activeNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-200"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - Desktop */}
            <div className="hidden sm:flex items-center space-x-3">
              {activeSocials.map((social) => {
                const IconComponent = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 p-2 hover:bg-slate-800/50 rounded-lg"
                    aria-label={social.name}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-400 hover:text-emerald-400 p-2 hover:bg-slate-800/50 rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800/50">
              {activeNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-emerald-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-3 px-3 py-2 pt-4 border-t border-slate-800/50 mt-4">
                {activeSocials.map((social) => {
                  const IconComponent = socialIcons[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 p-2 hover:bg-slate-800/50 rounded-lg"
                      aria-label={social.name}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;