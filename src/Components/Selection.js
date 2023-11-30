import { Link } from "react-router-dom";


function Selection() {


    return (
      <div className="flex justify-evenly items-center">
        <Link to="/films">
          <div className="bg-black rounded-lg w-44 h-44 opacity-80 flex flex-col justify-center items-center">
            <h1 className="text-3xl text-white">Movies</h1>
          </div>
        </Link>

        <Link to="/books">
          <div className="bg-black rounded-lg w-44 h-44 opacity-80 flex flex-col justify-center items-center">
            <h1 className="text-3xl text-white">Books</h1>
          </div>
        </Link>

        <Link to="/spells">
          <div className="bg-black rounded-lg w-44 h-44 opacity-80 flex flex-col justify-center items-center">
            <h1 className="text-3xl text-white">Spells</h1>
          </div>
        </Link>

      </div>
    );
}

export default Selection;