import { NavLink } from "react-router-dom";


function Selection() {


    return (
      <div className="flex justify-evenly items-center">
        <NavLink
          to="/films"
          className="bg-zinc-800 rounded-lg w-44 h-20 mt-5 opacity-80 flex flex-col justify-center items-center"
        >
          <div>
            <h1 className="text-3xl text-white font-serif">Movies</h1>
          </div>
        </NavLink>

        <NavLink
          to="/books"
          className="bg-zinc-800 rounded-lg w-44 h-20 mt-5 opacity-80 flex flex-col justify-center items-center"
        >
          <div>
            <h1 className="text-3xl text-white font-serif">Books</h1>
          </div>
        </NavLink>

        <NavLink
          to="/spells"
          className="bg-zinc-800 rounded-lg w-44 h-20 mt-5 opacity-80 flex flex-col justify-center items-center"
        >
          <div>
            <h1 className="text-3xl text-white font-serif">Spells</h1>
          </div>
        </NavLink>
      </div>
    );
}

export default Selection;