


function BookCard({bookList}) {
    return (
      <div className="flex flex-wrap w-ful h-full ">
        {bookList.map((item) => {
          return (
            <div className="flex flex-col justify-center items-center w-1/4 ">
              <img
                src={item.attributes.cover}
                alt=""
                className="w-80 h-96"
              ></img>
              <div>
                <h1>{item.attributes.title}</h1>
                <h1>{item.attributes.author}</h1>
                <p>{item.attributes.dedication}</p>
                <p>{item.attributes.summary.substring(0, 100)}</p>
                <h2>{item.attributes.release_date}</h2>
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default BookCard;
