import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import CardCharacter from "../components/CardCharacter";
import ErrorText from "../components/ErrorText";
import NextBack from "../components/NextBack";
import Spinner from "../components/Spinner";

const Charaters = () => {
  const [cargando, setCargando] = useState(false);
  const [useNewCount, setUseNewCount] = useState(Number(1));
  const [count, setCount] = useState(Number(1));
  const [useCharacters, setUseCharacters] = useState([]);
  const [useSearch, setUseSearch] = useState(String(""));

  let api = `https://rickandmortyapi.com/api/character?page=${count}&name=${useSearch}&`;

  useEffect(() => {
    async function getCharacters() {
      
      try {
        setCargando(true);
        const result = await axios.get(api);
        setUseNewCount(result.data.info.pages);
        setUseCharacters(result.data.results);
        setCargando(false);
      } catch (error) {
        setUseNewCount(0)
      }
        
        
    }

    getCharacters();
  }, [api]);

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
              className="font-lato m-1 w-60 h-10 rounded-md"
              type="search"
              placeholder="Search by name"
              value={useSearch}
              onChange={function changer(e) {
                setUseSearch(e.target.value)
                setCount(1)
              }}
            ></input>
          </div>
          <NextBack
            count={count}
            setCount={setCount}
            useNewCount={useNewCount}
          />
        </nav>
      </header>

      <section id='create' className="sm:grid md:grid-cols-2 lg:grid-cols-4">
        <CardCharacter
        characters={useCharacters}
        cargando={cargando}
        pages={useNewCount}
        />
      </section>
      <footer className="pr-10 pb-10 pl-10 sm:justify-end flex max-sm:justify-around ">
        <nav className="">
          <NextBack
            count={count}
            setCount={setCount}
            useNewCount={useNewCount}
          />
        </nav>
      </footer>
    </div>
  );
};

export default Charaters;
