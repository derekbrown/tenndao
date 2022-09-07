import React, { useEffect, useState } from "react";
import axios from "axios";
import About from "./About";
import Benefits from "./Benefits";
import Header from "./Header";
import JobItem from "./JobItem";
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
      <div className="flex flex-col w-1/2 pb-24">
        <About/>
        <Benefits/>
        <div className="my-12">
          <h2 className="font-bold text-3xl mb-8 w-1/2 text-gray-800">Open Positions</h2>
          {jobs && jobs.map((item, idx) => <JobItem key={idx} job={item}/>)}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
