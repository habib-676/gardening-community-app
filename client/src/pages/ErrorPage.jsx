import React from "react";
import errorImg from "../assets/images/404 error image.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex-col flex mt-10 gap-5 justify-center items-center">
      <img src={errorImg} className="w-1/3" />
      {/* body */}
      <div className="flex justify-center gap-2 flex-col items-center">
        <h2>Page not found</h2>
        <Link to={"/"} className="btn-primary btn">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
