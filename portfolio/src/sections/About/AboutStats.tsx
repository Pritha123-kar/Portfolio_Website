import { portfolioData } from "../../data/portfolioData";

const AboutStats = () => {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4">
      {portfolioData.stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center"
        >
          <h3 className="text-3xl font-bold text-indigo-400">
            {item.number}
          </h3>

          <p className="mt-2 text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutStats;