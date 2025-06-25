import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";

const ShareTip = () => {
  const { user } = use(AuthContext);

  const handleShareTip = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTip = Object.fromEntries(formData.entries());

    // total like property
    newTip.totalLiked = 0;

    // send data to db :
    fetch("https://gadening-community-server.vercel.app/gardenTips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTip),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "You have shared a new tip !",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="text-primary-content ">
      <Slide>
        <h3 className="text-3xl text-center font-bold my-8">
          Share a <span className="text-secondary">Garden tip</span>
        </h3>
      </Slide>

      <div className="card bg-base-200 mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form className="fieldset" onSubmit={handleShareTip}>
            {/*  */}
            <label className="label">Title </label>
            <input
              type="text"
              name="title"
              className="input border border-accent-content"
              placeholder="Title (e.g., “How I Grow Tomatoes Indoors”)"
              required
            />

            {/*  */}
            <label className="label">Plant Type/Topic</label>
            <input
              type="text"
              name="type"
              className="input border border-accent-content"
              placeholder="Enter a type/topic"
              required
            />

            {/*  */}
            <label className="label">Difficulty level</label>
            <select
              name="difficulty"
              defaultValue="Difficulty Level"
              className="select border border-accent-content"
              required
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
              className="input border border-accent-content"
              placeholder="Enter a Description"
            />

            {/*  */}
            <label className="label">Image URL</label>
            <input
              type="text"
              name="image"
              className="input border border-accent-content"
              placeholder="Enter an Image link"
              required
            />

            {/*  */}
            <label className="label">Category</label>
            <select
              name="category"
              defaultValue="Category"
              className="select border border-accent-content"
              required
            >
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
              defaultValue="Availability"
              className="select border border-accent-content"
              required
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
              className="input border border-accent-content"
              defaultValue={user.displayName}
              readOnly
            />

            {/*  */}
            <label className="label">Email</label>
            <input
              type="text"
              name="email"
              className="input border border-accent-content"
              defaultValue={user.email}
              readOnly
            />

            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary text-primary-content"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShareTip;
