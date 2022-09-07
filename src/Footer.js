import logo from "./assets/images/logo.png";

function Footer({job}) {
  return (
    <div className="flex flex-col w-full justify-center items-center pb-8">
      <img src={logo} alt="Bunches Logo" className="h-16 w-16 animate-spin-slow"/>
    </div>
  );
}

export default Footer;
