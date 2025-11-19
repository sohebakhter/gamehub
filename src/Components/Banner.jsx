import React from "react";
import banner from "../assets/banner.jpg";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div
      className="lg:h-screen bg-cover bg-center flex flex-col lg:flex-row justify-center items-center"
      style={{ backgroundImage: `url("${banner}")` }}
    >
      <div className=" text-white space-y-2 md:space-y-5 lg:space-y-10 p-2 md:p-1 lg:p-0">
        <motion.h1
          initial={{
            y: 200,
          }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          className=" text-4xl md:text-4xl lg:text-7xl text-center md:text-left"
        >
          WELCOME <br /> HOME
        </motion.h1>

        <motion.p
          initial={{
            x: -500,
          }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          className="text-center md:text-left"
        >
          "Dive into the ultimate gaming adventure — play, compete, and
          conquer!"
        </motion.p>
        <motion.p
          initial={{
            x: -500,
          }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 0,
          }}
        >
          Step into the world of endless action and adventure!
          <br /> Discover the latest games, explore stunning graphics, and
          <br />
          challenge players from around the globe. Whether you’re a casual{" "}
          <br />
          gamer or a pro, this is your arena to play, compete, and rise to
          victory.
          <br />
          Your gaming journey starts here!
        </motion.p>

        <div className=" flex justify-center lg:justify-start  gap-2 md:gap-5 ">
          {/* Google play */}
          <Link
            to="https://play.google.com/"
            className="btn bg-black text-white border-black w-40 md:w-60"
          >
            <FaGooglePlay />
            Google Play
          </Link>

          {/* app store */}
          <Link
            to="https://www.apple.com/app-store"
            className="btn bg-white text-black border-[#e5e5e5] w-40 md:w-60"
          >
            <FaAppStore />
            App Store
          </Link>
        </div>
      </div>
      
      {/* ----------------------------------------------------------slider */}
      <div className="md:w-100">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="w-100 h-150 rounded-4xl"
              src={image1}
              alt=""
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img className="w-100 h-150 rounded-4xl" src={image2} alt="" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img className="w-100 h-150 rounded-4xl" src={image3} alt="" />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
