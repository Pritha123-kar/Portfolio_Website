import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { portfolioData } from "../../data/portfolioData";
import SkillCategory from "./SkillCategory";

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 py-24">
      <Container>
        <SectionTitle
          title="My Skills"
          subtitle="Technologies I use to build modern web applications."
        />

        <div className="space-y-12">
          {portfolioData.skills.map((category) => (
            <SkillCategory
              key={category.category}
              title={category.category}
              skills={category.items}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;