import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateTip = () => {
  const tip = useLoaderData();
  const {
    _id,
    title,
    type,
    difficulty,
    description,
    image,
    category,
    availability,
    name,
    email,
  } = tip;

  const handleUpdateTip = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTip = Object.fromEntries(formData.entries());

    // set update data
    fetch(`https://gadening-community-server.vercel.app/gardenTips/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTip),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated. Check it now !!!",
            icon: "success",
            draggable: true,
          });
        } else {
          Swal.fire({
            title: "Couldn't Update. Try it later",
            icon: "error",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="text-primary-content">
      <h3 className="font-bold text-3xl my-10 text-center">
        <span className="text-primary">Update </span> your tip
      </h3>
      <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form className="fieldset" onSubmit={handleUpdateTip}>
            {/*  */}
            <label className="label">Title </label>
            <input
              type="text"
              name="title"
              className="input border-accent-content "
              defaultValue={title}
            />

            {/*  */}
            <label className="label">Plant Type/Topic</label>
            <input
              type="text"
              name="type"
              className="input border-accent-content"
              defaultValue={type}
            />

            {/*  */}
            <label className="label">Difficulty level</label>
            <select
              name="difficulty"
              defaultValue={difficulty}
              className="select"
            >
              <option disabled={true}>Difficulty Level</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

            {/*  */}
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input border-accent-content"
              defaultValue={description}
            />

            {/*  */}
            <label className="label">Image URL</label>
            <input
              type="text"
              name="image"
              className="input border-accent-content"
              defaultValue={image}
            />

            {/*  */}
            <label className="label">Category</label>
            <select name="category" defaultValue={category} className="select">
              <option disabled={true}>Category</option>
              <option>Composting</option>
              <option> Plant Care</option>
              <option>Vertical Gardening</option>
              <option>Rainwater Harvesting</option>
              <option>Fruit Tree Care</option>
            </select>

            {/*  */}
            <label className="label">Availability</label>
            <select
              name="availability"
              defaultValue={availability}
              className="select"
            >
              <option disabled={true}>Availability</option>
              <option>Public</option>
              <option>Hidden</option>
            </select>

            {/* Read-only fields */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input border-accent-content "
              defaultValue={name}
              readOnly
            />

            {/*  */}
            <label className="label">Email</label>
            <input
              type="text"
              name="email"
              className="input border-accent-content "
              defaultValue={email}
              readOnly
            />

            <input
              type="submit"
              value="Update"
              className="btn btn-secondary text-primary-content"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTip;
