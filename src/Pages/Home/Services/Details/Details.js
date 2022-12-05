import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FaClock,
  FaEye,
  FaMapMarkerAlt,
  FaSmile,
  FaStar,
} from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import useHooks from "../../../../Hooks/useHooks";
import { AuthContext } from "../../../../layout/AuthProvider";

const Details = () => {
  useHooks("Details");
  const { user } = useContext(AuthContext);
  const [type, setType] = useState("");
  const numberRatings = [
    {
      id: 1,
      value: 1,
    },
    {
      id: 2,
      value: 2,
    },
    {
      id: 3,
      value: 3,
    },
    {
      id: 4,
      value: 4,
    },
    {
      id: 5,
      value: 5,
    },
  ];
  const [allReviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        if(data.success){
          setReviews(data.data)
        }
        });
  }, []);
  const details = useLoaderData();
  const { description, price, rating, title, days, view } = details;
  const handleEvent = (event) => {
    event.preventDefault();
    const date = new Date();
    const datePiker = date[Symbol.toPrimitive]("string").split(" ")[4];
    const form = event.target;
    const title = form.review.value;
    const url =
      user.photoURL === null
        ? "https://placeimg.com/192/192/people"
        : user.photoURL;
    const reviews = {
      UserImage: url,
      email: user.email,
      title: title,
      date: datePiker,
      rating: type,
    };
    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          form.reset();
          toast.success(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex lg:flex-row gap-10">
        <div className="lg:w-5/12 mx-auto min-h-screen bg-slate-300 p-5 rounded-2xl">
          <h4 className="text-3xl font-bold uppercase text-center flex items-center">
            <FaMapMarkerAlt /> {title}
          </h4>
          <p className="text-2xl font-serif capitalize">
            ${price} / per person
          </p>
          <br />
          <p className="text-justify">{description}</p>
          <br />
          <div>
            <div className="grid grid-cols-2 gap-2 uppercase text-lg">
              <p className="flex justify-center items-center">
                <FaClock className="" />
                {days} days
              </p>
              <p className="flex justify-center items-center">
                <FaMapMarkerAlt className="text-blue-800" />
                {title}
              </p>
              <p className="flex justify-center items-center">
                <FaEye className="text-blue-800" />
                {view} +
              </p>
              <p className="flex justify-center items-center">
                <FaSmile className="text-amber-500" /> {rating}
              </p>
            </div>
            <div className=" my-5">
              <button className="btn btn-primary w-full">
                Purchase only ${price}
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 mx-auto bg-gray-200 p-5 rounded-xl">
          <div>
            {
              allReviews.map((rev) => {
                return (
                  <div key={rev.id_} className="bg-lime-200 text-black p-5">
                    <h1>Review Rating : {rev.rating}</h1>
                    <p>Description: {rev.title}</p>
                  </div>
                );
              })}
          </div>
          <h1 className="text-xl font-bold text-center capitalize">
            Please enter your review
          </h1>
          <form onSubmit={handleEvent} className=" grid grid-cols-1 gap-4  ">
            <div className="flex  justify-center text-3xl">
              {numberRatings.map((ratings) => (
                <span
                  key={ratings.id}
                  onClick={() => setType(ratings.value)}
                  className={`${
                    type >= ratings.value ? "text-blue-800" : "text-white"
                  }`}
                >
                  <FaStar />
                </span>
              ))}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Review</span>
              </label>
              <textarea
                type="text"
                name="review"
                className="textarea textarea-bordered h-24 w-full"
                placeholder="Review Here"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <input
                className="btn btn-primary w-1/2"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
