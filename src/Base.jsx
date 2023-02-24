import { Outlet, Link } from "react-router-dom";
import { useState } from "react";


const Base = () => {

  const [color, changeColor] = useState("#000000");

  document.body.style.backgroundColor = color;

  return (
    <div className="h-full bg-black w-full ">
      <header className="md:h-1/5 p-6 bg-lime-700">
        <h1 className="text-black text-3xl text-center font-bold ">
          Rick and Morty
        </h1>
      </header>
      <nav>
        <ul className=" font-medium justify-between text-lg flex w-full px-10 bg-lime-600 ">
          <Link to={"/Characters"}>
            <li>Characters</li>
          </Link>
          <li>Location</li>
          <li>Episodes</li>
        </ul>
      </nav>
        <main className=" bg-black h-full max-md:overflow-auto">
          <Outlet />
        </main>
    </div>
  );
};

export default Base;
