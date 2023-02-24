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

 

  const [count, setCount] = useState(Number(1))

  const next =()=>{
    if(count < 42) {
      setCount(count +1)
    }
    return
  }

  const back =()=>{
    if(count > 1){
      setCount(count -1)
    }
  }
  
  const characters = [useLoaderData()]
  const aCharacter = characters[0]
  //console.log(typeof aCharacter)
  //console.log( aCharacter)
  return (
    <div className="grid ">
      <header className=" p-10 text-center">
      <h2 className=" font-medium text-2xl text-lime-600">Characters</h2>
      <h3 className=" font-medium text-lime-600">
        Complete list of caracters from Rick and Morty
      </h3>
      </header>
      <nav className="font-medium">
        <button
        onClick={next} 
        className="float-right bg-lime-700 py-2 px-2 rounded border-none mr-10">
          Next
        </button>
       <span 
       className=" cursor-default float-right bg-lime-700 py-2 px-5 rounded border-none mr-2"
       >
         Page: {count}
       </span>
       <button
       onClick={back} 
       className="float-right bg-lime-700 py-2 px-2 rounded border-none mr-2"
       >
          Back
        </button>
      </nav>
      <section className="sm:grid md:grid-cols-2 lg:grid-cols-4 ">
       {aCharacter.map((character, i) => (
        <CardCharacter  i={i} key={i} characters={aCharacter} />
       ))}
       
       
      </section>
    </div>
  );

};

export default Charaters;