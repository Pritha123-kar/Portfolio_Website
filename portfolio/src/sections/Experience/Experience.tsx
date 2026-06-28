import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Timeline from "./Timeline";
import { experience } from "./ExperienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24"
    >
      <Container>

        <SectionTitle
          title="Experience & Journey"
          subtitle="My learning path and development milestones."
        />

        <div className="mx-auto mt-14 max-w-3xl">

          {experience.map((item) => (
            <Timeline
              key={item.title}
              item={item}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Experience;