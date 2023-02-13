import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function BlockParty() {
  return (
    <div className="bg-party flex flex-col min-h-screen h-full w-full items-center text-neutral-gray1 bg-primary-beige">
      <Header/>
      <div className="flex flex-col w-10/12 sm:w-7/12 flex-1 pb-24">
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default BlockParty;