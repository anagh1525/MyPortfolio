export interface Skill {
  name: string;
  level?: number; // 0-100
  image?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    skills: [
      {
        name: "Machine Learning",
        level: 90,
        image:
          "https://img.icons8.com/external-becris-lineal-becris/64/000000/external-machine-learning-data-science-becris-lineal-becris.png",
      },
      {
        name: "Deep Learning",
        level: 85,
        image: "https://www.svgrepo.com/show/450794/deep-learning.svg",
      },
      {
        name: "Computer Vision",
        level: 85,
        image:
          "https://img.icons8.com/ios/50/000000/artificial-intelligence.png",
      },
      {
        name: "Natural Language Processing",
        level: 85,
        image:
          "data:image/png;base64,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",
      },
      {
        name: "TensorFlow",
        level: 85,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Scikit-Learn",
        level: 90,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        name: "OpenCV",
        level: 85,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg",
      },
      {
        name: "Generative AI & LLMs",
        level: 80,
        image: "https://img.icons8.com/color/48/000000/robot.png",
      },
    ],
  },
  {
    category: "Programming & Development",
    skills: [
      {
        name: "Python",
        level: 95,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        level: 85,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML/CSS",
        level: 90,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        name: "React.js",
        level: 85,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      },
      {
        name: "Node.js",
        level: 80,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Flask",
        level: 85,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
      },
      {
        name: "SQL",
        level: 80,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "NoSQL",
        level: 75,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      {
        name: "MongoDB",
        level: 80,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "MySQL",
        level: 85,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Firebase",
        level: 80,
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
      },
      {
        name: "VS Code",
        level: 90,
        image:
          "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png",
      },
      {
        name: "Google Colab",
        level: 90,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
      },
      {
        name: "GitHub",
        level: 85,
        image: "https://img.icons8.com/material-outlined/48/000000/github.png",
      },
      {
        name: "Figma",
        level: 80,
        image: "https://img.icons8.com/color/48/000000/figma--v1.png",
      },
      {
        name: "Canva",
        level: 85,
        image: "https://img.icons8.com/color/48/000000/canva.png",
      },
    ],
  },
  {
    category: "Data Analysis",
    skills: [
      {
        name: "Data Preprocessing",
        level: 90,
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Feature Engineering",
        level: 85,
        image: "https://img.icons8.com/ios-filled/50/settings--v1.png",
      },
      {
        name: "Data Visualization",
        level: 85,
        image: "https://img.icons8.com/fluency/48/combo-chart--v1.png",
      },
      {
        name: "Statistical Analysis",
        level: 80,
        image: "src//public//statistical-analysis.png",
      },
      {
        name: "Pandas",
        level: 90,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg",
      },
      {
        name: "NumPy",
        level: 90,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
      },
      {
        name: "Matplotlib",
        level: 85,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
      },
      {
        name: "Seaborn",
        level: 85,
        image: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg",
      },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      {
        name: "Leadership",
        level: 90,
        image: "https://img.icons8.com/color/48/000000/leadership.png",
      },
      {
        name: "Teamwork",
        level: 95,
        image: "https://img.icons8.com/color/48/000000/teamwork.png",
      },
      {
        name: "Time Management",
        level: 90,
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Event Management",
        level: 85,
        image: "https://img.icons8.com/fluency/48/event-accepted.png",
      },
      {
        name: "Problem Solving",
        level: 90,
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Communication",
        level: 90,
        image: "https://img.icons8.com/color/48/000000/communication.png",
      },
      {
        name: "Project Management",
        level: 85,
        image: "https://img.icons8.com/color/48/000000/project-management.png",
      },
      {
        name: "Adaptability",
        level: 90,
        image:
          "data:image/png;base64,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",
      },
    ],
  },
];
