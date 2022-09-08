import logo from "./assets/images/logo.png";
import JobItem from "./JobItem";

function Jobs({jobs}) {
  return (
    <div className="mt-8">
      <h2 className="font-bold text-3xl mb-8 w-1/2 text-gray-800">Open Positions</h2>
      {jobs && jobs.map((item, idx) => <JobItem key={idx} job={item}/>)}
    </div>
  );
}

export default Jobs;
