import React, { use, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, googleSignIn } = use(AuthContext);

  const location = useLocation();

  const navigate = useNavigate();

  const emailRef = useRef();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Successfully Login");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const googleSign = () => {
    googleSignIn()
      .then(() => {
        // console.log(result.user);
        toast.success("Google Sign In successfull");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    navigate("/forget-password", { state: { email } });
  };

  return (
    <div className=" flex flex-col justify-center items-center md:min-h-screen mt-25 lg:mt-0">
      <title>GameHub | Login</title>
      <div className=" card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset space-y-3">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <button
                  onClick={handleForgetPassword}
                  className="link link-hover underline text-red-600"
                >
                  Forgot password?
                </button>
              </div>
              <button className="btn  mt-4 bg-red-500 text-white">Login</button>
            </fieldset>
          </form>
          <div>
            <p>Don't have an accoutn? </p>
            <Link to="/auth/register" className="underline text-red-600">
              Create an account
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-2">
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

export default Login;
