/**
 * ============================================================================
 * DIPANSHU'S PROFESSIONAL PORTFOLIO DATA CONFIGURATION
 * B.Tech CSE (Cloud Computing & Gen AI) | Lovely Professional University
 * ============================================================================
 */

const portfolioData = {
  // --------------------------------------------------------------------------
  // 1. Personal Profile & Contact
  // --------------------------------------------------------------------------
  profile: {
    name: "Dipanshu",
    fullName: "Dipanshu Soni",
    brand: "dipanshu.dev",
    title: "B.Tech CSE Undergraduate & AI / Cloud Developer",
    cgpa: "9.41",
    university: "Lovely Professional University (LPU)",
    specialization: "Cloud Computing & Generative AI",
    status: {
      available: true,
      badgeText: "Open to Internships, Technical Projects & Research Collaboration",
      location: "Phagwara, Punjab &bull; Open to Remote / Hybrid"
    },
    bio: "Computer Science and Engineering undergraduate specializing in Cloud Computing and Generative AI at Lovely Professional University (CGPA: 9.41). Passionate about building intelligent software, IoT systems, cloud solutions, and solving real-world challenges through clean, maintainable code.",
    avatar: "images/profile.jpg",
    email: "dipanshusoni.21.7782@gmail.com",
    phone: "+91 98963 41756",
    location: "Phagwara, Punjab &bull; Haryana, India",
    resumeUrl: "assets/resume.pdf",

    socialLinks: {
      github: "https://github.com/dipanshu-soni-shadowcodex2504",
      linkedin: "https://www.linkedin.com/in/dipanshu-soni-32b4ab39b",
      email: "mailto:dipanshusoni.21.7782@gmail.com",
      phone: "tel:+919896341756"
    }
  },

  // --------------------------------------------------------------------------
  // 2. High-Impact Highlights / Metric Strip
  // --------------------------------------------------------------------------
  highlights: [
    { number: "9.41", label: "Academic CGPA (LPU)", icon: "fas fa-graduation-cap" },
    { number: "4+", label: "Programming Languages", icon: "fas fa-code" },
    { number: "5+", label: "Verified Credentials", icon: "fas fa-award" },
    { number: "100%", label: "Hands-on Project Execution", icon: "fas fa-microchip" }
  ],

  // --------------------------------------------------------------------------
  // 3. Technical Skills Matrix
  // --------------------------------------------------------------------------
  skills: [
    {
      category: "Programming Languages",
      icon: "fas fa-code",
      items: [
        { name: "Python", level: "Proficient" },
        { name: "C / C++", level: "Proficient" },
        { name: "JavaScript", level: "Intermediate" }
      ]
    },
    {
      category: "Core Technologies & AI",
      icon: "fas fa-brain",
      items: [
        { name: "Cloud Computing", level: "Specialized" },
        { name: "Generative AI", level: "Specialized" },
        { name: "HTML5 & CSS3", level: "Proficient" },
        { name: "AutoCAD", level: "Proficient" }
      ]
    },
    {
      category: "Databases & Developer Tools",
      icon: "fas fa-database",
      items: [
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Git & GitHub", level: "Proficient" },
        { name: "Firebase", level: "Proficient" },
        { name: "Microsoft Excel", level: "Advanced" }
      ]
    },
    {
      category: "Hardware & IoT Systems",
      icon: "fas fa-microchip",
      items: [
        { name: "ESP32 & ESP32-CAM", level: "Hardware Layer" },
        { name: "Arduino Development", level: "Embedded" },
        { name: "IoT Sensor Integration", level: "Hardware/Web" }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 4. Featured Projects
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "agrotech",
      title: "AgroTech - Smart Farming Dashboard",
      category: "IoT / Cloud / Web",
      period: "2026",
      tagline: "IoT-enabled smart agriculture telemetry and real-time field surveillance.",
      description: "Developed and integrated the hardware/IoT layer of a smart farming prototype using ESP32 and ESP32-CAM for autonomous field monitoring. Integrated multi-sensor arrays (soil moisture, temperature, humidity) transmitting real-time readings to Firebase and built a responsive web dashboard with Chart.js for data visualization and crop health analytics.",
      tags: ["ESP32", "ESP32-CAM", "IoT Sensors", "Firebase", "HTML5", "CSS3", "JavaScript", "Chart.js"],
      githubUrl: "https://github.com/dipanshu-soni-shadowcodex2504",
      liveDemoUrl: "",
      highlights: [
        "Hardware-to-cloud telemetry transmitting live soil moisture, humidity, and temperature data.",
        "Integrated ESP32-CAM optical capture for periodic field imagery and surveillance.",
        "Interactive Chart.js web dashboard for historical sensor trends and crop analysis."
      ]
    },
    {
      id: "expense-categorizer",
      title: "Expense Categorizer & Financial Tracker",
      category: "Python / Data Management",
      period: "July 2025 - Nov 2025",
      tagline: "Command-line financial utility with automated categorization and persistent storage.",
      description: "A robust command-line expense management application built using Python with file-based persistence. Implemented automatic expense categorization, monthly expenditure breakdown summaries, and strict input validation for creating, inspecting, resetting, and filtering financial logs.",
      tags: ["Python", "File Handling", "CLI Architecture", "Data Validation", "Algorithms"],
      githubUrl: "https://github.com/dipanshu-soni-shadowcodex2504",
      liveDemoUrl: "",
      highlights: [
        "Automated category-wise aggregation and summary calculations for personal budgeting.",
        "Robust input validation and exception handling preventing corrupted records.",
        "File-handling layer enabling reliable persistence across sessions."
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 5. Verified Certifications with Uploaded Documents
  // --------------------------------------------------------------------------
  certifications: [
    {
      id: "cert-infosys",
      title: "Introduction to Cloud Computing",
      issuer: "Infosys Springboard",
      issueDate: "March 24, 2026",
      credentialId: "INFOSYS-SPRINGBOARD-2026",
      icon: "fas fa-cloud",
      image: "images/cert-infosys.png",
      verifyUrl: "https://verify.onwingspan.com",
      skills: ["Cloud Architecture", "Cloud Computing", "Virtualization", "Infosys Springboard"]
    },
    {
      id: "cert-times-cdp",
      title: "Community Development Project (CDP)",
      issuer: "Times Foundation &times; Lovely Professional University",
      issueDate: "2025",
      credentialId: "8d32a568-61b0-44ca-9428-7ba7411f8b44",
      icon: "fas fa-hands-helping",
      image: "images/cert-times-cdp.png",
      verifyUrl: "https://verification.givemycertificate.com/v/8d32a568-61b0-44ca-9428-7ba7411f8b44",
      skills: ["Social Responsibility", "Community Initiatives", "Leadership", "Teamwork"]
    },
    {
      id: "cert-python",
      title: "From Syntax to System: Elevate with Python",
      issuer: "TutorialsPoint Academy &times; LPU",
      issueDate: "September 12, 2025",
      credentialId: "TP-LYZTG2U5",
      icon: "fab fa-python",
      image: "images/cert-tutorialspoint.png",
      verifyUrl: "https://verify.tutorialspoint.com",
      skills: ["Python (7 Weeks)", "File Handling", "System Design", "Algorithms"]
    },
    {
      id: "cert-ai-saylor",
      title: "CS205: Building with Artificial Intelligence",
      issuer: "Saylor Academy",
      issueDate: "December 2025",
      credentialId: "SAYLOR-CS205-AI",
      icon: "fas fa-robot",
      image: "images/cert-saylor.jpg",
      verifyUrl: "#",
      skills: ["AI Fundamentals", "Machine Intelligence", "Problem Solving"]
    },
    {
      id: "cert-bootcamp",
      title: "Hands-on Bootcamp on Artificial Intelligence",
      issuer: "BlockseBlock / OpenAI",
      issueDate: "August 2025",
      credentialId: "BSB-OPENAI-AI-2025",
      icon: "fas fa-brain",
      image: "images/cert-blockseblock.jpg",
      verifyUrl: "#",
      skills: ["Generative AI", "Prompt Engineering", "OpenAI APIs"]
    }
  ],

  // --------------------------------------------------------------------------
  // 6. Education & Academic Background (Placed in the final section before contact)
  // --------------------------------------------------------------------------
  education: [
    {
      period: "Aug 2025 - Present",
      degree: "B.Tech in Computer Science & Engineering (Cloud Computing & Gen AI)",
      institution: "Lovely Professional University (LPU)",
      location: "Phagwara, Punjab",
      score: "CGPA: 9.41",
      description: "Specializing in Cloud Infrastructure and Generative AI applications with outstanding academic performance.",
      highlights: [
        "Maintaining a 9.41 CGPA across core engineering and foundational computer science coursework.",
        "Actively developing IoT hardware integration, Python architectures, and cloud solutions in lab sessions.",
        "Completed Cyber Security Workshop covering DoS/DDoS threat vectors and network resilience."
      ]
    },
    {
      period: "May 2024 - May 2025",
      degree: "Higher Secondary Education (Class XII)",
      institution: "City Sr. Sec. School",
      location: "Bawani Khera, Bhiwani, Haryana",
      score: "Percentage: 87%",
      description: "Completed higher secondary education in Science/Maths stream with 87% marks.",
      highlights: [
        "Secured 87% in Senior Secondary Board Examination.",
        "Strong foundation in Mathematics, Physics, and Computer Science."
      ]
    },
    {
      period: "May 2023",
      degree: "Secondary Education (Class X)",
      institution: "City Sr. Sec. School",
      location: "Bawani Khera, Bhiwani, Haryana",
      score: "Percentage: 85%",
      description: "Completed secondary school examinations with 85% aggregate marks.",
      highlights: [
        "Secured 85% in Secondary School Board Examinations."
      ]
    }
  ]
};

// Export for browser environment
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
