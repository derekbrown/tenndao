import { BLOCK_PARTY_TITLE } from "../Constants";

function Header() {
  return (
    <div className="flex flex-col w-full justify-center items-center my-8">
      <a href="/" className="font-cartridge text-base py-1 hover:link group"><span className="font-sans-serif text-primary-violet hover:text-white group-hover:text-white">tenndao</span> presents</a>
      <img src={BLOCK_PARTY_TITLE} alt="Bunches Logo" className="h-48 mt-4"/>
    </div>
  );
}

export default Header;
