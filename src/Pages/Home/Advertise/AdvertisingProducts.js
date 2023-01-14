import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ProductCard from "../../../Shared/ProductCard/ProductCard";

const AdvertisingProducts = () => {
  const { data: advertiseProducts = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await axios.get(
        `https://assignment-12-server-nine-virid.vercel.app/products?isAdvertising=true`
      );
      return res.data;
    },
  });
  return (
    <section>
      <h3 className="text-3xl my-4 font-bold">Advertising section</h3>
      {advertiseProducts?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {advertiseProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <h3>No advertising Products found</h3>
      )}
    </section>
  );
};

export default AdvertisingProducts;
