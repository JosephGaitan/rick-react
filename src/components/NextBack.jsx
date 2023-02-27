import React from "react";

const NextBack = ({ setCount, count, useNewCount  }) => {

    const next = () => {
        if (count < useNewCount) {
          setCount(count + 1)
        }  else {
          setCount(1)
        }
        return
      };
      const back = () => {
        if (count > 1) {
          setCount(count - 1);
        } else {
          setCount(useNewCount)
        }
        return
      };

  return (
    <div>
      <nav className=" justify-center flex space-x-5 font-medium font-creep">
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

export default NextBack;
