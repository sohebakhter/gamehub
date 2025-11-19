import React from "react";
import newsletter from "../assets/newsletter.jpg";

const NewsLetter = () => {
  //  className="h-screen bg-cover bg-center flex justify-center items-center"
  //       style={{ backgroundImage: `url("${banner}")` }}
  return (
    <div
      className="h-100 bg-cover bg-center flex flex-col lg:flex-row items-center justify-center gap-5 text-white"
      style={{ backgroundImage: `url("${newsletter}")` }}
    >
      <h1 className="text-2xl">NEWSLETTER</h1>
      <input type="email" placeholder="YOUR EMAIL" className="input input-warning text-black" />
      <input type="text" placeholder="YOUR FIRST NAME" className="input input-warning text-black" />
      <input type="text" placeholder="YOUR LAST NAME" className="input input-warning text-black" />
      <button className="btn border-red-500 bg-red-500 text-white">SUBMIT</button>
    </div>
  );
};

export default NewsLetter;
