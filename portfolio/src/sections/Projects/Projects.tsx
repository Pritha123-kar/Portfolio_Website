import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24"
    >
      <Container>

        <SectionTitle
          title="Featured Projects"
          subtitle="Some of the projects I've built using modern technologies."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Projects;