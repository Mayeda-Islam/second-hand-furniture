import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import OrderInfoModal from "../../../Shared/ProductCard/PaymentModal/OrderInfoModal";
import ProductCard from "../../../Shared/ProductCard/ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";
const AdvertisingProducts = () => {
  const { user } = useContext(AuthContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { data: advertiseProducts = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await axios.get(
        `https://assignment-12-server-nine-virid.vercel.app/products?isAdvertising=true`
      );
      return res.data;
    },
  });
  const { data: favProductsByUser = [], refetch: refetchFavByUser } = useQuery({
    queryKey: ["favProductsByUser"],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-nine-virid.vercel.app/favorite/${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="my-20 container mx-auto">
      <h3 className="text-3xl my-4 font-bold">Advertising section</h3>
      <hr />
      {advertiseProducts?.length ? (
        <div
          data-aos="fade-right"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 justify-center"
        >
          {advertiseProducts.map((product) => (
            <ProductCard
              setSelectedProduct={setSelectedProduct}
              key={product._id}
              product={product}
              refetchFavByUser={refetchFavByUser}
              favProductsByUser={favProductsByUser}
            />
          ))}
        </div>
      ) : (
        <h3>No advertising Products found</h3>
      )}
      {selectedProduct ? (
        <OrderInfoModal
          setSelectedProduct={setSelectedProduct}
          product={selectedProduct}
        ></OrderInfoModal>
      ) : null}
    </section>
  );
};

export default AdvertisingProducts;
