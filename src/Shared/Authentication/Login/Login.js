import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <form
      onSubmit={handleLogin}
      className="md:w-4/12 mx-auto p-6 rounded-lg mt-10"
    >
      <h1 className="text-xl font-bold text-center text-green-700">
        User Login
      </h1>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          className="input input-bordered "
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
          className="input input-bordered"
        />
        <label className="label">
          <a href="/" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
      <span href="/" className="label-text-alt ">
           Don't have an account? <Link to='/signup' className='link link-hover underline'>Sign Up</Link>
          </span>
    </form>
  );
};

export default Login;
