


function Card({filmData}) {
    return (
      <div className="flex min-h-screen flex-wrap grid-cols gap-3 justify-center">
        {filmData.map((item) => {
          return (
            <div className="w-[350px] min-h-full m-5 p-1 bg-zinc-950 border-solid rounded-lg shadow-md opacity-95">
              <img
                src={item.attributes.poster}
                alt=""
                className="aspect-sqare object-cover shadow-md"
              ></img>
              <div>
                <h1 className="m-2 text-2xl text-gray-300">
                  {item.attributes.title}
                </h1>
                <h1 className="text-sm text-slate-400 m-1">
                  {item.attributes.summary.substring(0, 100)}...
                </h1>
                <p className="text-md text-slate-400 mb-1">
                  {item.attributes.release_date}
                </p>
                <p className="text-md text-slate-500 mb-1">
                  <a href={item.attributes.trailer}>
                    Click to watch the trailer
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default Card;