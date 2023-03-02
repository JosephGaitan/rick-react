import React from "react";

const Select = ({ setCount }) => {
  let name = "Location";
  let total = 126;
  let options = [];

  for (let i = 1; i <= total; i++) {
    options.push(
    <option
      className=""
      value={i}
      key={i}
    >
      {name}  {i}
    </option>
    );
  }

  return (
    <>
      <select
        className="  w-full text-xl font-creep rounded-md px-5 py-2 bg-lime-700"
        onChange={(e) => setCount(Number(e.target.value))}
      >
        <option className="" value={0} >-Select a Location-</option>
        {options}
      </select>
    </>
  );
};

export default Select;
