import Speaker from "./Speaker";

function Event({date, dateText, topic, desc, eventUrl, imageUrl, speakers}) {
  return (
    <a href={eventUrl} target="_blank" rel="noreferrer" className="block flex flex-row my-8 items-start">
      <div className="flex-shrink-0 font-cartridge text-2xl rounded-full bg-primary-violet text-white h-16 w-16 text-center flex flex-col items-center justify-center font-semibold">
        {date}
      </div>
      <div className="flex flex-col ml-4 mt-1 w-full">
        <h2 className="text-5xl text-primary-violet font-semibold">{topic}</h2>
        <div className="flex flex-row items-center mt-1">
          <h4 className="ml-1 text-sm flex-shrink-0">{dateText}</h4>
          <div className="separator bg-secondary-violet"/>
        </div>
        {imageUrl && <img src={imageUrl} alt={topic} className="w-2/3 rounded-xl my-8 shadow-xl"/>}
        <div className="text-xl mt-4">{desc}</div>
        <div className="flex flex-row items-center justify-between w-11/12 mt-4">
          {speakers && speakers.length > 0 && speakers.map(speaker =>
            <Speaker speaker={speaker}/>
          )}
        </div>
      </div>
    </a>
  );
}

export default Event;
