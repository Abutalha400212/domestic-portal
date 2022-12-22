import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useHooks from "../../Hooks/useHooks";

const AddService = () => {
  useHooks("AddService");
  const navigate = useNavigate();

  const [duration, setDuration] = useState(0);
  const [ratings, setRatings] = useState("");
  const handleAddToService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const price = form.price.value;

    const addService = {
      title: name,
      image: photo,
      price: parseInt(price),
      view: 20,
      rating: parseInt(ratings),
      description: description,
      days: parseInt(duration),
    };
    fetch("https://domestic-travel-server.vercel.app/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/home");
          form.reset();
          toast.success(data.message);
        }
      })
      .catch((err) => console.log(err));
    console.log(addService);
  };
  return (
    <div className="lg:w-9/12 mx-auto mt-4  p-10 rounded-3xl font-semibold">
      <h1 className="text-3xl font-semibold text-center mb-10">
        You Can Add a Service of Tour{" "}
      </h1>
      <form onSubmit={handleAddToService}>
        <div className=" grid lg:grid-cols-2 gap-x-5 gap-y-3">
          <div className="form-control w-full rounded-none">
            <label className="">
              <span className="w-1/2">Name of Place</span>
              <input
                type="text"
                name="name"
                required
                placeholder="place name here"
                className="input input-bordered input-md w-full rounded-none"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="">
              <span className="w-1/2">Place Photo Url</span>
              <input
                type="text"
                name="photo"
                required
                placeholder="photo url here"
                className="input input-bordered input-md w-full rounded-none"
              />
            </label>
          </div>
          <div className="form-control rounded-none">
            <label className="">
              <span className="w-52 capitalize">per person</span>
              <input
                type="text"
                name="price"
                required
                placeholder="10"
                className="input  w-full rounded-none"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="">
              <span>Description</span>
              <textarea
                className="textarea textarea-bordered w-full rounded-none"
                name="description"
                required
                placeholder="Description"
              ></textarea>
            </label>
          </div>
          <div className="form-control w-full">
            <div className="">
            <label className="">
              <span>Select Preferable Review </span>
              <select
                onChange={(e) => setRatings(e.target.value)}
                className="select select-bordered w-full rounded-none"
              >
                <option disabled selected>
                  Ratings
                </option>
                <option value={4}>Good</option>
                <option value={5}>Excellent</option>
                <option value={1}>Bad</option>
              </select>
            </label>
              
              
            </div>
          </div>
          <div className="form-control w-full">
            <div className="">
            <label className="">
              <span>Time Duration</span>
              <select
                onChange={(e) => setDuration(e.target.value)}
                name="duration"
                className="select select-bordered w-full rounded-none"
              >
                <option disabled selected>
                  Duration
                </option>
                <option value={20}>20</option>
                <option value={10}>10</option>
                <option value={30}>30</option>
                <option value={5}>5</option>
              </select>
            </label>
              
            </div>
          </div>
        </div>
        <div className="w-5/12 mx-auto my-4">
          <button className="btn btn-success text-white w-full rounded-none ">Add To Service</button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
