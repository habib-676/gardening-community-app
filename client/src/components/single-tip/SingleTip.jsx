import React from "react";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router";

const SingleTip = ({ tip, index }) => {
  const { _id, title, category, type, image, availability } = tip;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td>
        {category}
        <br />
        <span className="badge badge-warning badge-sm">
          Availability : {availability}
        </span>
      </td>
      <td className="text-accent">{type}</td>
      <th>
        <Link to={`/tips-details/${_id}`} className="btn btn-ghost btn-xs">
          <IoIosEye size={20} />
        </Link>
      </th>
    </tr>
  );
};

export default SingleTip;
