import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div
      style={{ backgroundColor: "white", height: "400px" }}
      className="lg:w-3/4 px-14"
    >
      <div className="mt-14 mb-8">
        <img src={service.icon} alt="" className="w-1/4 " />
      </div>
      <div className="text-justify ">
        <h1 className="font-bold text-start lg:text-center text-4xl  my-4">
          {service.title}
        </h1>

        <p className="text-lg font-semibold">{service.service}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
