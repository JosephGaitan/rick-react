import React from "react";
import axios from "axios";
import Select from "../components/Select";
import NextBack from "../components/NextBack";
import CardEpisodes from "../components/CardEpisodes";
import { useState, useEffect } from "react";

const Episodes = () => {
  const [cargando, setCargando] = useState(false);
  const [count, setCount] = useState(1);
  const [useEpisodes, setEpisodes] = useState([]);
  const [useSearch, setUseSearch] = useState(String(""));
  const [useCharacters, setCharacters] = useState([]);

  let api = `https://rickandmortyapi.com/api/episode/${count}`;
  //console.log('episodes',useEpisodes)
  //console.log('characters', useCharacters)

  useEffect(() => {
    async function getEpisodes() {
      try {
        setCargando(true);
        const result = await axios.get(api);
        //console.log('result',result)
        setEpisodes(result.data);
        setCargando(false);

        if (result) {
          const residents = await Promise.all(
            result.data.characters.map((character) => {
              return axios.get(character);
            })
          );
          setCharacters(residents);
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    getEpisodes();
  }, [api]);

  return (
    <div>
      <header className="  pr-10 pl-10  mb-10 pt-10 text-center font-creep">
        <h2 className=" font-medium text-4xl text-lime-600 mb-3">Episodes</h2>
        <h3 className=" font-medium text-2xl text-lime-600">
          Complete list of episodes from the Rick and Morty Show
        </h3>
        <nav className="sm:flex sm:justify-between sm:space-x-10 items-center mt-10">
          <div className="w-90% max-sm:mb-2">
            <Select setCount={setCount} text={'Episode'} total={51} />
          </div>
          <NextBack count={count} setCount={setCount} useNewCount={51} />
        </nav>
      </header>
      <section className="grid grid-cols-1 mx-7 mt-5 border-t-2  border-lime-800 p-5 ">
        <CardEpisodes
          episodes={useEpisodes}
          newCount={51}
          characters={useCharacters}
          cargando={cargando}
        />
      </section>
      <footer className="pr-10 pb-10 pl-10 flex justify-around ">
        <nav className="">
          <NextBack count={count} setCount={setCount} useNewCount={51} />
        </nav>
      </footer>
    </div>
  );
};

export default Episodes;
