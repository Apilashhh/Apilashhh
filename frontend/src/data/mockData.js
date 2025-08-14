// Mock data for the personalizable portfolio website
export const websiteConfig = {
  // Personal Information
  personal: {
    name: "Apilash B.Maharajah",
    greeting: "hi, [name]", // [name] will be replaced with personal.name
    tagline: "I see finance as a tool for innovation.",
    profession: "Aspiring Finance Professional",
    location: "Paris, France",
    bio: "💼 Aspiring Finance Professional with Entrepreneurial Spirit. With a passion for investment banking, I am excited to delve into the fast-paced world of finance where strategic thinking and analytical skills are paramount."
  },

  // Navigation Menu Items
  navigation: [
    { label: "Home", href: "#home", active: true },
    { label: "About", href: "#about", active: true },
    { label: "Experience", href: "#experience", active: true },
    { label: "Projects", href: "#projects", active: true }
  ],

  // Social Links
  social: [
    { name: "Email", icon: "Mail", url: "mailto:your@email.com", active: true },
    { name: "GitHub", icon: "Github", url: "https://github.com/yourusername", active: true },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/in/yourusername", active: true },
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com/yourusername", active: false }
  ],

  // About Section
  about: {
    title: "/ about me",
    content: "I am currently a Software Development Engineer at **Your Company**, working in the **Your Team** sector under team **Your Team Name**. At the same time, I am undertaking a part-time Master's of Science in Software Engineering at **Your University**.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    technologies: {
      title: "Here are some technologies I have been working with:",
      list: [
        { name: "TypeScript", category: "frontend" },
        { name: "Python", category: "backend" },
        { name: "React.js", category: "frontend" },
        { name: "Java", category: "backend" },
        { name: "JavaScript ES6+", category: "frontend" },
        { name: "C#", category: "backend" }
      ]
    },
    interests: "Outside of work, I'm interested in following the developments of science. I also play a lot of video games. And make TikToks."
  },

  // Experience Section
  experience: {
    title: "/ experience",
    jobs: [
      {
        id: 1,
        title: "Software Development Engineer",
        company: "Your Company",
        location: "Your City, Country",
        duration: "2023 - Present",
        description: "Working on large-scale distributed systems and contributing to products with millions of users.",
        highlights: [
          "Led development of key features serving 10M+ users",
          "Improved system performance by 40%",
          "Mentored junior developers"
        ],
        technologies: ["TypeScript", "React", "Node.js", "AWS"]
      },
      {
        id: 2,
        title: "Software Engineer Intern",
        company: "Previous Company",
        location: "Previous City, Country",
        duration: "2022 - 2023",
        description: "Developed and maintained web applications using modern technologies.",
        highlights: [
          "Built responsive web applications",
          "Collaborated with cross-functional teams",
          "Implemented automated testing"
        ],
        technologies: ["JavaScript", "Python", "Django", "PostgreSQL"]
      }
    ]
  },

  // Projects Section
  projects: {
    title: "/ projects",
    featured: [
      {
        id: 1,
        title: "Project One",
        description: "A full-stack web application that helps users manage their daily tasks with advanced features.",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        demoUrl: "#",
        githubUrl: "#",
        featured: true
      },
      {
        id: 2,
        title: "Project Two",
        description: "A mobile-responsive portfolio website showcasing modern design principles and animations.",
        technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        demoUrl: "#",
        githubUrl: "#",
        featured: true
      }
    ]
  },

  // Theme Colors
  theme: {
    primary: "#1e293b", // Dark blue background
    accent: "#10b981", // Green accent color
    text: "#f1f5f9", // Light text
    textSecondary: "#94a3b8", // Secondary text
    highlight: "#10b981" // Highlight color for keywords
  },

  // Customization Settings
  settings: {
    showProjects: true,
    showExperience: true,
    showAbout: true,
    enableAnimations: true,
    showSocialIcons: true
  }
};

// Utility function to replace placeholders in text
export const replacePlaceholders = (text, data) => {
  return text.replace(/\[(\w+)\]/g, (match, key) => {
    return data[key] || match;
  });
};

// Function to get processed greeting
export const getProcessedGreeting = () => {
  return replacePlaceholders(websiteConfig.personal.greeting, {
    name: websiteConfig.personal.name.split(' ')[0].toLowerCase()
  });
};