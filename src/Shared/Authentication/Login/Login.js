import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useHooks from "../../../Hooks/useHooks";
import { AuthContext } from "../../../layout/AuthProvider";

const Login = () => {
  useHooks("login");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const { existUser, googlePopup } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googlePopup().then((result) => {
      const user = result.user;
      fetch("https://domestic-travel-server.vercel.app/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("userToken", data.token);
          toast.success("Google Login Successfully");
          navigate(from, { replace: true });
        });
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    existUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      fetch("https://domestic-travel-server.vercel.app/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("userToken", data.token);
          toast.success("Login successfully");
          navigate(from, { replace: true });
        });

      console.log(user);
    });
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
          className="input input-bordered rounded-none"
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
          className="input input-bordered rounded-none"
        />
        <label className="label">
          <a href="/" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6 rounded-none">
        <button className="btn btn-primary rounded-none">Login</button>
      </div>
      <span href="/" className="label-text-alt ">
        Don't have an account?{" "}
        <Link to="/signup" className="link link-hover underline">
          Sign Up
        </Link>
      </span>
      <div className="mt-3">
        <h1 className="text-md font-mono text-center capitalize rounded-none">
          Sign in With Social
        </h1>
        <div className="text-2xl">
          <FaGoogle
            onClick={handleGoogleLogin}
            className="w-full btn btn-square p-2 text-white rounded-none"
          />
        </div>
      </div>
    </form>
  );
};

export default Login;
