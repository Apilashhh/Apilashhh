import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

// Data
import { websiteConfig } from './data/mockData';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Portfolio = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log('Backend connected:', response.data.message);
    } catch (e) {
      console.error('Backend connection failed:', e);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  // Smooth scroll behavior for navigation links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          const offsetTop = element.offsetTop - 80; // Account for fixed navigation
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main>
        <Hero />
        
        {websiteConfig.settings.showAbout && <About />}
        
        {websiteConfig.settings.showExperience && <Experience />}
        
        {websiteConfig.settings.showProjects && <Projects />}
      </main>
      
      <Footer />
    </div>
  );
};

// Customization Panel Component (for personalization)
const CustomizationPanel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-slate-100">Customize Your Portfolio</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-100 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="text-slate-300 space-y-4">
          <p className="text-emerald-400 font-medium">
            🎉 Your personalizable portfolio clone is ready!
          </p>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-slate-100">How to customize:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                Edit <code className="bg-slate-700 px-2 py-1 rounded text-xs">/app/frontend/src/data/mockData.js</code> to change all content
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                Modify personal info, navigation, social links, about section, experience, and projects
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                Toggle sections on/off using the settings object
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                Change colors by updating the theme object
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                Add your own projects, experience, and profile image
              </li>
            </ul>
          </div>
          
          <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
            <p className="text-xs text-slate-400">
              <strong>Note:</strong> This is currently using mock data. You can easily replace it with your own content 
              by editing the configuration file. The design closely matches the original gazijarin.com style!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [showCustomization, setShowCustomization] = React.useState(false);

  // Show customization panel on first load
  useEffect(() => {
    const hasSeenCustomization = localStorage.getItem('hasSeenCustomization');
    if (!hasSeenCustomization) {
      setTimeout(() => {
        setShowCustomization(true);
        localStorage.setItem('hasSeenCustomization', 'true');
      }, 2000);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      
      {/* Floating customization button */}
      <button
        onClick={() => setShowCustomization(true)}
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-40"
        title="Customize Portfolio"
      >
        ⚙️
      </button>
      
      <CustomizationPanel 
        isOpen={showCustomization} 
        onClose={() => setShowCustomization(false)} 
      />
    </div>
  );
}

export default App;