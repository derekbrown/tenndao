import { LOGO_IMAGE_URL } from "../Constants";

function Header() {
  return (
    <div className="flex flex-col w-full justify-center items-center my-8">
      <img src={LOGO_IMAGE_URL} alt="Bunches Logo" className="h-24 w-24"/>
    </div>
  );
}

export default Header;
