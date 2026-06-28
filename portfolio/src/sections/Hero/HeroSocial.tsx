import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const HeroSocial = () => {
  return (
    <div className="mt-8 flex items-center gap-6">

      <a
        href="https://github.com/Pritha123-kar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          size={24}
          className="cursor-pointer transition hover:scale-110 hover:text-indigo-400"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/pritha-kar-49973132b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={24}
          className="cursor-pointer transition hover:scale-110 hover:text-indigo-400"
        />
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=prithakar2004@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope
          size={24}
          className="cursor-pointer transition hover:scale-110 hover:text-indigo-400"
        />
      </a>

    </div>
  );
};

export default HeroSocial;