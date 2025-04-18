export interface CertificateData {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  image?: string;
  url: string;
}

export const certificatesData: CertificateData[] = [
  {
    title: "Introduction to Computer Vision and Image Processing",
    issuer: "IBM",
    date: "March 2025",
    image:
      "https://images.pexels.com/photos/17483849/pexels-photo-17483849/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-ai-chip-design-and-computer-vision-it-was-created-by-champ-panupong-techawongthawon-as-part-of-the-vis.png",
    url: "https://coursera.org/share/8ed71ff683c7e42d4b5eb9a45e9d4a1f",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "February 2025",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    url: "https://coursera.org/share/a00bc379633e5efad5094d85e3cb71c2",
  },

  {
    title: "Generative AI for Everyone",
    issuer: "DeepLearning.AI",
    date: "December 2024",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    url: "",
  },

  {
    title: "Convolutional Neural Networks",
    issuer: "DeepLearning.AI",
    date: "January 2025",
    image:
      "https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png",
    url: "",
  },
  {
    title: "Natural Language Processing in TensorFlow",
    issuer: "DeepLearning.AI",
    date: "Febraury 2025",
    image:
      "https://images.pexels.com/photos/18069697/pexels-photo-18069697/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-illustration-depicts-language-models-which-generate-text-it-was-created-by-wes-cockx-as-part-of-the-visualising-ai-project-l.png",
    url: "",
  },

  {
    title: "Programming Foundations with Python",
    issuer: "CCBP Nxtwave",
    date: "April 2023",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    url: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=PPVBHLVXBG",
  },
  {
    title: "Google Cloud Certified Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "November 2023",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
    url: "https://drive.google.com/file/d/1Xx4ZrnMOz5Md-PX7U8YOx03yiB5RCfmD/view?usp=sharing",
  },
  {
    title: "React Js",
    issuer: "CCBP Nxtwave",
    date: "November 2023",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    url: "https://certificates.ccbp.in/academy/react-js?id=KVKABMRDRL",
  },
];
