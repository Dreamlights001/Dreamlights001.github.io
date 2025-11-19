export const resumeData = {
  personal_info: {
    name: "Wang Yuchen",
    title: "AI & Computer Vision Engineer",
    contact: "16627863893 | 16627863893@163.com",
    location: "Jilin University, Changchun, China",
    bio: "Male, 21. Passionate about Mathematics, CS, and Intelligent Manufacturing. Strong interdisciplinary thinking with expertise in Industrial Design, AI, and Computer Vision. Energetic, resilient, and innovation-driven.",
    stats: "GPA: 86.0 | Rank: 9/30 | CET6: 480"
  },
  education: [
    {
      degree: "Master in Mechanical Engineering (Design Engineering)",
      institution: "Zhejiang University",
      dates: "Sept 2026 - June 2029",
      details: "Recommended for admission (exempt from exam). Research: AI4S, VLM, Industrial Agent."
    },
    {
      degree: "B.S. in Intelligent Manufacturing Engineering",
      institution: "Jilin University",
      dates: "Aug 2023 - Present",
      details: "School of Mechanical & Aerospace Engineering. Main Major."
    },
    {
      degree: "Minor in Computer Science and Technology",
      institution: "Jilin University",
      dates: "Aug 2023 - Present",
      details: "School of Computer Science and Technology."
    }
  ],
  skills: [
    { category: "AI & CV", items: ["PyTorch", "TensorFlow", "Transformers", "CLIP", "SAM", "Large Vision Models"] },
    { category: "Development", items: ["Python", "C/C++", "MATLAB", "Data Structures", "Git"] },
    { category: "Industrial", items: ["CAD", "CATIA", "SolidWorks", "PLC", "LabVIEW"] },
    { category: "Simulation", items: ["Comsol", "Mujoco", "Simulink"] }
  ],
  research: [
    {
      title: "Zero-Shot Industrial Defect Detection",
      role: "Lead Researcher",
      desc: "Led development of a general defect detection model fusing visual and text features. Improved AnoVL framework with residual adapters. One patent pending."
    },
    {
      title: "Intelligent Cross-Project Vulnerability Detection",
      role: "Core Member",
      desc: "Constructed semantic network graphs (CPG) and used GNNs for vulnerability detection. Focused on model transferability and commercial evaluation."
    }
  ],
  awards: [
    "2025 American Math Modeling Contest - H Prize",
    "2024 China Math Modeling Contest - Provincial First Prize",
    "2025 College Computer Design Competition - Provincial First Prize",
    "9th China Data News Competition - National First Prize",
    "25th China National College Math Competition - Provincial First Prize"
  ],
  competitions: [
    {
      name: "Math Modeling (MCM/ICM)",
      role: "Team Leader & Modeler",
      desc: "Led team in multiple national and international contests."
    },
    {
      name: "Data News & Market Analysis",
      role: "Data Engineer",
      desc: "Responsible for crawling, NLP, and visualization."
    }
  ]
};


export const faceMapping = [
  { id: "skills", title: "SKILLS", color: "#00ff88" },       // Right
  { id: "research", title: "RESEARCH", color: "#00ccff" },   // Left
  { id: "awards", title: "AWARDS", color: "#ff0088" },       // Top
  { id: "competitions", title: "COMPETITIONS", color: "#ffaa00" }, // Bottom
  { id: "personal", title: "PROFILE", color: "#ffffff" },    // Front
  { id: "education", title: "EDUCATION", color: "#8800ff" }  // Back
];
