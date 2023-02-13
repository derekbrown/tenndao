import About from "./About";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen h-full w-full items-center text-neutral-gray1 bg-primary-beige">
      <Header/>
      <div className="flex flex-col w-10/12 sm:w-7/12 pb-24 flex-1">
        <About/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;