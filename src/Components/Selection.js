

const options = [
    {
        id:1,
        title:"Movies",

    },
    {
        id:2,
        title:"Books",

    },
    {
        id:3,
        title:"Spells",

    },
    {
        id:4,
        title:"Character",

    }
]


function Selection() {

    function clickHandler(event){
        
    }

    return ( 
        <div className="flex justify-evenly items-center">
        {
            options.map((option)=>{
                return (
                  <div
                    className="flex flex-col justify-center items-center w-40 h-40 bg-black opacity-70 rounded-lg"
                    onClick={clickHandler}
                    key={option.id}
                  >
                    <h1 className="text-3xl">{option.title}</h1>
                  </div>
                );
            })
        }
        </div>
     );
}

export default Selection;