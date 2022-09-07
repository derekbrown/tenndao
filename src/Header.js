import logo from "./assets/images/logo.png";

function Header({job}) {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-8">
      <img src={logo} alt="Bunches Logo" className="h-24 w-24"/>
      <h2 className="text-6xl font-bold mb-8">Careers</h2>
    </div>
  );
}

export default Header;
