import React from "react";

import ourServiceImg from "../../../assests/ourservice/ourservice.png";
import ServiceCard from "./ServiceCard";
import SERVICES from "./servicesData";

const OurServices = () => {
  return (
    <div className=" mb-44 ">
      <h1 className="text-3xl mt-14 font-bold">Our Services</h1>
      <hr className="mt-8 mb-14" />
      <div
        style={{ backgroundColor: "#c9c9b6" }}
        className="relative  pt-10 lg:py-36 "
      >
        <div className="container box-border  mx-auto">
          <div className="flex justify-center lg:justify-end  h-1/4 ">
            <img
              src={ourServiceImg}
              style={{ objectFit: "cover", width: "90%" }}
              alt=""
              className="pb-36 grayscale hover:grayscale-0"
            />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap lg:flex-row gap-10 justify-center  items-center w-3/4 mx-auto -mt-36 static py-10 lg:absolute  box-border  left-10 top-2/3">
            {SERVICES.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
