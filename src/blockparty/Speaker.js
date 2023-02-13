function Speaker({speaker}) {
  return (
    <a href={speaker.url} target="_blank" rel="noreferrer" className="block flex flex-col my-8 items-center hover-scale">
      <img src={speaker.photo} className="rounded-full h-32 w-32" alt={speaker.name}/>
      <div className="flex-shrink-0 text-sm mt-3 font-semibold uppercase">{speaker.name}</div>
      <div className="flex-shrink-0 text-xs mt-2">{speaker.subtitle}</div>
    </a>
  );
}

export default Speaker;
