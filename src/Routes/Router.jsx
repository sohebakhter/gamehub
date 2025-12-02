import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllGames from "../Pages/AllGames";
import GamesLayout from "../Layouts/GamesLayout";
import GamesDetails from "../Pages/GamesDetails";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Error404 from "../Pages/Error404";
import Community from "../Pages/Community";
import MyProfile from "../Pages/MyProfile";
import ForgetPassword from "../Components/ForgetPassword";
import PrivateRoute from "../Context/PrivateRoute";
import UpdateProfile from "../Pages/UpdateProfile";
import AboutUs from "../Components/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error404></Error404>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        hydrateFallbackElement: <p>loading..</p>,
        loader: () => fetch("/games.json"),
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
  {
    path: "/community",
    element: <Community></Community>,
  },
  {
    path: "/myprofile",
    element: <MyProfile></MyProfile>,
  },
  {
    path: "/update-profile",
    element: <UpdateProfile></UpdateProfile>,
  },
  {
    path: "/game",
    element: <GamesLayout></GamesLayout>,
    children: [
      {
        path: "/game/allgame",
        element: <AllGames></AllGames>,
        hydrateFallbackElement: <p>loading..</p>,
        loader: () => fetch("/games.json"),
      },
      {
        path: "/game/:id",
        element: <GamesDetails></GamesDetails>,
        hydrateFallbackElement: <p>loading..</p>,
        loader: () => fetch("/games.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);
