import React from "react";

const ReviewList = ({ review, handleDelete }) => {
  const { image, name, email, date, reviewType, _id } = review;
  return (
      <tr>
        <td>
          <img className="w-20 h-20 rounded-full" src={image} alt="" />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{date}</td>
        <td>{reviewType}</td>
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
