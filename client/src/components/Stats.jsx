import React from "react";
import expertImg from "../assets/images/expert.jpg";
import gardenerImg from "../assets/images/gardener.jpg";
import arrowsImg from "../assets/images/guide-arrows.jpg";
import usersImg from "../assets/images/user-icon.jpg";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">
        We Provide the Best Garden Tips & Support
      </h2>
      <p className="text-secondary-content text-center my-6">
        Our platform helps you grow a beautiful garden with expert tips,
        community support,
        <br /> and easy-to-follow guides — all in one place.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 mb-10">
        <div className="bg-accent-content rounded-3xl px-11 py-8 flex flex-col justify-between items-start gap-4">
          <img
            src={arrowsImg}
            className="w-[70px] h-[70px] rounded-2xl object-cover"
          />
          <h2 className="font-extrabold text-white text-5xl">
            <CountUp end={150} duration={20}></CountUp>+
          </h2>

          <p className="font-semibold text-lg text-gray-400">
            Gardening Guides
          </p>
        </div>
        <div className="bg-accent-content rounded-3xl px-11 py-8 flex flex-col justify-between items-start gap-4">
          <img
            src={gardenerImg}
            className="w-[70px] h-[70px] rounded-2xl object-cover"
          />
          <h2 className="font-extrabold text-white text-5xl">
            <CountUp end={300} duration={20}></CountUp>+
          </h2>
          <p className="font-semibold text-lg text-gray-400">Happy Gardeners</p>
        </div>
        <div className="bg-accent-content rounded-3xl px-11 py-8 flex flex-col justify-between items-start gap-4">
          <img
            src={usersImg}
            className="w-[70px] h-[70px] rounded-2xl object-cover"
          />
          <h2 className="font-extrabold text-white text-5xl">
            <CountUp end={580} duration={20}></CountUp>+
          </h2>
          <p className="font-semibold text-lg text-gray-400">Tips shared</p>
        </div>
        <div className="bg-accent-content rounded-3xl px-11 py-8 flex flex-col justify-between items-start gap-4">
          <img
            src={expertImg}
            className="w-[70px] h-[70px] rounded-2xl object-cover"
          />
          <h2 className="font-extrabold text-white text-5xl">
            <CountUp end={50} duration={20}></CountUp>+
          </h2>
          <p className="font-semibold text-lg text-gray-400">
            Expert Contributors
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
