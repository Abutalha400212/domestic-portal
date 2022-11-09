import React, { useContext, useEffect, useState } from "react";
import useHooks from "../../../Hooks/useHooks";
import { AuthContext } from "../../../layout/AuthProvider";
import LoadServiceData from "./LoadServiceData";
import './service.css'
const Services = () => {
  useHooks('Services')
  const {setLoading} = useContext(AuthContext)
const [services,setServices] = useState([])
const [limit ,setLimit] = useState(3)
console.log(limit);
useEffect(()=>{
  fetch(`http://localhost:5000/service?limit=${limit}`)
  .then(res => res.json())
  .then(data => {
    setLoading(false)
    setServices(data)})
},[limit,setLoading])
  return (
   <div className="mt-10">
    <div className="text-center mb-4 ">
      <p className="text-lg font-thin uppercase">choose your tour</p>
      <h1 className="text-4xl uppercase font-serif">Most popular tours</h1>
    </div>
    <div className="grid lg:grid-cols-3 gap-5 ">
    {services.map(service => <LoadServiceData key={service._id} service={service}/>)}
   </div>
   <div className={`w-96 my-5 mx-auto ${limit !==3  && "hidden"} `}>
   <button onClick={()=> setLimit()} className={`btn btn-outline w-full `}>Show All </button>
   </div>
   </div>
  );
};

export default Services;
