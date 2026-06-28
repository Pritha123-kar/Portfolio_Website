import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import AboutImage from "./AboutImage";
import AboutStats from "./AboutStats";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section id="about" className="bg-slate-950 py-24">
      <Container>
        {/* Heading */}
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
        />

        {/* Image + Stats */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <AboutImage />
          <AboutStats />
        </div>

        {/* Paragraph */}
        <div className="mt-14">
          <AboutContent />
        </div>
      </Container>
    </section>
  );
};

export default About;