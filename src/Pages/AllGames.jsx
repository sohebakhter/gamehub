import React from "react";
import { useLoaderData } from "react-router";
import SingleGame from "../Components/SingleGame";

const AllGames = () => {
  const data = useLoaderData();

  return (
    <div>
      <title>GameHub | All-Games</title>

      <h1 className="text-2xl mt-4 md:mt-8 mb-5">All Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map((game) => (
          <SingleGame key={game.id} game={game}></SingleGame>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
