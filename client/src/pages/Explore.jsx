import React from "react";
import TypeWriterCom from "../components/TypeWriterCom";
import { useLoaderData } from "react-router";
import GardenerDetails from "../components/GardenerDetails";

const Explore = () => {
  const users = useLoaderData();

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="text-center">
        <TypeWriterCom></TypeWriterCom>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-primary-content mb-10 ">
        {users.map((userInfo) => (
          <GardenerDetails
            key={userInfo._id}
            userInfo={userInfo}
          ></GardenerDetails>
        ))}
      </div>
    </div>
  );
};

export default Explore;
