import React from 'react';
import { Mail, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { websiteConfig } from '../data/mockData';

const Footer = () => {
  const socialIcons = {
    Mail,
    Github,
    Linkedin,
    Twitter
  };

  const activeSocials = websiteConfig.social.filter(social => social.active);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left side - Name and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-slate-100 mb-2">
              {websiteConfig.personal.name}
            </h3>
            <p className="text-slate-400 text-sm">
              {websiteConfig.personal.profession} • {websiteConfig.personal.location}
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center space-x-4">
            {activeSocials.map((social) => {
              const IconComponent = socialIcons[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 p-3 hover:bg-slate-800/50 rounded-lg group"
                  aria-label={social.name}
                >
                  <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-200" />
                </a>
              );
            })}
          </div>

          {/* Right side - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Made with{' '}
              <Heart size={14} className="mx-1 text-red-400 fill-current" />
              by {websiteConfig.personal.name.split(' ')[0]}
            </p>
          </div>
        </div>

        {/* Bottom divider and additional info */}
        <div className="mt-8 pt-8 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-500 text-xs">
              This website is customizable and built with React & Tailwind CSS
            </p>
            <div className="flex space-x-6 text-xs">
              <a 
                href="#home" 
                className="text-slate-500 hover:text-emerald-400 transition-colors duration-200"
              >
                Back to Top
              </a>
              <span className="text-slate-600">•</span>
              <span className="text-slate-500">
                Inspired by gazijarin.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;