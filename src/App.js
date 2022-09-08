import React, { useEffect, useState } from "react";
import axios from "axios";
import About from "./About";
import Benefits from "./Benefits";
import Header from "./Header";
import Jobs from "./Jobs";
import Footer from "./Footer";

function App() {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    axios("https://api.lever.co/v0/postings/bunches")
    .then((res) => setJobs(res.data))
    .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col h-screen w-full items-center">
      <Header/>
      <div className="flex flex-col w-7/12 pb-24">
        <About/>
        <Benefits/>
        {jobs && <Jobs jobs={jobs}/>}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
