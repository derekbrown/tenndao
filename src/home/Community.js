import { FaUserFriends } from 'react-icons/fa';

function Community() {
  return (
    <div className="text-neutral-gray2 mt-16 mb-8">
      <div className="flex flex-row items-center mt-4">
        <h3 className="text-md uppercase font-semibold flex-shrink-0 font-cartridge">Community</h3>
        <div className="separator"/>
      </div>
      <div className="text-lg mt-4 text-neutral-gray3" style={{lineHeight: "2.5rem"}}>We've partnered with <a href="https://www.bunches.app" rel="noreferrer" target="_blank" className="link hover:bg-primary-pink hover:text-white hover:border-primary-pink">Bunches</a> to host our community, where we discuss the latest in the space and how it impacts our state.</div>
      <a className="w-full sm:w-48 tenndao-button with-icon mt-4 -ml-1" rel="noreferrer" target="_blank" href="https://testflight.apple.com/join/LODArZyu"><FaUserFriends className="mr-4"/>Join TennDAO</a>
    </div>
  );
}

export default Community;
