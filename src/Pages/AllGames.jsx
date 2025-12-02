import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SingleGame from "../Components/SingleGame";

const AllGames = () => {
  const data = useLoaderData();
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  const filteredGames =
    category === "all" ? data : data.filter((d) => d.category === category);

  const sortedItem = (() => {
    if (sortOrder == "ratings-asc") {
      return [...filteredGames].sort((a, b) => a.ratings - b.ratings);
    } else if (sortOrder == "ratings-desc") {
      return [...filteredGames].sort((a, b) => b.ratings - a.ratings);
    } else {
      return filteredGames;
    }
  })();

  return (
    <div className="w-11/12 mx-auto">
      <title>GameHub | All-Games</title>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl mt-4 md:mt-8 mb-5">All Games</h1>
        {/* filter by category */}
        <select
          className="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Open World">Open World</option>
          <option value="Battle Royale">Battle Royale</option>
          <option value="Action-Adventure">Action-Adventure</option>
        </select>
        {/* sorting here --------------------------------------------------*/}
        <select
          className="select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option disabled value="">
            Sort By Rating--
          </option>
          <option value="ratings-asc">Low - High</option>
          <option value="ratings-desc">High - Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedItem.map((game) => (
          <SingleGame key={game.id} game={game}></SingleGame>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
