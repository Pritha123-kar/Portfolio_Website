import profileImage from "../../assets/images/profile.png";

const AboutImage = () => {
  return (
    <div className="flex justify-center">
      <img
        src={profileImage}
        alt="Pritha Kar"
        className="h-96 w-80 rounded-3xl object-cover"
      />
    </div>
  );
};

export default AboutImage;