import React from "react";

const CardCharacter = ({ characters, i }) => {
  return (
    <div className="w-50  bg-lime-500 overflow-hidden rounded-md block p-2 m-8 font-lato ">
      <img className="w-full mb-5" src={characters[i].image} alt="img" />
      <ul className="text-black text-xl text-left m-3 ">
        <li className="font-bold">Name: </li>
        <span className="text-2xl">{characters[i].name}</span>
        <li className="font-bold">Species: </li>
        <span>{characters[i].species} - </span>
        <span
          className={`${
            characters[i].status === "Alive" ? "text-blue-700 font-bold" : "" ^ characters[i].status === 'Dead' ?  'text-red-900 font-creep' : '' ^ characters[i].status === "unknown" ? " text-black font-bold" : ""
          }`}
        >
          {characters[i].status}
        </span>
        <li className=" text-gray-800 font-bold">Last seen location:</li>
        <span>{characters[i].location.name}</span>
      </ul>
    </div>
  );
};

export default CardCharacter;
