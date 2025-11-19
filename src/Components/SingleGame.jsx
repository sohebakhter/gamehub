import React from "react";
import { Link } from "react-router";

const SingleGame = ({ game }) => {
  const { id, title, coverPhoto, category, ratings } = game;
  return (
    <Link to={`/game/${id}`}>
      <div className="bg-base-100 shadow-sm hover:scale-105 transition-transform duration-300">
      
          <img
            className="h-[450px] rounded-xl mx-auto"
            src={coverPhoto}
            alt="Games"
          />
      
        <div className="border-t mt-1 p-2">
          <h2 className="">{title}</h2>
          <div className="flex justify-between items-center">
            <p>{category}</p>
            <p>{ratings}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleGame;
