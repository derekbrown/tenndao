import { FaPizzaSlice } from 'react-icons/fa';

function BlockParty() {
  return (
    <div className="text-neutral-gray2 my-4">
      <div className="flex flex-row items-center mt-4">
        <h3 className="text-md uppercase font-semibold flex-shrink-0 font-cartridge">Block Party</h3>
        <div className="separator"/>
      </div>
      <div className="text-lg mt-4 text-neutral-gray3" style={{lineHeight: "2.5rem"}}>We've partnered with <a href="https://www.vanderbilt.edu/thewondry/" rel="noreferrer" target="_blank" className="link hover:bg-primary-gold hover:text-white hover:border-primary-gold">Vanderbilt's the Wond'ry</a> for Block Party, a monthly deep-dive into web3 and how it impacts a variety of sectors in our culture and economy.</div>
      <a className="w-full sm:w-48 tenndao-button with-icon mt-4 -ml-1" href="/blockparty"><FaPizzaSlice className="mr-2 sm:mr-4"/>Learn More</a>
    </div>
  );
}

export default BlockParty;
