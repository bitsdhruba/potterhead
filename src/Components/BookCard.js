


function BookCard({bookList}) {
    return (
      <div className="flex min-h-screen flex-wrap grid-cols gap-3 justify-center">
        {bookList.map((item) => {
          return (
            <div className="w-[350px] min-h-full m-5 p-2 bg-zinc-950 border-solid rounded-lg shadow-md opacity-95">
              <img
                src={item.attributes.cover}
                alt=""
                className="aspect-[3/5] object-cover shadow-md rounded-lg"
              ></img>
              <div>
                <h1 className="m-2 text-2xl text-gray-300">
                  {item.attributes.title}
                </h1>
                <h1 className="text-md text-slate-500 mb-1">
                  {item.attributes.author}
                </h1>
                <p className="text-md text-slate-500 mb-1">
                  {item.attributes.dedication}
                </p>
                <p className="text-sm text-slate-300 m-1">
                  {item.attributes.summary.substring(0, 100)}
                </p>
                <h2 className="text-md text-slate-500 mb-1">
                  {item.attributes.release_date}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default BookCard;
