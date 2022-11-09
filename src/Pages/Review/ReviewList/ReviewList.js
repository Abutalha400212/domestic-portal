import React from "react";
import { Link } from "react-router-dom";
import useHooks from "../../../Hooks/useHooks";


const ReviewList = ({ review, handleDelete }) => {
  useHooks('Review List')
  const { UserImage, name, email, date, reviewType, _id } = review;
  return (
    <tr>
      <td>
        <img className="w-20 h-20 rounded-full" src={UserImage} alt="" />
      </td>
      <td className="input-primary uppercase">{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{reviewType}</td>
      <td>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
         <Link to={`/update/${_id}`}> Update </Link>
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-600 px-2 rounded-lg text-white"
        >
          X
        </button>
      </td>{" "}
    </tr>
  );
};

export default ReviewList;
