import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CardLocation from "../components/CardLocation";

const Location = () => {
  const [count, setCount] = useState(Number(1));
  const [useLocation, setUseLocation] = useState([]);

  const next = () => {
    if (count < 7) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  };
  const back = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(7);
    }
  };

  useEffect(() => {
    async function getLocations() {
      const url = `https://rickandmortyapi.com/api/location?page=${count}`;
      const result = await axios.get(url);

      setUseLocation(result.data.results);
      
      
    }
    getLocations();
    
  }, [count]);

  console.log(useLocation)
  return (
    <div>
      <header className=" p-10 text-center font-creep">
        <h2 className=" font-medium text-2xl text-lime-600 mb-7">
          These are the places known of the Rick and Morty universe
        </h2>
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
      </header>
      <section className="sm:grid md:grid-cols-1 lg:grid-cols-2 ">
        {useLocation.map((location, i)=>(
           <CardLocation />
        ))}
      </section>
    </div>
  );
};

export default Location;
