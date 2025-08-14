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
    { name: "GitHub", icon: "Github", url: "https://github.com/Apilashhh/Apilashhh", active: true },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/in/yourusername", active: true },
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com/yourusername", active: false }
  ],

  // About Section
  about: {
    title: "/ about me",
    content: "Hi, I'm Apilash, currently pursuing a degree in **Finance**. With a passion for **investment banking**, I am excited to delve into the fast-paced world of finance where strategic thinking and analytical skills are paramount. Alongside my academic journey, I am deeply invested in **entrepreneurship**, **business development**, **sports**, and **music**—all of which have enriched my leadership abilities and shaped my innovative mindset. 📊 I believe finance is not just about numbers but about creating opportunities and driving growth. Whether it's building businesses or fostering creativity through sports and music, my goal is to merge my diverse passions into a thriving career in finance.",
    additionalInfo: "**M.Sc. in Economic Policy** – Business, Society & Sustainability Track | **B.Sc. Finance & Maths Graduate**, major in Finance | **'Financial Insights Chronicle' Founder-Author** | **HEC Business Game Participant 2025'**",
    profileImage: "https://customer-assets.emergentagent.com/job_personal-portfolio-12/artifacts/v3l8dkh0_027-61f939d6b3-LTE-15523.jfif",
    technologies: {
      title: "Here are some technologies and tools I have been working with:",
      list: [
        { name: "Bloomberg Terminal", category: "finance" },
        { name: "Excel VBA + Macros", category: "finance" },
        { name: "Microsoft Office", category: "finance" },
        { name: "Python", category: "programming" },
        { name: "Stata", category: "programming" },
        { name: "SQL", category: "programming" },
        { name: "CSS", category: "programming" },
        { name: "C++", category: "programming" }
      ]
    },
    interests: "💡 'I see finance as a tool for innovation, and I'm committed to using it to turn challenges into opportunities and ideas into impact.' Outside of finance, I'm passionate about sports (Crossfit/Weight-Lifting State Champion), music, and multilingual communication (fluent in French, English, Tamil, Spanish, Italian)."
  },

  // Experience Section
  experience: {
    title: "/ experience",
    jobs: [
      {
        id: 1,
        title: "International Undergraduate Research Assistant",
        company: "The Wharton School (University of Pennsylvania)",
        location: "Philadelphia, U.S (Remote)",
        duration: "Feb 2024 - Present",
        description: "Working on 'Green Bond Subnational Debt Market' research under Prof. Daniel G. Garrett at Jacobs Levy Equity Management Center for Quantitative Financial Research.",
        highlights: [
          "Conducted comprehensive market analysis using quantitative methods",
          "Utilized advanced financial software and tools for data modeling",
          "Contributed to groundbreaking research in sustainable finance"
        ],
        technologies: ["Bloomberg Terminal", "Stata", "Python", "Excel VBA"]
      },
      {
        id: 2,
        title: "Investment Banking Analyst Intern",
        company: "Finlatics",
        location: "Mumbai, India",
        duration: "June 2023 - August 2023",
        description: "Created complex financial models and evaluated investment opportunities in startup ecosystem.",
        highlights: [
          "Built financial models to forecast performance with 5-year projections",
          "Analyzed seed and crisis financing for high-potential startups",
          "Developed fundraising, pitching, and negotiation expertise",
          "Analyzed financial statements to discern lucrative investment prospects"
        ],
        technologies: ["Excel", "Financial Modeling", "Bloomberg", "Stata"]
      },
      {
        id: 3,
        title: "Investment Banking Analyst Intern",
        company: "City Investment Training",
        location: "London, UK",
        duration: "Jan 2023 - Feb 2023",
        description: "Intensive training program with former Investment Bankers from Barclays and Goldman Sachs.",
        highlights: [
          "Led Venture Capital/Private Equity/M&A negotiations based on Harvard and LBS case studies",
          "Implemented accounting for investment banking with detailed financial models",
          "Built comprehensive 5-year financial projections"
        ],
        technologies: ["Excel", "Financial Modeling", "Bloomberg Terminal"]
      },
      {
        id: 4,
        title: "Vacation Assistant",
        company: "BNP Paribas",
        location: "Paris, France",
        duration: "Jan 2023 - Feb 2023",
        description: "Administrative and operational support in banking environment.",
        highlights: [
          "Planned and organized Excel files for financial reporting",
          "Conducted check remittances and coordinated online platforms",
          "Gained hands-on experience in banking operations"
        ],
        technologies: ["Excel", "Microsoft Office", "Banking Systems"]
      }
    ]
  },

  // Projects Section
  projects: {
    title: "/ projects",
    featured: [
      {
        id: 1,
        title: "Tradanova",
        description: "Tradanova - Your Gamified Trading Playground 🎮📈. A risk-free trading simulation platform that turns learning about financial markets into a fun adventure! Create virtual portfolios, test trading strategies, and explore stocks without risking money. Features gamified experience and weekly finance podcasts.",
        technologies: ["Python", "JavaScript", "Financial APIs", "React", "Database Management"],
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
        duration: "June 2024 - Present"
      },
      {
        id: 2,
        title: "Financial Insights Chronicle",
        description: "The ultimate weekly newsletter designed, coded, and written by me! With over 300 subscribers and growing, we make finance easy, accessible, and insightful for everyone. Features in-depth market analysis, breaking financial news, and expert insights delivered weekly.",
        technologies: ["Newsletter Platform", "Content Management", "Analytics", "Email Marketing"],
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
        duration: "May 2024 - Present"
      },
      {
        id: 3,
        title: "YouTube Channel - Finance Journey",
        description: "Follow my journey as a finance student sharing the real-life hustle of balancing school, chasing opportunities, and pursuing dreams in the finance world. From study tips to personal growth, get an inside look at what it takes to aim high and make it happen!",
        technologies: ["Video Production", "Content Creation", "Social Media", "Analytics"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
        duration: "October 2014 - Present",
        icon: "Video" // This will be used to show a video camera icon
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