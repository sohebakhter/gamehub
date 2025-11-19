import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, singOutUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //password validation
    const regEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regEx.test(password)) {
      toast.error(
        "❌ Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        //updating user profile
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(result.user, profile)
          .then(() => {
            toast.success("Profile Updated Successfully");
          })
          .catch((error) => {
            console.log(error.message);
          });
        // singout
        singOutUser().then(() => {
          navigate("/auth/login");
        });

        toast.success("Registration successfull");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Can't Register");
      });
  };

  const googleSign = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Sign In successfull");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center md:min-h-screen ">
      <title>GameHub | Registration</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset space-y-2">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                required
                placeholder="Name"
              />
              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="url"
                name="photo"
                className="input"
                required
                placeholder="Photo URL"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                required
                placeholder="Email"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                required
                className="input"
                placeholder="Password"
              />

              <button className="btn  mt-4 bg-red-500 text-white">
                Create an account
              </button>
            </fieldset>
          </form>
          <p>
            Already have an accoutn?{" "}
            <Link to="/auth/login" className="underline text-red-600">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-5">
        <p className="border-b-2 w-20"></p>
        <p>Or</p>
        <p className="border-b-2 w-20"></p>
      </div>

      {/* Google */}
      <button
        onClick={googleSign}
        className="btn bg-red-500 text-white border-[#e5e5e5] mt-2 md:w-[400px] rounded-full"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="rounded-full"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Continue with Google
      </button>
    </div>
  );
};

export default Register;
