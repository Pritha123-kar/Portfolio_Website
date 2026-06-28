import SkillCard from "./SkillCard";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-indigo-400">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;