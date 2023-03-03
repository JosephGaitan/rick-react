import React from "react";
import CardCharacter from "./CardCharacter";
import { useState } from "react";
import Spinner from "./Spinner";

const CardLocation = ({ locations, characters, loading }) => {


  let { name, created, dimension, type, } = locations;

  const formattedDate = new Date(created);

  const createdDay = formattedDate.getDate();
  const createdMonth = formattedDate.getMonth() + 1;
  const createdYear = formattedDate.getFullYear();

  const date = `${createdDay}/${createdMonth}/${createdYear}`;

  return (
    <div className=" overflow-hidden">
      <div className=" p-3 items-center  text-center lg:flex lg:justify-around font-bold bg-lime-500 rounded-xl overflow-hidden text-xl  font-lato mb-7">
        <p>Name:</p>
        <span className=" text-4xl max-sm:text-3xl text-gray-800">{name}</span>
        <p>Type:</p>
        <span className="text-xl max-sm:text-2xl text-gray-800">{type}</span>
        <p>Dimension:</p>
        <span className="text-xl max-sm:text-2xl text-gray-800">
          {dimension}
        </span>
        <p>Created:</p>
        <span className="text-xl max-sm:text-2xl text-gray-800">{date}</span>
      </div>
      <h2 className=" font-creep text-4xl text-lime-700  text-center">
        These are the characters who were last seen on this location
      </h2>
      <article className=" p-3 mt-3  font-bold border-2 border-lime-900 rounded-xl overflow-hidden   font-lato mb-5 sm:grid md:grid-cols-2 lg:grid-cols-4">
        {characters.length > 0  ? (<CardCharacter characters={characters} cargando={loading} pages={1} />) : (<p className="text-lime-500 text-bold">No characters have been seen here yet :/</p>)}
          
      </article>
    </div>
  );
};

export default CardLocation;
