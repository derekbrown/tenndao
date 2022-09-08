import JobItem from "./JobItem";

function Jobs({jobs}) {
  return (
    <div className="mt-8">
      <h2 className="text-center sm:text-left font-bold text-3xl mb-8 text-gray-800">Open Positions</h2>
      {jobs && jobs.map((item, idx) => <JobItem key={idx} job={item}/>)}
    </div>
  );
}

export default Jobs;
