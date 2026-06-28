import { NAV_LINKS } from "../../constants/navigation";

const NavLinks = () => {
  return (
    <ul className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={`#${link.href}`}
            className="text-slate-300 transition hover:text-indigo-400"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;