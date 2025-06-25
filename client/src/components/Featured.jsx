import React, { use } from "react";
import GardenerDetails from "./GardenerDetails";
import { Fade } from "react-awesome-reveal";

const featuredPromise = fetch(
  "https://gadening-community-server.vercel.app/gardeners/active"
).then((res) => res.json());
const Featured = () => {
  const users = use(featuredPromise);

  return (
    <div>
      <h2 className="font-bold text-3xl text-center">
        Our {""}
        <Fade className="text-secondary inline-block" delay={1e3}>
          Active Gardeners
        </Fade>
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default Featured;
