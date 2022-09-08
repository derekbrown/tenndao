import { FaMoneyBillWave, FaBriefcase, FaBookMedical, FaDesktop, FaGuitar, FaGlassCheers, FaPlaneDeparture, FaEthereum } from 'react-icons/fa';

function Benefits() {
  return (
    <div className="w-full items-center my-16">
      <h2 className="font-bold text-3xl mb-4 w-1/2 text-gray-800">Perks & Benefits</h2>
      <ul className="grid grid-cols-2 text-xl">
        <li className="my-2 with-icon"><FaMoneyBillWave className="mr-2"/>Competitive salary and equity</li>
        <li className="my-2 with-icon"><FaBookMedical className="mr-2"/>Health, dental, vision insurance</li>
        <li className="my-2 with-icon"><FaBriefcase className="mr-2"/>Hybrid-friendly</li>
        <li className="my-2 with-icon"><FaGuitar className="mr-2"/>Moving stipend to Nashville</li>
        <li className="my-2 with-icon"><FaDesktop className="mr-2"/>Office setup stipend</li>
        <li className="my-2 with-icon"><FaGlassCheers className="mr-2"/>Regular team outings</li>
        <li className="my-2 with-icon"><FaPlaneDeparture className="mr-2"/>Quarterly offsites</li>
        <li className="my-2 with-icon"><FaEthereum className="mr-2"/>Available paid-in-crypto option</li>
      </ul>
    </div>
  );
}

export default Benefits;
