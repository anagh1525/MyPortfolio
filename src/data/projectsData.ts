export interface ProjectData {
  title: string;
  description: string;
  details?: string;
  image?: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
}

export const projectsData: ProjectData[] = [
  {
    title: "AI-Based Diagnosis of Ebola Disease",
    description:
      "An AI-driven diagnostic framework using multi-modal data for early Ebola detection.",
    details:
      "Developed a transparent model to assist healthcare professionals with decision support and risk assessment, leveraging NLP, CNNs, and traditional ML techniques.",
    image: "https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg",
    technologies: ["NLP", "CNN", "Machine Learning", "Python"],
  },
  {
    title: "Sign Language Detection",
    description:
      "A prototype that translates sign language into English text for improved accessibility.",
    details:
      "Built using OpenCV, TensorFlow, Keras, and CVZone for hand tracking, combined with data labeled using Label Studio. The model facilitates real-time translation and accessibility for the hearing-impaired.",
    image:
      "https://images.pexels.com/photos/10029284/pexels-photo-10029284.jpeg",
    technologies: ["OpenCV", "TensorFlow", "Keras", "CVZone", "Label Studio"],
    codeLink: "https://github.com/anagh1525/Sign-Language-Detection",
  },
  {
    title: "Advance Defense System (ADS)",
    description:
      "A predictive analysis model supporting tactical military planning.",
    details:
      "Utilizes data from both allied and adversary forces to forecast outcomes. Built with Python (pandas, scikit-learn, seaborn) and deployed using Flask for interactive visualization and decision-making.",
    image: "https://images.pexels.com/photos/20258/pexels-photo.jpg",
    technologies: ["Python", "Flask", "scikit-learn", "pandas", "seaborn"],
    codeLink: "https://github.com/anagh1525/Advance-Defense-System",
  },
  {
    title: "Insta-Lite",
    description:
      "An Instagram clone focused on core features and user interface.",
    details:
      "Developed using React.js, Chakra UI, and Firebase with support for authentication, post uploads, likes, and responsive layout. Hosted on Vercel for quick demo access.",
    image:
      "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
    technologies: [
      "React.js",
      "React Hooks",
      "Chakra UI",
      "Firebase",
      "Vercel",
    ],
    demoLink: "https://myinsta-mu.vercel.app/",
  },
];
