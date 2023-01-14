import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../../../Shared/ProductCard/ProductCard";

const CategoryProduct = () => {
  const categoryProduct = useLoaderData();
  return (
    <div className="h-[100vh] flex items-center justify-center ">
      <div className=" grid grid-cols-2">
        {categoryProduct.map((product) => (
          <ProductCard product={product} key={product._id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
