import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assests/logo/logo.png";
import { AuthContext } from "../../layout/AuthProvider";
const NavBar = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success("User LogOut Successfully");
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  const navItem = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/addservice">Add Service</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  const buttonItem = (
    <>
      {user?.uid ? (
        <button className="btn btn-primary btn-sm md:btn-md" onClick={handleLogOut}>
          Log Out
        </button>
      ) : (
        <>
          <button className="btn btn-primary mr-3 btn-sm md:btn-md">
            <Link to="/signup">Sign Up</Link>
          </button>
          <button className="btn btn-primary btn-sm md:btn-md">
            <Link to="/login">Login</Link>
          </button>
        </>
      )}
    </>
  );
  return (
    <div className=" md:px-16 md:py-3 navbar">
      <div className="lg:navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32 text-sm"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/">
          <img className="md:w-28 w-16" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal text-white text-center font-semibold">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end w-[100%] md:w-[50%]">{buttonItem}</div>
    </div>
  );
};

export default NavBar;
