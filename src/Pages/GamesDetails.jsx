import React from "react";
import img from "../assets/details.jpg";
import { Link, useLoaderData, useParams } from "react-router";
import { FaAngleDoubleDown } from "react-icons/fa";

const GamesDetails = () => {
  const { id } = useParams();

  const data = useLoaderData();

  const findedGame = data.find((game) => game.id == id);
  const {
    title,
    coverPhoto,
    category,
    description,
    developer,
    downloadLink,
    ratings,
  } = findedGame;

  return (
    <div
      className="  h-screen bg-cover bg-center text-white "
      style={{ backgroundImage: `url("${img}")` }}
    >
      <title>{title}</title>
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
        <div className="space-y-3">
          <img
            className="md:w-90 h-70 md:h-full rounded-lg mt-5"
            src={coverPhoto}
            alt=""
          />
          <Link to={`${downloadLink}`}>
            <button className="btn">
              <FaAngleDoubleDown /> Download From Here
            </button>
          </Link>
        </div>

        <div className="space-y-2 md:space-y-5 md:ml-5 mt-5">
          <h1 className="text-xl md:text-4xl">{title}</h1>
          <p className="text-red-400">Developed by: {developer}</p>
          <p>{description}</p>
          <p className="text-red-400">{category}</p>
          <p>Rating: {ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default GamesDetails;
