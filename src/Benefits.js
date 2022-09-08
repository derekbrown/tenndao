import { FaMoneyBillWave, FaBriefcase, FaBookMedical, FaDesktop, FaGuitar, FaGlassCheers, FaPlaneDeparture, FaEthereum } from 'react-icons/fa';

function Benefits() {
  return (
    <div className="w-full items-center my-16">
      <h2 className="text-center sm:text-left font-bold text-3xl mb-8 text-gray-800">Perks & Benefits</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-lg sm:text-xl">
        <li className="with-icon"><FaMoneyBillWave className="mr-2"/>Competitive salary and equity</li>
        <li className="with-icon"><FaBookMedical className="mr-2"/>Health, dental, vision insurance</li>
        <li className="with-icon"><FaBriefcase className="mr-2"/>Hybrid-friendly</li>
        <li className="with-icon"><FaGuitar className="mr-2"/>Moving stipend to Nashville</li>
        <li className="with-icon"><FaDesktop className="mr-2"/>Office setup stipend</li>
        <li className="with-icon"><FaGlassCheers className="mr-2"/>Regular team outings</li>
        <li className="with-icon"><FaPlaneDeparture className="mr-2"/>Quarterly offsites</li>
        <li className="with-icon"><FaEthereum className="mr-2"/>Available paid-in-crypto option</li>
      </ul>
    </div>
  );
}

export default Benefits;
