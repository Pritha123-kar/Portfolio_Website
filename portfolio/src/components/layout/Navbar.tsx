import Container from "../ui/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <Container>
        <nav className="flex items-center justify-between h-20">

          <Logo />

          <NavLinks />

          <div className="hidden md:block">
            <a
  href="/resume/Pritha_Kar_CSE_2027.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button>Resume</Button>
</a>
          </div>

          <MobileMenu />

        </nav>
      </Container>
    </header>
  );
};

export default Navbar;