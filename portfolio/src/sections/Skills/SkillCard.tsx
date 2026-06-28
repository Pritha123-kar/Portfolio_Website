interface SkillCardProps {
  skill: string;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-center transition duration-300 hover:border-indigo-500 hover:-translate-y-1 hover:shadow-lg">
      <p className="font-medium text-white">{skill}</p>
    </div>
  );
};

export default SkillCard;