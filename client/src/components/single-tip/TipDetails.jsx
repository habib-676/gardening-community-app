import React from "react";
import { AiFillLike } from "react-icons/ai";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const TipDetails = () => {
  const tip = useLoaderData();
  const {
    _id,
    title,
    image,
    category,
    difficulty,
    description,
    type,
    totalLiked,
  } = tip;

  const newTotal = {
    totalLiked,
  };

  const handleLikeBtn = () => {
    fetch(`https://gadening-community-server.vercel.app/gardenTips/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTotal),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Liked",
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
          },
        });
      });
  };
  return (
    <div className="text-primary-content my-10 space-y-10">
      <div className="bg-secondary py-16 text-center rounded-3xl space-y-4">
        <h2 className="text-3xl font-bold">Tip Details page </h2>
        <p className="text-sm">
          Here you can find every details you want. Press like button if you
          like this tip. Thank you.
        </p>
      </div>

      <div className="rounded-3xl bg-secondary flex justify-start p-4 md:p-8 gap-6 items-center flex-col md:flex-row">
        <img src={image} className="w-1/2 rounded-2xl" />
        <div className="text-black space-y-5">
          <p className="font-bold text-2xl">{title}</p>
          <p>Category : {category}</p>
          <p>Difficulty : {difficulty}</p>
          <p>Description : {description}</p>
          <p>Type : {type}</p>
          <p>Likes : {totalLiked}</p>
          <button className="bg-yellow-600 btn" onClick={handleLikeBtn}>
            <AiFillLike size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
