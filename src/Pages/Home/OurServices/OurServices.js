import React from "react";
import { ImLocation, ImPhone } from "react-icons/im";
import { SiMinutemailer } from "react-icons/si";
import ourServiceImg from "../../../assests/ourservice/ourservice.png";
import img1 from "../../../assests/ourservice/feedback.svg";
import img2 from "../../../assests/ourservice/standing-ovation.svg";
const OurServices = () => {
  return (
    <div className="container mx-auto mb-44  ">
      <h1 className="text-3xl mt-14 font-bold">Our Services</h1>
      <hr className="mt-8 mb-14" />
      <div className="relative">
        <img src={ourServiceImg} className="w-full h-full " alt="" />
        <div className="flex gap-10 justify-center items-center w-3/4 mx-auto absolute    left-5 right-5 top-1/2 ">
          <div
            style={{ backgroundColor: "white", height: "450px" }}
            className="w-full opacity-70  px-14 "
          >
            <div className="mt-14 mb-8">
              <img src={img2} alt="" className="w-1/4" />
            </div>
            <div className="text-start ">
              <h1 className="font-bold text-4xl my-4">Space Planning</h1>

              <p className="text-lg text-justify font-semibold">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>

          <div
            style={{ backgroundColor: "white", height: "450px" }}
            className="w-full opacity-70 h-96 px-14"
          >
            <div className="mt-14 mb-8">
              <img src={img2} alt="" className="w-1/4" />
            </div>
            <div className="text-justify ">
              <h1 className="font-bold text-4xl my-4">Space Planning</h1>

              <p className="text-lg font-semibold">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundColor: "white", height: "450px" }}
            className="w-full opacity-70 h-full px-14"
          >
            <div className="mt-14 mb-8">
              <img src={img1} alt="" className="w-1/4" />
            </div>

            <div className="text-start ">
              <h1 className="font-bold text-4xl my-4">Design Concept</h1>

              <p className="text-lg text-justify font-semibold">
                Sample text. Click to select the text box. Click again or double
                click to start editing the text. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
