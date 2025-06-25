import React from "react";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MySingleTip = ({ myTip, index, myData, setMyData }) => {
  const navigate = useNavigate();
  const { _id, title, image, category, type, availability } = myTip;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://gadening-community-server.vercel.app/gardenTips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = myData.filter((tip) => tip._id !== id);
              setMyData(remaining);
            }
          });
      }
    });
  };
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
        <span className="badge badge-warning badge-outline badge-sm">
          Availability :{availability}
        </span>
      </td>
      <td>{type}</td>
      <th className="space-x-1">
        <button
          onClick={() => {
            navigate(`/update-tip/${_id}`);
          }}
          className="btn-circle bg-accent btn"
        >
          <BiSolidPencil />
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn-circle bg-accent btn"
        >
          <FaTrash />
        </button>
      </th>
    </tr>
  );
};

export default MySingleTip;
