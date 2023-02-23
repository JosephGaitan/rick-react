import React from "react";

const CardCharacter = ({ characters, i }) => {
  //console.log(characters);
  return (
    <div className="w-45 bg-lime-500 overflow-hidden rounded-md block p-2 m-5">
      <img
        className="w-full"
        src={characters[i].image}
        alt="img"
      />
      <ul className="text-black  text-center">
        <li className="font-bold">Name: </li>
        <span>{characters[i].name}</span>
        <li className="font-bold">Species: </li>
        <span>{characters[i].species}</span>
        <li className="font-bold">Status: </li>
        <span>{characters[i].status}</span>
      </ul>
    </div>
  );
};

export default CardCharacter;
