import React from "react";
import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCharacters } from "../data/index";
import CardCharacter from "../components/CardCharacter";

export async function loader() {
  const characters = await getCharacters()
  return characters.results
}

const Charaters = () => {

  const characters = [useLoaderData()]
  const aCharacter = characters[0]
  //console.log(typeof aCharacter)
  console.log( aCharacter)
  return (
    <div className=" p-10 text-center">
      <h2 className=" font-medium text-2xl text-lime-600">Characters</h2>
      <h3 className=" font-medium text-lime-600">
        Complete list of caracters from Rick and morty:
      </h3>
      <section className="sm:grid md:grid-cols-2 lg:grid-cols-4 ">
       {aCharacter.map((character, i) => (
        <CardCharacter  i={i} key={i} characters={aCharacter} />
       ))}
       
       
      </section>
    </div>
  );
};

export default Charaters;
