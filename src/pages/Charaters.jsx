import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import CardCharacter from "../components/CardCharacter";

const Charaters = () => {
  const [count, setCount] = useState(Number(1));
  const [useCharacters, setUseCharacters] = useState([]);

  const next = () => {
    if (count < 42) {
      setCount(count + 1);
    } else {
      setCount(1)
    }
  };
  const back = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(42)
    }
  };

  useEffect(() => {
    async function getCharacters() {
      const url = `https://rickandmortyapi.com/api/character?page=${count}`;
      const result = await axios.get(url);

      setUseCharacters(result.data.results);
    }
    getCharacters();
  }, [count]);

  //const characters = {useCharacters}
  //console.log('UseCharacters', useCharacters);
  //console.log('characters', characters);

  return (
    <div className="grid ">
      <header className=" p-10 text-center font-creep">
        <h2 className=" font-medium text-4xl text-lime-600">Characters</h2>
        <h3 className=" font-medium text-2xl text-lime-600">
          Complete list of caracters from Rick and Morty
        </h3>
      </header>
      <nav className=" font-creep max-md:justify-center justify-end flex space-x-5 md:mr-10 font-medium">
        <button
          
          onClick={back}
          className=" bg-lime-700 py-2 px-2 rounded border-none "
        >
          Back
        </button>
        <span className=" cursor-default  bg-lime-700 py-2 px-5 rounded border-none ">
          Page: {count}
        </span>

        <button
          onClick={next}
          className="  bg-lime-700 py-2 px-2 rounded border-none "
        >
          Next
        </button>
      </nav>
      <section className="sm:grid md:grid-cols-2 lg:grid-cols-4 ">
      {useCharacters.map( (character, i) => (
        <CardCharacter characters={useCharacters} key={i} i={i}/>
       ))}
      </section>
      <nav className=" mb-20 max-md:justify-center justify-end flex space-x-5 md:mr-10 font-medium font-creep">
        <button
          
          onClick={back}
          className=" bg-lime-700 py-2 px-2 rounded border-none "
        >
          Back
        </button>
        <span className=" cursor-default  bg-lime-700 py-2 px-5 rounded border-none ">
          Page: {count}
        </span>

        <button
          onClick={next}
          className="  bg-lime-700 py-2 px-2 rounded border-none "
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Charaters;
