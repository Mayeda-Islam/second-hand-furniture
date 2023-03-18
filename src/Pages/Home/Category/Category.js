import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import AOS from "aos";
import "aos/dist/aos.css";
const Category = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-nine-virid.vercel.app/categories`
      );
      const data = await res.json();
      return data;
    },
  });
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" className="container  py-8 mx-auto items-center ">
      <h1 className="text-center font-bold py-4 mt-5 text-3xl dark:text-white">
        Product Category
      </h1>
      <hr />
      <div
        data-aos="fade-up"
        className="grid grid-cols-1  lg:grid-cols-2 gap-12  mt-12"
      >
        {categories.map((category) => (
          <CategoryItem category={category} key={category._id}></CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default Category;
