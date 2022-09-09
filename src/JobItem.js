function JobItem({job}) {
  return (
    <>
    <div className="flex flex-col sm:flex-row items-center sm:hover:bg-neutral-gray7 rounded-xl py-4 -ml-6 pl-6 pr-6 -mr-6 cursor-pointer my-4">
      <div className="flex-0">
        <h2 className="font-bold text-xl sm:text-2xl text-neutral-gray2 flex-1">{job.text}</h2>
        <span className="hidden sm:block -mt-1 mr-1 text-sm text-neutral-gray3 rounded-md">{job.categories.team}</span>
      </div>
      <div className="flex flex-1 w-full mt-6 sm:mt-auto sm:w-auto sm:justify-end">
        <a className="w-1/2 sm:w-36 mr-4 bunches-button" rel="noreferrer" target="_blank" href={job.additionalPlain}>About</a>
        <a className="w-1/2 sm:w-36 mr-2 bunches-button" rel="noreferrer" target="_blank" href={job.hostedUrl}>Apply</a>
      </div>
    </div>
    <div className="block flex w-full bg-neutral-gray6 h-0.5"></div>
    </>
  );
}

export default JobItem;
