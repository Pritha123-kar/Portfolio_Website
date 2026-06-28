interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500">

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-600 px-5 py-2 text-white transition hover:bg-slate-800"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;