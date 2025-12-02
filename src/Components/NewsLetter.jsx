import React from "react";
import newsletter from "../assets/newsletter.jpg";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    console.log(email, fname, lname);
    toast("submitted");
  };
  return (
    <div
      className="min-h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url("${newsletter}")` }}
    >
      <form onSubmit={handleSubmit}>
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-5 text-white">
          <h1 className="text-2xl">NEWSLETTER</h1>

          <input
            type="email"
            name="email"
            placeholder="YOUR EMAIL"
            required
            className="input input-warning text-black"
          />
          <input
            type="text"
            name="fname"
            placeholder="YOUR FIRST NAME"
            required
            className="input input-warning text-black"
          />
          <input
            type="text"
            name="lname"
            placeholder="YOUR LAST NAME"
            required
            className="input input-warning text-black"
          />
          <button
            type="submit"
            className="btn border-red-500 bg-red-500 text-white"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
