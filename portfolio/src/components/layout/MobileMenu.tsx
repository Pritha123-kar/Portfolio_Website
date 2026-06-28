import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <button className="md:hidden">
      <Menu size={28} />
    </button>
  );
};

export default MobileMenu;