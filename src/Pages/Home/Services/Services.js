import React, { useEffect, useState } from "react";
import useHooks from "../../../Hooks/useHooks";
import LoadServiceData from "./LoadServiceData";
import "./service.css";
const Services = () => {
  useHooks("Services");
  const [services, setServices] = useState([]);
  const [limit, setLimit] = useState(3);
  console.log(limit);
  useEffect(() => {
    fetch(`https://domestic-travel-server.vercel.app/service?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [limit]);
  return (
    <div className="mt-10 px-10">
      <div className="text-center mb-4 ">
        <p className="text-lg font-thin uppercase">choose your tour</p>
        <h1 className="text-4xl uppercase font-serif">Most popular tours</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 ">
        {services.map((service) => (
          <LoadServiceData key={service._id} service={service} />
        ))}
      </div>
      <div
        className={`w-96 my-5 mx-auto ${
          limit !== 3 || services.length === 0 ? "hidden" : null
        } `}
      >
        <button
          onClick={() => setLimit()}
          className={`btn btn-outline w-full `}
        >
          Show All{" "}
        </button>
      </div>
      <div className={`w-5/12 mx-auto ${services.length > 0 && "hidden"}`}>
        <progress className="progress w-full"></progress>
      </div>
    </div>
  );
};

export default Services;
