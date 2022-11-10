import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaClock, FaEye, FaMapMarkerAlt, FaSmile} from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import useHooks from "../../../../Hooks/useHooks";
import { AuthContext } from "../../../../layout/AuthProvider";

const Details = () => {
  useHooks('Details')
  const { user } = useContext(AuthContext);
  const [type, setType] = useState("");
  console.log(type);
  const details = useLoaderData();
  const navigate = useNavigate()
  const { description, price, rating, title, days, view} = details;
  const handleEvent = (event) => {
    event.preventDefault();
    const date = new Date()
  const datePiker = date[Symbol.toPrimitive]('string').split(' ')[4] 
    const form = event.target;
    const name = form.name.value;
    const email = user.email;
    const title = form.title.value
    const url = form.photo.value;
    const review = {
      name: name,
      email: email,
      UserImage: url,
      title:title,
      date:(datePiker),
      reviewType: type,
    };

    fetch(`https://domestic-travel-server.vercel.app/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate('/review')
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
          <h4 className="text-3xl font-bold uppercase text-center flex items-center"><FaMapMarkerAlt/> {title}</h4>
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
                <FaSmile className="text-amber-500"/>{" "} {rating}
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
          <h1 className="text-xl font-bold text-center capitalize">
            Please enter your valuable review
          </h1>
          <form
            onSubmit={handleEvent}
            className=" grid md:grid-cols-2 gap-4 mt-4 p-5 rounded-lg "
          >
            <div className="w-full">
            <div className="form-control w-full">
          <label className="input-group input-group-md">
            <span className="w-1/4">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Name here"
              required
              className="input input-bordered input-md w-full"
            />
          </label>
        </div>
              <br />
              <div className="form-control w-full">
          <label className="input-group input-group-md">
            <span className="w-1/4">Place</span>
            <input
              type="text"
              name="title"
              required
             defaultValue={title}
              placeholder="Type here"
              className="input input-bordered input-md w-full uppercase"
            />
          </label>
        </div>
              <br />
              <div className="form-control w-full">
                <div className="input-group w-1/2">
                  <select
                    onChange={(e) => setType(e.target.value)}
                    className="select select-bordered w-full"
                  >
                    <option disabled selected>
                      Ratings
                    </option>
                    <option value={'Good'}>Good</option>
                    <option value={'Excellent'}>Excellent</option>
                    <option value={'Bad'}>Bad</option>
                  </select>
                  <button className="btn btn-outline" disabled>
                    Select One
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
            <div className="form-control w-full">
          <label className="input-group input-group-md">
            <span className="w-1/4">Email</span>
            <input
              type="email"
              name="email"
              required
             defaultValue={user.email}
              className="input input-bordered input-md w-full"
            />
          </label>
        </div>
              <br />
              <div className="form-control w-full">
          <label className="input-group input-group-md">
            <span className="w-40">Your Photo</span>
            <input
              type="text"
              name="photo"
              required
              placeholder="Photo here"
              className="input input-bordered input-md w-full"
            />
          </label>
        </div>
              <br />
              <div className=" my-10">
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
