import React from "react";
import { Link } from "react-router-dom";
import useHooks from "../../../Hooks/useHooks";

const ReviewList = ({ reviews, handleDelete }) => {
  useHooks("Review List");
  
  const { UserImage, title, email, date, rating, _id } = reviews;
  return (
    <tr>
      <td>
        <img className="w-16 h-16 rounded-full" src={UserImage} alt="" />
      </td>
      <td className="input-primary ">{email}</td>
      <td className="text-sm">{title}</td>
      <td>{date}</td>
      <td>{rating}</td>
      <td>
        <button className="btn btn-primary btn-sm rounded-none">
          <Link to={`/update/${_id}`}> Update </Link>
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(reviews)}
          className="bg-red-600 px-2 rounded-lg text-white"
        >
          X
        </button>
      </td>{" "}
    </tr>
  );
};

export default ReviewList;
