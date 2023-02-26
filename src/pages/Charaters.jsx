import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCharacter from "../components/CardCharacter";
import NextBack from "../components/NextBack";
import Spinner from "../components/Spinner";

const Charaters = () => {
  const [cargando, setCargando] = useState(false);
  const [btnSearch, setbtnSearch] = useState(false);
  const [newCount, setNewCount] = useState(Number());
  const [count, setCount] = useState(Number(1));
  const [useCharacters, setUseCharacters] = useState([]);
  const [useSearch, setUseSearch] = useState(String(""));

  const resetCount = () => {
    if (!btnSearch) {
      setbtnSearch(true);
    } else {
      setbtnSearch(false);
    }
    setCount(1);
  };

  useEffect(() => {
    async function getCharacters() {
      setCargando(true);
      const api = `https://rickandmortyapi.com/api/character?page=${count}&name=${useSearch}`;
      const result = await axios.get(api);
      setNewCount(result.data.info.pages);
      setUseCharacters(result.data.results);

      if (useCharacters === 0) {
        setCargando(true);
      } else {
        setCargando(false);
      }

      setbtnSearch(false);
    }
    getCharacters();
  }, [count, btnSearch]);

  return (
    <div className="">
      <header className="pr-10 pl-10 pt-10 text-center font-creep">
        <h2 className=" font-medium text-4xl text-lime-600 mb-3">Characters</h2>
        <h3 className=" font-medium text-2xl text-lime-600">
          Complete list of caracters from Rick and Morty
        </h3>
        <nav className="sm:flex sm:justify-between sm:space-x-10 mt-10">
          <div className="w-90% max-sm:mb-2">
            <input
              className="font-lato m-1 w-auto h-10 rounded-md"
              type="search"
              placeholder="Search by name"
              value={useSearch}
              onChange={(e) => setUseSearch(e.target.value)}
            ></input>
            <button
              onClick={resetCount}
              className="w-10 h-10 rounded-md bg-lime-700"
            >
              🔍
            </button>
          </div>
          <NextBack newCount={newCount} count={count} setCount={setCount} />
        </nav>
      </header>

      <section className="sm:grid md:grid-cols-2 lg:grid-cols-4 ">
        {useCharacters.map((character, i) => (
          <CardCharacter
            characters={useCharacters}
            cargando={cargando}
            key={i}
            i={i}
          />
        ))}
      </section>
      <footer className="pr-10 pb-10 pl-10 sm:justify-end flex max-sm:justify-around ">
        <nav className="">
          <NextBack count={count} newCount={newCount} setNewCount={newCount} />
        </nav>
      </footer>
    </div>
  );
};

export default Charaters;
