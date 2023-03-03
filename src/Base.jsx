import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import rickIcon from "../src/assets/rick-1.png";

const Base = () => {
  const [color, changeColor] = useState("#000000");

  document.body.style.backgroundImage = color;
  

  return (
    <div className="bg-black">
      <div className="fixed w-full">
        <header className="  md:h-1/5 p-1 bg-black flex justify-center">
          <Link to={'/'}>
            <img className="w-auto h-10" src={rickIcon} alt="img" />
          </Link>
        </header>
        <nav className=" font-lato">
          <ul className=" font-bold space-x-10 text-lg flex w-full px-10 bg-lime-600 ">
            <Link to={"/"}>
              <li>Characters</li>
            </Link>
            <Link to={"/location"}>
              <li>Locations</li>
            </Link>
            <Link to={"/episodes"}>
              <li>Episodes</li>
            </Link>
          </ul>
        </nav>
      </div>

      <main className="pt-10">
        <div className="mt-2">
        <Outlet />
        </div>
        
      </main>
    </div>
  );
};

export default Base;
