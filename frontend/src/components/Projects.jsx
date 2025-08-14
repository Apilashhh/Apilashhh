import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { websiteConfig } from '../data/mockData';

const Projects = () => {
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

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-light text-slate-100 mb-16">
            {websiteConfig.projects.title}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {websiteConfig.projects.featured.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50 group">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors duration-200 group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors duration-200 group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="group-hover/link:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium">Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Link */}
        <div className={`text-center mt-12 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors duration-200 group border border-slate-600/50 hover:border-emerald-400/50 px-6 py-3 rounded-lg"
          >
            <span className="text-sm font-medium">View All Projects</span>
            <ExternalLink size={16} className="group-hover:scale-110 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;