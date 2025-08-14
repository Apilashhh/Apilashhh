import React, { useEffect, useState } from 'react';
import { websiteConfig, getProcessedGreeting } from '../data/mockData';

const TreeIcon = () => (
  <svg 
    width="120" 
    height="120" 
    viewBox="0 0 120 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-80"
  >
    {/* Tree branches - fractal pattern */}
    <g stroke="currentColor" strokeWidth="1.5" fill="none">
      {/* Main trunk */}
      <line x1="60" y1="120" x2="60" y2="80" />
      
      {/* Main branches */}
      <line x1="60" y1="80" x2="45" y2="65" />
      <line x1="60" y1="80" x2="75" y2="65" />
      
      {/* Secondary branches */}
      <line x1="45" y1="65" x2="35" y2="50" />
      <line x1="45" y1="65" x2="50" y2="50" />
      <line x1="75" y1="65" x2="70" y2="50" />
      <line x1="75" y1="65" x2="85" y2="50" />
      
      {/* Tertiary branches */}
      <line x1="35" y1="50" x2="25" y2="35" />
      <line x1="35" y1="50" x2="40" y2="35" />
      <line x1="50" y1="50" x2="45" y2="35" />
      <line x1="50" y1="50" x2="55" y2="35" />
      <line x1="70" y1="50" x2="65" y2="35" />
      <line x1="70" y1="50" x2="75" y2="35" />
      <line x1="85" y1="50" x2="80" y2="35" />
      <line x1="85" y1="50" x2="95" y2="35" />
    </g>
    
    {/* Leaves as small circles */}
    <g fill="currentColor">
      <circle cx="25" cy="35" r="3" opacity="0.8" />
      <circle cx="40" cy="35" r="3" opacity="0.8" />
      <circle cx="45" cy="35" r="3" opacity="0.8" />
      <circle cx="55" cy="35" r="3" opacity="0.8" />
      <circle cx="65" cy="35" r="3" opacity="0.8" />
      <circle cx="75" cy="35" r="3" opacity="0.8" />
      <circle cx="80" cy="35" r="3" opacity="0.8" />
      <circle cx="95" cy="35" r="3" opacity="0.8" />
      
      {/* Additional small leaves */}
      <circle cx="30" cy="40" r="2" opacity="0.6" />
      <circle cx="52" cy="42" r="2" opacity="0.6" />
      <circle cx="68" cy="42" r="2" opacity="0.6" />
      <circle cx="90" cy="40" r="2" opacity="0.6" />
    </g>
  </svg>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const greeting = getProcessedGreeting();

  return (
    <section id="home" className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Tree Icon */}
        <div className={`inline-block text-slate-400 mb-8 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <TreeIcon />
        </div>

        {/* Main Greeting */}
        <div className={`transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-100 mb-6 leading-tight">
            {greeting.split(' ').map((word, index) => {
              // Highlight the name part in green
              const isName = word.includes(websiteConfig.personal.name.split(' ')[0].toLowerCase());
              return (
                <span 
                  key={index}
                  className={isName ? 'text-emerald-400' : ''}
                >
                  {word}{index < greeting.split(' ').length - 1 ? ' ' : ''}
                </span>
              );
            })}
          </h1>
        </div>

        {/* Tagline */}
        <div className={`transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-xl sm:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            {websiteConfig.personal.tagline}
          </p>
        </div>

        {/* Bio */}
        <div className={`transition-all duration-1000 delay-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-lg text-slate-500 font-light max-w-3xl mx-auto leading-relaxed mt-8">
            {websiteConfig.personal.bio}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-600 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;