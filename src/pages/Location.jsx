import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CardLocation from "../components/CardLocation";
import Select from "../components/Select";
import NextBack from "../components/NextBack";

const Location = () => {
  const [count, setCount] = useState(1);
  const [useLocation, setUseLocation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [useResidents, setResidents] = useState([]);

  let api = `https://rickandmortyapi.com/api/location/${count}`;
  //console.log('locations',useLocation)
  //console.log('residents',useResidents)

  useEffect(() => {
    async function getLocations() {
      try {
        setLoading(true);
        const result = await axios.get(api);
        setUseLocation(result.data);
        setLoading(false);
        if (result) {
          const residents = await Promise.all(
            result.data.residents.map((resident) => {
              return axios.get(resident);
            })
          );
          setResidents(residents);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getLocations();
  }, [api]);

  return (
    <div>
      <div className="lg:grid lg:grid-cols-1 lg:mx-10">
        <header className=" p-10 text-center font-creep">
        <h2 className=" font-medium text-4xl text-lime-600 mb-3">Locations</h2>
        <h3 className=" font-medium text-2xl text-lime-600">
          These are the known places of the Rick and Morty universe
        </h3>
          <nav className=" items-center sm:flex sm:justify-between sm:space-x-10 mt-10">
            <div className="font-lato font-bold w-90% max-sm:mb-2">
              <Select setCount={setCount} text={"Location"} total={126} />
            </div>
            <div className="w-90% max-sm:mb-2">
              <NextBack setCount={setCount} count={count} useNewCount={126} />
            </div>
          </nav>
        </header>
        <section className="grid grid-cols-1 mx-7 ">
          <CardLocation
            locations={useLocation}
            loading={loading}
            characters={useResidents}
          />
        </section>
        <footer className="pr-10 pb-10 pl-10 flex justify-around ">
          <nav className="">
            <NextBack setCount={setCount} count={count} useNewCount={126} />
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Location;
