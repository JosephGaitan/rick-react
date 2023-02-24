import React from "react";

const CardCharacter = ({ characters, i }) => {
  console.log(characters);
  return (
    <div className="w-50  bg-lime-500 overflow-hidden rounded-md block p-2 m-8 ">
      <img className="w-full mb-5" src={characters[i].image} alt="img" />
      <ul className="text-black text-xl text-left m-3 ">
        <li className="font-bold">Name: </li>
        <span className="text-2xl">{characters[i].name}</span>
        <li className="font-bold">Species: </li>
        <span>{characters[i].species} - </span>
        <span
          className={`${
            characters[i].status === "Alive" ? "text-blue-700" : "text-black" ^ characters[i].status === 'Dead' ? 'text-red-900' : ''
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
