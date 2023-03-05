import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import OrderInfoModal from "../../../Shared/ProductCard/PaymentModal/OrderInfoModal";
import ProductCard from "../../../Shared/ProductCard/ProductCard";

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
      const res = await fetch(`http://localhost:5000/favorite/${user.email}`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <section className="my-20">
      <h3 className="text-3xl my-4 font-bold">Advertising section</h3>
      <hr />
      {advertiseProducts?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
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
