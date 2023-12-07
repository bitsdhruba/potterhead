

function SpellCard({spellList}) {
    return (
      <div className="flex min-h-screen flex-wrap grid-cols gap-3 justify-center">
        {spellList.map((item) => {
          return (
            <div className="flex flex-col justify-center items-center w-[350px] min-h-full m-5 p-2 bg-zinc-950 border-solid rounded-lg shadow-md opacity-90">
              <div>
              <img
                src={item.attributes.image}
                alt=""
                className="aspect-square object-cover shadow-md rounded-lg"
              ></img>
              </div>
              <div>
                <h1 className="my-2 text-2xl text-gray-300">
                  {item.attributes.name}
                </h1>
                <h1 className="m-2 text-xl text-gray-300">
                  {item.attributes.effect}
                </h1>
                <h1 className="m-2 text-lg text-gray-500">
                  {item.attributes.catagory}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default SpellCard;


// catagory 
// effect 
// image 
// name 
