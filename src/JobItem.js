function JobItem({job}) {
  return (
    <>
    <div className="block flex items-center hover:bg-gray-100 rounded-xl py-4 -ml-6 pl-6 pr-6 -mr-6 cursor-pointer my-4">
      <div className="flex-0">
        <h2 className="font-bold text-2xl text-gray-700 flex-1">{job.text}</h2>
        <span className="-mt-1 mr-1 text-xs text-gray-800 rounded-md">{job.categories.team}</span>
      </div>
      <div className="flex flex-1 justify-end">
        <a className="mr-4 bunches-button" href={job.additionalPlain}>Job Description</a>
        <a className="mr-2 bunches-button" href={job.hostedUrl}>Apply</a>
      </div>
    </div>
    <div className="block flex w-full bg-gray-800 h-0.5"></div>
    </>
  );
}

export default JobItem;
