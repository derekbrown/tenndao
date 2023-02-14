import { EVENT_IMAGE_URL } from "../Constants";
import BlockParty from "./BlockParty";
import Community from "./Community";
import EmailForm from "./EmailForm";
import Mission from "./Mission";

function About() {
  return (
    <div className="flex flex-col w-full">
      <Mission/>
      {false && <EmailForm/>}
      <div className="flex w-full items-start mt-4">
        <div className="w-full sm:w-2/3">
          <BlockParty/>
          <Community/>
        </div>
        <div className="hidden sm:block flex flex-col items-start w-96 h-96 ml-12 mt-4">
          <img src={EVENT_IMAGE_URL} alt="Bunches" className="rounded-xl shadow-xl"/>
        </div>
      </div>
    </div>
  );
}

export default About;
