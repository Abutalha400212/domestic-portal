import React from 'react';
import { FaClock, FaMapMarkerAlt, FaSmile, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './service.css'
const LoadServiceData = ({service}) => {
    const {image,description,price,rating,title,days,view,_id} = service
    return (
        <div className="relative capitalize box-border w-full h-full">
       <img className="w-full" src={image} alt="" />
        <div className="absolute bottom-2 right-3 text-center text-white font-sans">
        <h4 className="flex justify-center items-center text-2xl "><FaMapMarkerAlt/>{title}</h4>
        <p className="text-xl  ">${price} / per person</p>
        </div>
      <div className=" absolute p-3 right-0 top-0 left-0 w-full h-full  opacity-0 hover:opacity-100 transition duration-300 ease-in-out text-center " style={{backgroundColor: 'rgba(251, 251, 251, 0.5)'}}>
        <h4 className="text-3xl font-bold uppercase">{title}</h4>
        <p className="text-2xl font-serif ">${price} / per person</p>
        <br />
        <p>{description.slice(0,200)}</p>
        <br />
        <div className="grid grid-cols-2 gap-2">
          <p className="flex justify-center items-center"><FaClock/>{days} days</p>
          <p className="flex justify-center items-center"><FaMapMarkerAlt/>{title}</p>
          <p className="flex justify-center items-center"><FaUsers/>{view} +</p>
          <p className="flex justify-center items-center"><FaSmile/>{rating}</p>
        </div>
        <br />
        <button  className="btn btn-success"><Link to={`/details/${_id}`}>Details</Link></button>
      </div>
      </div>
    );
};

export default LoadServiceData;