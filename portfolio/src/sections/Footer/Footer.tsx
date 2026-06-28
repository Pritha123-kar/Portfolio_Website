import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4">

        <h2 className="text-2xl font-bold text-white">
          Pritha Kar
        </h2>

        <p className="text-slate-400">
          Full Stack Developer • AI Enthusiast
        </p>

        <div className="flex gap-6">

          <a
            href="https://github.com/Pritha123-kar"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-indigo-400"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/pritha-kar-49973132b/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-indigo-400"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="text-slate-400 transition hover:text-indigo-400"
          >
            <FaEnvelope size={24} />
          </a>

        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Pritha Kar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;