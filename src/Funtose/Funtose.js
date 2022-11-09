import React from "react";
import { FaClock, FaMapMarkerAlt, FaStar, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const Funtose = ({ service }) => {
  const { image, description, price, rating, title, days, view, _id } = service;
  return (
    <div class="rounded overflow-hidden shadow-lg">
      <PhotoProvider>
        <PhotoView src={image}>
        <img class="w-full" src={image} alt="Mountain"></img>
        </PhotoView>
      </PhotoProvider>
      <div class="px-6 ">
        <div class="font-bold text-xl uppercase my-2 flex items-center">
          <FaMapMarkerAlt /> {title}
        </div>
        <p class="text-gray-700 text-base">{`${description.slice(0, 100)}...`} <Link className="label-text-alt link link-hover" to={`/details/${_id}`}>Read More</Link></p>
      </div>
      <div class="flex justify-center">
        <span class=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span class=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span class=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
      <div class="grid grid-cols-2 gap-x-2">
        <span class=" rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2 flex justify-center items-center">
          <span className="text-sm mx-1">Package Price: </span> ${price}
        </span>
        <span class=" px-3 text-md font-semibold text-gray-700 flex items-center justify-center">
          Duration: <FaClock className="mx-1 text-yellow-500"/>{days} days
        </span>
        <div className="flex justify-center">
          <span class=" px-3 text-md font-semibold text-gray-700">Rate:</span>
          <span className="flex justify-center items-center text-yellow-500 text-sm">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />({rating})
          </span>
        </div>

        <span class=" px-3 text-md font-semibold text-gray-700 flex items-center justify-center gap-1">
          View: <FaUsers className="text-blue-800"/>{view} +
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

export default Funtose;
