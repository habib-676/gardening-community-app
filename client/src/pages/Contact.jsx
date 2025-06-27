import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";

const Contact = () => {
  const { user } = use(AuthContext);
  return (
    <div className="text-primary-content my-14">
      <h1 className="font-bold text-3xl text-center">Contact us </h1>
      <div className="card bg-base-200 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-10">
        <div className="card-body">
          <form className="fieldset">
            <label className="label">Full name</label>
            <input
              type="text"
              className="input border-accent-content"
              defaultValue={user.displayName}
              name="name"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input border-accent-content"
              defaultValue={user.email}
              name="email"
              required
            />
            <label className="label">Phone Number</label>
            <input
              type="number"
              className="input border-accent-content"
              placeholder="Enter phone number"
              name="phone"
              required
            />
            <label className="label">Comment</label>
            <input
              type="text"
              className="input border-accent-content"
              name="comment"
              required
            />

            <input
              className="btn btn-secondary text-primary-content"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
