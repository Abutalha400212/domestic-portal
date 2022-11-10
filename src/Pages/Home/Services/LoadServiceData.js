import React from "react";
import { FaClock, FaEye, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const LoadServiceData = ({ service }) => {
  const { image, description, price, rating, title, days, view, _id } = service;
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <PhotoProvider>
        <PhotoView src={image}>
          <img className="w-full" src={image} alt="Mountain"></img>
        </PhotoView>
      </PhotoProvider>
      <div className="px-6 ">
        <div className="font-bold text-xl uppercase my-2 flex items-center">
          <FaMapMarkerAlt /> {title}
        </div>
        <p className="text-gray-700 text-base">
          {`${description.slice(0, 100)}...`}{" "}
          <Link
            className="label-text-alt link link-hover"
            to={`/details/${_id}`}
          >
            Read More
          </Link>
        </p>
      </div>
      <div className="flex justify-center">
        <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
      <div className="grid grid-cols-2 gap-x-2">
        <span className=" rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2 flex justify-center items-center">
          <span className="text-sm mx-1">Package Price: </span> ${price}
        </span>
        <span className=" px-3 text-md font-semibold text-gray-700 flex items-center justify-center">
          Duration: <FaClock className="mx-1 text-yellow-500" />
          {days} days
        </span>
        <div className="flex justify-center">
          <span className=" px-3 text-md font-semibold text-gray-700">
            Rate:
          </span>
          <span className="flex justify-center items-center text-yellow-500 text-sm">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />({rating})
          </span>
        </div>

        <span className=" px-3 text-md font-semibold text-gray-700 flex items-center justify-center gap-1">
          View: <FaEye className="text-blue-800" />
          {view} +
        </span>
      </div>
      <div className="w-5/12 mx-auto my-3">
        <button className="btn btn-primary w-full">
          <Link to={`/details/${_id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default LoadServiceData;
