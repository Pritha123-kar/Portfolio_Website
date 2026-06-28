import { TypeAnimation } from "react-type-animation";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";

const HeroContent = () => {
  return (
    <div className="flex-1">

      <p className="text-indigo-400 text-lg font-medium">
        👋 Hello, I'm
      </p>

      <h1 className="mt-4 text-5xl md:text-7xl font-bold">
        Pritha Kar
      </h1>

      <div className="mt-4 text-2xl md:text-4xl font-semibold text-slate-300">

        <TypeAnimation
          sequence={[
            "Computer Science Engineer",
            1500,
            "Full Stack Developer",
            1500,
            "React Developer",
            1500,
            "Spring Boot Developer",
            1500,
            "AI Enthusiast",
            1500,
          ]}
          wrapper="span"
          repeat={Infinity}
        />

      </div>

      <p className="mt-6 max-w-xl text-slate-400 leading-8">
        Passionate Computer Science student building
        modern web applications, AI-powered solutions,
        and scalable full-stack products.
      </p>

      <HeroButtons />

      <HeroSocial />

    </div>
  );
};

export default HeroContent;