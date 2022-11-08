import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaClock, FaMapMarkerAlt, FaSmile, FaUsers } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../layout/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const [type, setType] = useState("");
  console.log(type);
  const details = useLoaderData();
  const { description, price, rating, title, days, view,image } = details;
  const handleEvent = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user.email;
    const date = form.date.value;
    const visit = form.visit.value;
    const review = {
      name: name,
      email: email,
      date: date,
      visit: visit,
      reviewType: type,
      image: image
    };

    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
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
    <div className="hero min-h-screen bg-base-200 mt-3">
      <div className="hero-content grid lg:grid-cols-2 lg:w-11/12 mx-auto ">
        <div className="w-full">
          <h4 className="text-3xl font-bold uppercase text-center">{title}</h4>
          <p className="text-2xl font-serif text-center">
            ${price} / per person
          </p>
          <br />
          <p>{description}</p>
          <br />
          <div>
            <div className="grid grid-cols-2 gap-2">
              <p className="flex justify-center items-center">
                <FaClock />
                {days} days
              </p>
              <p className="flex justify-center items-center">
                <FaMapMarkerAlt />
                {title}
              </p>
              <p className="flex justify-center items-center">
                <FaUsers />
                {view} +
              </p>
              <p className="flex justify-center items-center">
                <FaSmile /> {rating}
              </p>
            </div>
            <div className="w-96 mx-auto my-5">
              <button className="btn btn-primary w-full">
                Purchase only ${price}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-xl font-bold text-center capitalize">
            Please enter your valuable review
          </h1>
          <form
            onSubmit={handleEvent}
            className=" grid md:grid-cols-2 gap-4 mt-4 p-5 rounded-lg "
          >
            <div className="w-full">
              <div>
                <label>Enter Your Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered w-full "
                />
              </div>
              <br />
              <div>
                <label>Your Favourite Visiting place name</label>
                <br />
                <input
                  type="text"
                  name="visit"
                  defaultValue={title}
                  className="input input-bordered w-full uppercase "
                />
              </div>
              <br />
              <div className="w-full">
              <label className="text-lg font-bold">Please select one</label>
              <br />
                <select className="btn w-full"  onChange={event => setType(event.target.value)} name="" id="">
                  <option value="Good">Good</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Super">Super</option>
                  <option value="Bad">Bad</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <div>
                <label>Enter your Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  className="input input-bordered w-full "
                />
              </div>
              <br />
              <div>
                <label>Review Date</label>
                <br />
                <input
                  type="date"
                  placeholder="Date"
                  name="date"
                  className="input input-bordered w-full "
                />
              </div>
              <br />
              <div className="flex justify-end my-10">
                <button className="btn btn-primary w-full">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
