import React from "react";
import CardCharacter from "./CardCharacter";

const CardEpisodes = ({ newCount, episodes, characters, cargando }) => {
  let { name, air_date, episode } = episodes;

  return (
    <div>
      <header>
        <ul className="  p-3 items-center  text-center lg:flex lg:justify-around font-bold bg-lime-500 rounded-xl overflow-hidden text-xl  font-lato mb-7">
          <li>Name:</li>
          <span className=" text-4xl text-gray-800">{name}</span>
          <li>Air Date:</li>
          <span className="text-xl max-sm:text-2xl text-gray-800">
            {air_date}
          </span>

          <li>Episode Code:</li>

          <span className="text-xl max-sm:text-2xl text-gray-800">
            {episode}
          </span>
        </ul>
        <h3 className="uppercase text-3xl text-lime-600 font-creep text-center mb-5">
          List of the characters who participate on the episode
        </h3>
      </header>
      <article className=" p-3 mt-3  font-bold border-2 border-lime-900 rounded-xl overflow-hidden   font-lato mb-5 sm:grid md:grid-cols-2 lg:grid-cols-4">
        {characters.length > 0 ? (
          <CardCharacter
            characters={characters}
            cargando={cargando}
            pages={1}
          />
        ) : (
          <p className="text-lime-500 text-bold">
            No characters have been registered here yet :/
          </p>
        )}
      </article>
    </div>
  );
};

export default CardEpisodes;
