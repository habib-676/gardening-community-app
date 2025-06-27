import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../components/authentications/SignIn";
import SignUp from "../components/authentications/SignUp";
import PrivateRoute from "./PrivateRoute";
import ShareTip from "../pages/ShareTip";
import BrowseTips from "../pages/BrowseTips";
import Loading from "../pages/Loading";
import TipDetails from "../components/single-tip/TipDetails";
import MyTips from "../pages/MyTips";
import UpdateTip from "../pages/UpdateTip";
import ErrorPage from "../pages/ErrorPage";
import Explore from "../pages/Explore";
import Dashboard from "../pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "share-tip",
        element: (
          <PrivateRoute>
            <ShareTip></ShareTip>
          </PrivateRoute>
        ),
      },
      {
        path: "browse-tips",
        Component: BrowseTips,
        loader: () =>
          fetch("https://gadening-community-server.vercel.app/gardenTips"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "tips-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://gadening-community-server.vercel.app/gardenTips/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <TipDetails></TipDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "my-tips",
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://gadening-community-server.vercel.app/gardenTips"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "update-tip/:id",
        element: (
          <PrivateRoute>
            <UpdateTip></UpdateTip>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://gadening-community-server.vercel.app/gardenTips/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "explore",
        Component: Explore,
        loader: () =>
          fetch("https://gadening-community-server.vercel.app/gardeners"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
        loader: () =>
          fetch("https://gadening-community-server.vercel.app/gardenTips"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: SignIn,
      },
      {
        path: "/auth/register",
        Component: SignUp,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
