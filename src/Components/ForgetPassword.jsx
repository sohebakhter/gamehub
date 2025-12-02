// import React, { use } from "react";
// import { AuthContext } from "../Context/AuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ForgetPassword = () => {
  // const { user } = use(AuthContext);
  // console.log(user);

  const emailRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.email) {
      emailRef.current.value = location.state.email;
    }
  }, [location.state]);

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset mail sent!");
        setTimeout(() => {
          window.open("https://mail.google.com/", "_blank");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-11/12 mx-auto flex flex-col min-h-screen">
      <title>Forget Password</title>
      <h1>ForgetPassword</h1>

      {/* --------------- */}

      <div className="flex-1">
        <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          <div className="card-body">
            <form onSubmit={handleResetPassword}>
              <fieldset className="fieldset space-y-3">
                <label className="label">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  className="input"
                  placeholder="Email"
                />

                <button
                  type="submit"
                  className="btn  mt-4 bg-red-500 text-white"
                >
                  Reset Password
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      {/* ------------ */}
    </div>
  );
};

export default ForgetPassword;
