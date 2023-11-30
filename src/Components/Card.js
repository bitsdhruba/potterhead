


function Card({filmData}) {
    return (
      <div className="flex flex-wrap w-ful h-full jsutify-center items-center">
        {filmData.map((item) => {
          return (
            <div className="flex flex-col justify-center items-center w-1/4 gap-10 m-10 p-5">
              <img
                src={item.attributes.poster}
                alt=""
                className="w-96 h-96"
              ></img>
              <div>
                <h1>{item.attributes.title}</h1>
                <h1>{item.attributes.summary.substring(0, 100)}</h1>
                <p>{item.attributes.release_date}</p>
                <p>{item.attributes.trailer}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default Card;