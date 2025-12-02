import React, { useState } from "react";
// import AllGames from "./AllGames";
import { Link, useLoaderData } from "react-router";
import SingleGame from "../Components/SingleGame";
import NewsLetter from "../Components/NewsLetter";
import { motion } from "motion/react";
import Banner from "../Components/Banner";

const Home = () => {
  const data = useLoaderData();
  const slicedGame = data.slice(0, 8);
  const [sortOrder, setSortOrder] = useState("ratings-desc");

  const sortedItem = (() => {
    if (sortOrder == "ratings-asc") {
      return [...slicedGame].sort((a, b) => a.ratings - b.ratings);
    } else if (sortOrder == "ratings-desc") {
      return [...slicedGame].sort((a, b) => b.ratings - a.ratings);
    } else {
      return slicedGame;
    }
  })();

  return (
    <div>
      <title>GameHub | Home</title>
      <Banner></Banner>

      <div className="w-11/12 mx-auto mt-3 md:mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-5">
          <h1 className="text-2xl">Popular - Games</h1>
          {/* sorting here --------------------------------------------------*/}
          <select
            className="select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="ratings-desc">Sort By Rating--</option>
            <option value="ratings-asc">Low - High</option>
            <option value="ratings-desc">High - Low</option>
          </select>
        </div>
        {/* ---------------------------------------------------------------------------------- */}
        <motion.div
          initial={{
            y: 1000,
          }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {sortedItem.map((game) => (
            <SingleGame key={game.id} game={game}></SingleGame>
          ))}
        </motion.div>
        <div></div>
      </div>

      <div className="flex justify-center items-center gap-5 mt-10 mb-10">
        <p className="border-b-5 border-red-500 w-full"></p>
        <Link to="/game/allgame" className="btn">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            All Games
          </motion.button>
        </Link>
        <p className="border-b-5 border-red-500 w-full"></p>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
