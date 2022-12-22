import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useHooks from "../../../Hooks/useHooks";

const ReviewUpdate = () => {
  useHooks("Review Update");
  const [review, setReview] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { UserImage, name, email, title } = review;

  useEffect(() => {
    fetch(`https://domestic-travel-server.vercel.app/update/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, [id]);

  const handleEvent = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const url = form.photo.value;
    const UpdeteReview = {
      name: name,
      email: email,
      UserImage: url,
      title: title,
    };
    fetch(`https://domestic-travel-server.vercel.app/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdeteReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          navigate("/review");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" bg-gray-200 p-5 rounded-xl my-5">
      <h1 className="text-xl font-bold text-center capitalize">
        you can update your review
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
                defaultValue={name}
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
                defaultValue={title}
                className="input input-bordered input-md w-full uppercase"
              />
            </label>
          </div>
          <br />
          <div className="form-control w-full"></div>
        </div>
        <div className="w-full">
          <div className="form-control w-full">
            <label className="input-group input-group-md">
              <span className="w-1/4">Email</span>
              <input
                type="email"
                name="email"
                defaultValue={email}
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
                defaultValue={UserImage}
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
  );
};
export default ReviewUpdate;
