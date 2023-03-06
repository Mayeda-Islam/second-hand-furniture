import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { name, img, _id } = category;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={img} className="w-full" alt="Shoes" />
        </figure>
        <div className="card-body ">
          <div className="card-actions flex flex-col mt-8">
            <h2 className="card-title">{name}</h2>
            <button className="btn btn-primary">
              <Link to={`/products/category/${_id}`}>Show more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
