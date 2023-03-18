import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const CategoryItem = ({ category }) => {
  const { name, img, _id } = category;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Link to={`/products/category/${_id}`}>
      <div
        data-aos="fade-up"
        className="card text-justify  opacity-80 hover:opacity-100  shadow-xl image-full"
      >
        <figure>
          <img src={img} className="w-full" alt="Shoes" />
        </figure>
        <div className="card-body ">
          <div className="card-actions lg:relative flex flex-col mt-8">
            <h2 className="card-title text-4xl">{name}</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus maiores modi consequatur sed unde laudantium fuga,
              doloribus, cupiditate ea doloremque saepe explicabo, aperiam
              nesciunt quod commodi facilis eum eligendi odit?
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
