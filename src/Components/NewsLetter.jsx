import React from "react";
import newsletter from "../assets/newsletter.jpg";

const NewsLetter = () => {
  
  return (
    <div
  className="min-h-[400px] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url("${newsletter}")` }}
>
  <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-5 text-white">
    <h1 className="text-2xl">NEWSLETTER</h1>
    <input type="email" placeholder="YOUR EMAIL" className="input input-warning text-black" />
    <input type="text" placeholder="YOUR FIRST NAME" className="input input-warning text-black" />
    <input type="text" placeholder="YOUR LAST NAME" className="input input-warning text-black" />
    <button className="btn border-red-500 bg-red-500 text-white">SUBMIT</button>
  </div>
</div>

  );
};

export default NewsLetter;
