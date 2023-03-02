import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import rickIcon from '../src/assets/rick-1.png'


const Base = () => {

  const [color, changeColor] = useState("#000000");

  document.body.style.backgroundColor = color;

  return (
    <div className="h-full bg-black w-full">
      <header className="md:h-1/5 p-6 bg-black flex justify-center">
        <img className="w-auto h-20" src={rickIcon} alt='img'/>
      </header>
      <nav className=" font-lato">
        <ul className=" font-bold space-x-10  text-lg flex w-full px-10 bg-lime-600 ">
          <Link to={"/"}>
            <li>Characters</li>
          </Link>
          <Link to={"/location"}>
            <li>Locations</li>
          </Link>
        </ul>
      </nav>
        <main className=" bg-black h-full max-md:overflow-auto">
          <Outlet />
        </main>
    </div>
  );
};

export default Base;
