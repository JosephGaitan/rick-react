import { useRouteError } from "react-router-dom";
import errorImg from "../assets/rickA.png";
import { Link } from "react-router-dom";

const ErrorText = () => {
  const error = useRouteError();

  return (
    <div className="grid grid-cols-2 py-10 px-5">
      <img src={errorImg} alt="img" />
      <div className="m-10">
        <p className="text-lime-600 text-2xl">{error.message}</p>
        <Link to={"/"}>
          <button className="py-4 rounded-md mt-10 px-20 bg-lime-700 text-bold text-xl"> Go back!</button>
        </Link>
        <h2 className="text-lime-600 mt-20  font-creep text-3xl">Rick built this while drunk, sorry! </h2>
      </div>
    </div>
  );
};

export default ErrorText;
