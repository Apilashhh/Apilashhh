import React, { useEffect, useState } from 'react';
import { websiteConfig, getProcessedGreeting } from '../data/mockData';

// Typing animation hook
const useTypewriter = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
};

const TreeIcon = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <svg 
      width="120" 
      height="120" 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`opacity-80 transition-all duration-2000 ${isAnimated ? 'scale-100 rotate-0' : 'scale-75 rotate-12'}`}
    >
      {/* Tree branches - fractal pattern with animation */}
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        {/* Main trunk */}
        <line 
          x1="60" y1="120" x2="60" y2="80" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0ms' }}
        />
        
        {/* Main branches */}
        <line 
          x1="60" y1="80" x2="45" y2="65" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '200ms' }}
        />
        <line 
          x1="60" y1="80" x2="75" y2="65" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '200ms' }}
        />
        
        {/* Secondary branches */}
        <line 
          x1="45" y1="65" x2="35" y2="50" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '400ms' }}
        />
        <line 
          x1="45" y1="65" x2="50" y2="50" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '400ms' }}
        />
        <line 
          x1="75" y1="65" x2="70" y2="50" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '400ms' }}
        />
        <line 
          x1="75" y1="65" x2="85" y2="50" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '400ms' }}
        />
        
        {/* Tertiary branches */}
        <line 
          x1="35" y1="50" x2="25" y2="35" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        />
        <line 
          x1="35" y1="50" x2="40" y2="35" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        />
        <line 
          x1="50" y1="50" x2="45" y2="35" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        />
        <line 
          x1="50" y1="50" x2="55" y2="35" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        />
        <line 
          x1="70" y1="50" x2="65" y2="35" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        />
        <line 
          x1="70" y1="50" x2="75" y2="35" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        />
        <line 
          x1="85" y1="50" x2="80" y2="35" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        />
        <line 
          x1="85" y1="50" x2="95" y2="35" 
          className={`transition-all duration-1000 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        />
      </g>
      
      {/* Leaves as small circles with staggered animation */}
      <g fill="currentColor">
        {[
          { cx: "25", cy: "35", delay: "800ms" },
          { cx: "40", cy: "35", delay: "850ms" },
          { cx: "45", cy: "35", delay: "900ms" },
          { cx: "55", cy: "35", delay: "950ms" },
          { cx: "65", cy: "35", delay: "1000ms" },
          { cx: "75", cy: "35", delay: "1050ms" },
          { cx: "80", cy: "35", delay: "1100ms" },
          { cx: "95", cy: "35", delay: "1150ms" }
        ].map((leaf, index) => (
          <circle 
            key={index}
            cx={leaf.cx} 
            cy={leaf.cy} 
            r="3" 
            opacity="0.8"
            className={`transition-all duration-500 ${isAnimated ? 'opacity-80 scale-100' : 'opacity-0 scale-0'}`}
            style={{ transitionDelay: leaf.delay }}
          />
        ))}
        
        {/* Additional small leaves */}
        {[
          { cx: "30", cy: "40", delay: "1200ms" },
          { cx: "52", cy: "42", delay: "1250ms" },
          { cx: "68", cy: "42", delay: "1300ms" },
          { cx: "90", cy: "40", delay: "1350ms" }
        ].map((leaf, index) => (
          <circle 
            key={`small-${index}`}
            cx={leaf.cx} 
            cy={leaf.cy} 
            r="2" 
            opacity="0.6"
            className={`transition-all duration-500 ${isAnimated ? 'opacity-60 scale-100' : 'opacity-0 scale-0'}`}
            style={{ transitionDelay: leaf.delay }}
          />
        ))}
      </g>
    </svg>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const greeting = getProcessedGreeting();
  const { displayText: typedGreeting, isComplete: typingComplete } = useTypewriter(greeting, 80);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

        {/* Main Greeting with Typing Animation */}
        <div className={`transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-100 mb-6 leading-tight min-h-[1.2em]">
            {typedGreeting.split(' ').map((word, index) => {
              // Highlight the name part in green
              const isName = word.toLowerCase().includes('apilash');
              return (
                <span 
                  key={index}
                  className={isName ? 'text-emerald-400' : ''}
                >
                  {word}{index < typedGreeting.split(' ').length - 1 ? ' ' : ''}
                </span>
              );
            })}
            {!typingComplete && <span className="animate-pulse text-emerald-400">|</span>}
          </h1>
        </div>

        {/* Tagline */}
        <div className={`transition-all duration-1000 delay-500 transform ${
          typingComplete ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-xl sm:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            {websiteConfig.personal.tagline}
          </p>
        </div>

        {/* Bio */}
        <div className={`transition-all duration-1000 delay-700 transform ${
          typingComplete ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-lg text-slate-500 font-light max-w-3xl mx-auto leading-relaxed mt-8">
            {websiteConfig.personal.bio}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          typingComplete ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
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