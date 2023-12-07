import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div className="bg-black h-32 text-white font-serif">
        <nav className="h-full w-4/5 m-auto flex justify-between items-center">
          <h1 className="text-4xl font-serif">
            <Link to="/">PotterHead</Link>
          </h1>
          <div className="">
            <ul className="flex justify-between items-center gap-5 text-xl font-serif">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;