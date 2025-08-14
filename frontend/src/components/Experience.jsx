import React, { useEffect, useState, useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { websiteConfig } from '../data/mockData';

const Experience = () => {
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
    <section id="experience" ref={sectionRef} className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-light text-slate-100 mb-16">
            {websiteConfig.experience.title}
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {websiteConfig.experience.jobs.map((job, index) => (
            <div
              key={job.id}
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="relative bg-slate-900/50 rounded-xl p-8 hover:bg-slate-900/70 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50">
                {/* Timeline connector (except for last item) */}
                {index < websiteConfig.experience.jobs.length - 1 && (
                  <div className="absolute left-8 -bottom-12 w-px h-12 bg-gradient-to-b from-emerald-400 to-slate-600"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute -left-2 top-8 w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-800"></div>

                <div className="ml-6">
                  {/* Job Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-lg text-emerald-400 font-medium">
                        {job.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:items-end mt-2 sm:mt-0 space-y-1">
                      <div className="flex items-center text-slate-400 text-sm">
                        <Calendar size={14} className="mr-2" />
                        {job.duration}
                      </div>
                      <div className="flex items-center text-slate-400 text-sm">
                        <MapPin size={14} className="mr-2" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {job.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-slate-200 font-medium mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-slate-200 font-medium mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;