import { HERO_IMAGE_URL, PHONE_IMAGE_URL } from "./Constants";
import { FaGrinHearts, FaMobileAlt } from 'react-icons/fa';

function About() {
  return (
    <div className="flex flex-col w-full">
      <div className="hidden sm:flex h-80 overflow-hidden rounded-xl items-center justify-center flex">
        <img src={HERO_IMAGE_URL} alt="Bunches" className=""/>
      </div>
      <div className="flex w-full items-center mt-12">
        <div className="w-full sm:w-2/3">
          <div className="text-3xl sm:text-4xl text-neutral-gray2 mb-8">
            <span className="font-bold text-neutral-gray1">Join us </span>
            in increasing freedom and ownership for the world's creators!
            <div className="text-lg mt-4 text-neutral-gray3">Bunches is building a super app that weaves together chat, content, commerce, and community: built for creators, designed for consumers, and enabled by web3.</div>
            <div className="text-lg mt-4 text-neutral-gray3">The 1<sup>st</sup> million web3 users came in through the financial back doors of DeFi, speculation, and crypto's promise of self-banking.</div>
            <div className="text-lg mt-4 text-neutral-gray3">The next <em>hundred</em> million web3 users will enter through the non-financial front doors of tokenized community and data ownership...but we have to make it fun.</div>
            <div className="text-lg mt-4 text-neutral-gray3">If you believe in delivering web3's promises of <span className="font-semibold text-neutral-gray2">ownership</span> and <span className="font-semibold text-neutral-gray2">freedom</span> to the world's creators, we’d love to chat!</div>
          </div>
          <div className="flex flex-row items-center w-full sm:w-auto">
            <a className="w-1/2 sm:w-40 bunches-button with-icon mr-4" rel="noreferrer" target="_blank" href="https://www.notion.so/bunches/Who-We-Are-3658aaee30f5474e9c49c9df0d2f2e70"><FaGrinHearts className="mr-2 sm:mr-4"/>About Us</a>
            <a className="w-1/2 sm:w-40 bunches-button with-icon" rel="noreferrer" target="_blank" href="https://testflight.apple.com/join/LODArZyu"><FaMobileAlt className="mr-4"/>TestFlight</a>
          </div>
        </div>
        <div className="hidden sm:block flex flex-col w-1/3 ml-12">
          <img src={PHONE_IMAGE_URL} alt="Bunches" className="rounded"/>
        </div>
      </div>
    </div>
  );
}

export default About;
