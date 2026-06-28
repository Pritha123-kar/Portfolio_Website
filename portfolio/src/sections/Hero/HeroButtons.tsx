import Button from "../../components/ui/Button";

const HeroButtons = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a href="/resume/Pritha_Kar_CSE_2027.pdf" download>
  <Button>Download Resume</Button>
</a>

      {/* <Button variant="secondary">
        View Projects
      </Button> */}
      <Button
  variant="secondary"
  onClick={() => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  View Projects
</Button>
    </div>
  );
};

export default HeroButtons;