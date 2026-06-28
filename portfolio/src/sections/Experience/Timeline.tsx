interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  item: TimelineItem;
}

const Timeline = ({ item }: TimelineProps) => {
  return (
    <div className="relative border-l-2 border-indigo-500 pl-8 pb-10">

      <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-indigo-500"></div>

      <span className="text-indigo-400 font-semibold">
        {item.year}
      </span>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {item.title}
      </h3>

      <p className="mt-2 text-slate-400">
        {item.description}
      </p>

    </div>
  );
};

export default Timeline;