import React, { useEffect, useState, useRef } from 'react';
import { websiteConfig } from '../data/mockData';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Function to highlight text with markdown-style bold syntax
  const renderHighlightedText = (text) => {
    return text.split('**').map((part, index) => {
      if (index % 2 === 1) {
        // This is a highlighted part
        return (
          <span key={index} className="text-emerald-400 font-medium">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const frontendTechs = websiteConfig.about.technologies.list.filter(tech => tech.category === 'frontend');
  const backendTechs = websiteConfig.about.technologies.list.filter(tech => tech.category === 'backend');

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-light text-slate-100 mb-16">
            {websiteConfig.about.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className="lg:col-span-2">
            {/* Main Description */}
            <div className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                {renderHighlightedText(websiteConfig.about.content)}
              </p>
            </div>

            {/* Technologies */}
            <div className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <p className="text-slate-400 mb-6">
                {websiteConfig.about.technologies.title}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Frontend Technologies */}
                <div className="space-y-3">
                  {frontendTechs.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:bg-emerald-300 transition-colors duration-200"></div>
                      <span className="text-slate-300 group-hover:text-slate-100 transition-colors duration-200">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Backend Technologies */}
                <div className="space-y-3">
                  {backendTechs.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:bg-emerald-300 transition-colors duration-200"></div>
                      <span className="text-slate-300 group-hover:text-slate-100 transition-colors duration-200">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className={`transition-all duration-1000 delay-600 transform mt-8 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <p className="text-slate-400 leading-relaxed">
                {websiteConfig.about.interests}
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 shadow-2xl">
                <img
                  src={websiteConfig.about.profileImage}
                  alt={`${websiteConfig.personal.name} profile`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl opacity-20 blur-sm -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;