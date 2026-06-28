import profileImage from "../../assets/images/profile.png";

const HeroImage = () => {
  return (
    <div className="flex flex-1 justify-center">
      <div className="h-80 w-80 overflow-hidden rounded-full border-4 border-indigo-500 shadow-[0_0_60px_rgba(99,102,241,0.5)]">
        <img
          src={profileImage}
          alt="Pritha Kar"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroImage;