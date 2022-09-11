function JobItem({job}) {
  return (
    <>
    <a href={job.additionalPlain} rel="noreferrer" target="_blank" className="block flex flex-col sm:flex-row items-center sm:hover:bg-neutral-gray7 rounded-xl py-4 sm:-mx-6 sm:px-6 cursor-pointer my-4">
      <div className="w-full flex-0">
        <h2 className="text-center sm:text-left font-bold text-xl sm:text-2xl text-neutral-gray2">{job.text}</h2>
      </div>
      <div className="flex flex-1 w-full mt-6 sm:mt-auto sm:w-auto sm:justify-end">
        <a className="w-1/2 sm:w-36 mr-4 bunches-button" rel="noreferrer" target="_blank" href={job.additionalPlain}>About</a>
        <a className="w-1/2 sm:w-36 mr-2 bunches-button" rel="noreferrer" target="_blank" href={job.hostedUrl}>Apply</a>
      </div>
    </a>
    <div className="block flex w-full bg-neutral-gray6 h-0.5"></div>
    </>
  );
}

export default JobItem;
