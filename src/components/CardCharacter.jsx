import React from "react";
import Spinner from "./Spinner";
import images from "../assets/rick-and-morty.png";

const CardCharacter = ({ characters, cargando, pages, }) => {
  let cardContent;

  

  if (pages > 0) {
    cardContent = characters.map((character) => {
      let { id, image, name, status, location, species, origin } = character.data || character;
      return (
        <div
          key={id}
          className=" w-50  bg-lime-500 rounded-xl overflow-hidden block  m-5 font-lato "
        >
          {cargando === true ? (
            <Spinner />
          ) : (
            <img className="w-full mb-5" src={image} alt="img" />
          )}
          <ul className="text-black  text-left m-3 ">
            <li className="font-bold text-2xl ">{name}</li>
            <li className="font-bold  ">
              {" "}
              {species} -{" "}
              <span
                className={`${
                  status === "Alive"
                    ? "text-blue-700 font-bold"
                    : "" ^ (status === "Dead")
                    ? "text-red-700 font-creep"
                    : "" ^ (status === "unknown")
                    ? " text-black font-bold"
                    : ""
                }`}
              >
                {status}
              </span>
            </li>
            <li className="text-gray-900 font-bold text-xl">
              Origin - {origin.name}
            </li>
          </ul>
        </div>
      );
    });
  } else {
    cardContent = (
      <div className="   py-10 px-10">
        <h2 className="text-lime-600  font-creep text-2xl">
          There is nothing here...
        </h2>
        <img src={images} alt="img" />
        <div className="m-2"></div>
      </div>
    );
  }

  return <>{cardContent}</>;
};

export default CardCharacter;
