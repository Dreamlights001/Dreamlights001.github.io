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
      details: "Recommended for admission (exempt from exam). Research: AI4S, VLM, VLA, Industrial Agent."
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
    { category: "AI & CV", items: ["PyTorch", "TensorFlow", "Transformers", "CLIP", "SAM", "VLM", "VLA", "Large Vision Models"] },
    { category: "Development", items: ["Python", "C/C++", "MATLAB", "Data Structures", "Git"] },
    { category: "Industrial", items: ["CAD", "CATIA", "SolidWorks", "PLC", "LabVIEW"] },
    { category: "Simulation", items: ["Comsol", "Mujoco", "Simulink"] }
  ],
  research: [
    {
      title: "RoboParty Lab · INTACT2Real & RoboHome Benchmark Generation",
      role: "VLA Algorithm Intern · WAM Group (2026.7 - Present)",
      desc: "Participated in the INTACT project, building INTACT2Real (a JEPA-WAM Sim2Real system for dual-arm manipulation on RoboTwin 2.0 and PiPER) and INTACT Real2Sim data collection. Responsible for RoboParty's self-developed benchmark generation project using agents for automated high-fidelity robot training environment generation and verification; co-led RoboHome, a whole-home simulation scene and motion/trajectory generation framework for humanoid long-horizon loco-manipulation (CVPR 2027 submission, Co-first Author, 2nd)."
    },
    {
      title: "Institute of Automation, Chinese Academy of Sciences · PiStar",
      role: "Intern (2026.1 - 2026.6)",
      desc: "Internship work centered on PiStar, a closed-loop robot learning framework. Built a LIBERO workflow spanning demonstration-data conversion to the LeRobot format, policy training and rollout collection, VLM-based value modeling and advantage labeling, and iterative policy fine-tuning."
    },
    {
      title: "Zero-Shot Industrial Defect Detection",
      role: "Lead Researcher",
      desc: "Led development of a general defect detection model fusing visual and text features. Improved AnoVL framework with residual adapters. One patent pending."
    }
  ],
  awards: [
    "2026 Yizhi Cup Embodied AI Developer Challenge (Preliminary Simulation Round) - 1st Place, Industrial Manufacturing Track (Team Member, during CASIA Internship)",
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
