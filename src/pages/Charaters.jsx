import React from "react";
import CardCharacter from "../components/CardCharacter";

const Charaters = () => {
  const loader = () => {};

  return (
    <div className=" p-10 text-center">
      <h2 className=" font-medium text-2xl text-lime-600">Characters</h2>
      <h3 className=" font-medium text-lime-600">
        Complete list of caracters from Rick and morty:
      </h3>
      <section className="md:grid min-md:grid-cols-2 md:grid-cols-5 ">
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
      </section>
    </div>
  );
};

export default Charaters;
