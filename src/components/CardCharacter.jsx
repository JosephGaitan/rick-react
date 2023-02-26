import React from "react";
import Spinner from "./Spinner";

const CardCharacter = ({ characters, i, cargando, }) => {
  return (
    <div className="w-50  bg-lime-500 rounded-xl overflow-hidden block  m-8 font-lato ">
      {cargando === true ? (
        <Spinner />
      ) : (
        <img className="w-full mb-5" src={characters[i].image} alt="img" />
      )}
      <ul className="text-black  text-left m-3 ">
        <li className="font-bold text-2xl ">{characters[i].name}</li>
        <li className="font-bold  ">
          {" "}
          {characters[i].species} -{" "}
          <span
            className={`${
              characters[i].status === "Alive"
                ? "text-blue-700 font-bold"
                : "" ^ (characters[i].status === "Dead")
                ? "text-red-700 font-creep"
                : "" ^ (characters[i].status === "unknown")
                ? " text-black font-bold"
                : ""
            }`}
          >
            {characters[i].status}
          </span>
        </li>
        <li className="text-gray-900 font-bold text-xl">Origin - {characters[i].origin.name}</li>
      </ul>
    </div>
  );
};

export default CardCharacter;
