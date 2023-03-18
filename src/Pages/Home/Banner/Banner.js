import React from "react";
import img1 from "../../../assests/banner/banner-1.png";
import img2 from "../../../assests/banner/banner-2.png";
import img3 from "../../../assests/banner/banner-3.png";
const SLIDES = [];
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img2} className="w-full opacity-100" alt="" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>

            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute translate-x-1/2 -translate-y-1/2  backdrop-opacity-30 backdrop-invert bg-primary/30 p-20 text-white top-1/2 right-1/2">
            <h1 className="text-4xl font-medium text-white">
              Second Hand Furniture
            </h1>
            <p className="text-xl font-medium text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              nihil laboriosam placeat facilis esse quidem adipisci molestiae
              amet cupiditate ex, voluptates at ea laudantium fugiat
              consequuntur ipsa! Doloremque, excepturi eveniet.
            </p>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img3} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div
            className="absolute 
           backdrop-opacity-30 backdrop-invert bg-primary/30 p-20 text-white top-1/2 right-1/2"
          >
            <h1 className="text-4xl font-medium text-white">
              Second Hand Furniture
            </h1>
            <p className="text-xl font-medium text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              nihil laboriosam placeat facilis esse quidem adipisci molestiae
              amet cupiditate ex, voluptates at ea laudantium fugiat
              consequuntur ipsa! Doloremque, excepturi eveniet.
            </p>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img1} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute translate-x-1/2 -translate-y-1/2  backdrop-opacity-30 backdrop-invert bg-primary/30 p-20 text-white top-1/2 right-1/2">
            <h1 className="text-4xl font-medium text-white">
              Second Hand Furniture
            </h1>
            <p className="text-xl font-medium text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              nihil laboriosam placeat facilis esse quidem adipisci molestiae
              amet cupiditate ex, voluptates at ea laudantium fugiat
              consequuntur ipsa! Doloremque, excepturi eveniet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
