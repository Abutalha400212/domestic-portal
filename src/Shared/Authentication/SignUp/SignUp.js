import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assests/logo/logo.png";
import useHooks from "../../../Hooks/useHooks";
import { AuthContext } from "../../../layout/AuthProvider";
const SignUp = () => {
  useHooks("signUp");
  const navigate = useNavigate()
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name })
          .then(() => {
            form.reset();
            toast.success("User name Updated");
          })
          .catch((err) => console.log(err));
        console.log(user);
        toast.success("User Created successfully");
        navigate('/')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="">
      <div className="flex justify-center mb-1">
        <img className="w-40 " src={logo} alt="" />
      </div>
      <form
        onSubmit={handleSignUp}
        className="md:w-4/12 mx-auto  p-6 "
      >
        <h1 className="text-3xl text-center font-semibold text-green-500 my-2">
          Sign Up
        </h1>
        <div className="form-control w-full">
          <label className="label ">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            required
            placeholder="name"
            name="name"
            className="input input-bordered rounded-none "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            required
            className="input input-bordered rounded-none "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            required
            className="input input-bordered rounded-none"
          />
        </div>
        <button className="btn btn-primary w-full mt-3 rounded-none">Sign Up</button>
        <span href="/" className="label-text-alt ">
          Always have an account{" "}
          <Link to="/login" className="link link-hover underline">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
