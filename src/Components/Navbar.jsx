import React, { use } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, singOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    singOutUser()
      .then(() => {
        // console.log(result);
        toast.success("Successfully LogOut");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Can't LogOut");
      });
  };
  return (
    <div className="bg-black shadow-sm sticky top-0 z-50">
      <div className="w-11/12 mx-auto p-3  text-white  lg:flex items-center md:justify-between  ">
        <div className=" flex justify-center items-center hover:cursor-pointer">
          <img className="w-13 rounded-full" src={logo} alt="" />
          <Link to="/" className="text-3xl font-bold ">
            GameHub
          </Link>
        </div>
        <div className="lg:flex justify-center md:gap-5">
          <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-5">
            <Link to="/">GAME</Link>
            <Link to="/game/allgame">STORE</Link>
            <Link to="/community">COMMUNITY</Link>
          </div>
          <div>
            {user ? (
              <div className="flex justify-center mt-2 md:mt-0 items-center space-x-2">
                <Link to="/myprofile">
                  <img
                    className="w-10 rounded-full border-2 border-red-500 hover:scale-105 transition-transform duration-300"
                    src={user?.photoURL}
                    alt=""
                  />
                </Link>
                <button onClick={handleSignOut} className="btn">
                  LogOut
                </button>
              </div>
            ) : (
              <div className="space-x-2 flex justify-center lg:justify-end ">
                <Link to="/auth/login" className="btn">
                  Login
                </Link>
                <Link to="/auth/register" className="btn">
                  Registration
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
