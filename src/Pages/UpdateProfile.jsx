import { useState } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { useNavigate } from "react-router";
import Footer from "../Components/Footer";

const UpdateProfile = () => {
  const [user, setUser] = useState(AuthContext);
  const navigate = useNavigate();

  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const photoURL = e.target.photo.value;
    const displayName = e.target.name.value;

    updateProfile(auth.currentUser, { displayName, photoURL })
      .then(() => {
        setUser({ ...user, displayName, photoURL });
        e.target.reset();
        navigate("/myprofile");
      })
      .catch(() => {});
  };
  return (
    <div className="w-11/12 mx-auto flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1">
        <div className="flex justify-center items-center md:min-h-screen bg-gray-900 text-white ">
          <title>GameHub | Update Profile</title>
          <form
            onSubmit={handleUpdateInfo}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg w-100 hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Update Your Info
            </h2>

            <label className="block mb-2 text-gray-300">Photo URL</label>
            <input
              type="url"
              name="photo"
              className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none"
              placeholder="Enter new photo URL"
            />

            <label className="block mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none"
              placeholder="Enter your name"
            />

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 w-full rounded-lg"
            >
              Update Information
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;
