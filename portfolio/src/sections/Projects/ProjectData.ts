import voiceRecognitionImg from "../../assets/images/voiceRecognition.png";
import eventManagementImg from "../../assets/images/eventManagement.png";
import miniMediaImg from "../../assets/images/miniMedia.png";
import agriGuruImg from "../../assets/images/agriGuru.png";



export const projects = [
  {
    title: "AI Voice Recognition System",
    description:
      "An AI-powered speaker recognition system that identifies registered speakers using Wav2Vec2 embeddings. The system can distinguish known and unknown speakers using deep learning techniques.",
    image: voiceRecognitionImg,
    technologies: [
      "Python",
      "PyTorch",
      "Wav2Vec2",
      "Machine Learning",
      "Flask",
    ],
    github: "",
    live: "",
  },

  {
    title: "Event Management System",
    description:
      "A full-stack event management platform where users can discover events, register online, and organizers can create, update, and manage events through an admin dashboard.",
    image: eventManagementImg,
    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
      "REST API",
      "Tailwind CSS",
    ],
    github: "",
    live: "",
  },

  {
    title: "Mini Social Media Platform",
    description:
      "A full-stack social media application where users can register, log in securely, create posts, like and comment on posts, edit their profiles, and interact with other users.",
    image: miniMediaImg,
    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
      "JWT Authentication",
      "REST API",
    ],
    github: "https://github.com/Pritha123-kar/CodeAlpha_MiniSocialMedia.git",
    live: "",
  },

  {
    title: "AgriGuru",
    description:
      "An AI-powered agriculture platform that provides crop market prices, multilingual support, and pest detection using image processing to help farmers make informed decisions.",
    image: agriGuruImg,
    technologies: [
      "React",
      "Spring Boot",
      "Python",
      "AI",
      "MySQL",
    ],
    github: "https://github.com/Pritha123-kar/Agriguru.git",
    live: "",
  },
];