import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Navbar from "../Components/Navbar";
import { Link } from "react-router";
import Footer from "../Components/Footer";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-11/12 mx-auto flex flex-col min-h-screen">
      <title>GameHub | Profile</title>
      <Navbar></Navbar>
      <div className="flex-1">
        <div className="flex justify-center items-center md:min-h-screen bg-gray-900 text-white">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-150 text-center hover:scale-105 transition-transform duration-300">
          <img
            src={user?.photoURL || ""}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">
            {user?.displayName || ""}
          </h2>
          <p className="text-gray-300 mb-2 break-words max-w-[300px] md:max-w-full mx-auto">
            {user?.email}
          </p>
          <Link
            to="/update-profile"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mt-4"
          >
            Update Profile
          </Link>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyProfile;
