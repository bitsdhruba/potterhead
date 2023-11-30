

function SpellCard({spellList}) {
    return (
      <div className="flex flex-wrap w-ful h-full ">
        {spellList.map((item) => {
          return (
            <div className="flex flex-col justify-center items-center w-1/4 ">
              <img
                src={item.attributes.image}
                alt=""
                className="w-80 h-96"
              ></img>
              <div>
                <h1>{item.attributes.name}</h1>
                <h1>{item.attributes.effect}</h1>
                <h1>{item.attributes.catagory}</h1>
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
