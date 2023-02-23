import React from "react";

const CardCharacter = () => {
  return (
    <div className="w-45 bg-lime-500 overflow-hidden rounded-md block p-2 m-5">
      <img
        className="w-full"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="img"
      />
      <ul className="text-black font-medium text-left">
        <li>Name: </li>
        <li>Species: </li>
        <li>Status: </li>
      </ul>
    </div>
  );
};

export default CardCharacter;
