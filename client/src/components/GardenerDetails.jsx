import React from "react";
import { FaStar } from "react-icons/fa6";

const GardenerDetails = ({ userInfo }) => {
  const {
    name,
    age,
    gender,
    status,
    experience,
    image,
    total_shared_tips,
    rating,
  } = userInfo;
  return (
    <div className="p-8 border-gray-300 border-1 rounded-3xl bg-base-300 shadow-xl max-w-sm">
      <figure>
        <img src={image} className="rounded-2xl" />
      </figure>
      <div className="mt-5 ">
        <div className="flex items-center justify-start gap-5">
          <p className="flex badge badge-outline rounded-4xl badge-success items-center gap-1">
            <span> {rating}</span>
            <FaStar className="inline text-red-700"></FaStar>
          </p>

          <p className="badge badge-soft badge-warning">{status}</p>
          <p className="badge badge-outline badge-warning">{total_shared_tips}  tips</p>
        </div>
        <p className="font-bold montserrat text-xl mt-2">{name}</p>
        <p>Age : {age}</p>
        <p>{gender}</p>

        <p>{experience}</p>
      </div>
    </div>
  );
};

export default GardenerDetails;
