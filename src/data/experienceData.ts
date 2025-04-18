export interface ExperienceData {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights?: string[];
}

export const experienceData: ExperienceData[] = [
  {
    company: "ISSA DRDO",
    role: "Machine Learning Intern",
    startDate: "May 2024",
    endDate: "July 2024",
    description:
      "Engineered and deployed machine learning models while gaining hands-on experience with large language models through real-world projects.",
    highlights: [
      "Engineered and deployed ML models using Python (pandas, NumPy, scikit-learn) for comparative analysis of k-NN, Linear",
      "Developed a Flask-based web interface for seamless deployment and enhanced user interaction",
      "Gained hands-on experience with large language models (LLMs) through real-world projects",
    ],
  },
  {
    company: "MES",
    role: "Systems Engineering Intern",
    startDate: "Aug 2023",
    endDate: "Dec 2023",
    description:
      "Collaborated on hardware systems analysis and cybersecurity implementations while supporting technical troubleshooting in a team environment.",
    highlights: [
      "Collaborated on analyzing hardware systems (servers, firewalls, storage devices) to ensure optimal performance and robust security",
      "Gained practical insights into cybercell operations and implemented secure intranet communication protocols",
      "Supported technical troubleshooting and contributed to effective team-based problem-solving",
    ],
  },
];
