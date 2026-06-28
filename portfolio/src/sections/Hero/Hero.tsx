import Container from "../../components/ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950"
    >
      <Container>

        <div className="flex flex-col-reverse items-center gap-16 md:flex-row">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>
    </section>
  );
};

export default Hero;