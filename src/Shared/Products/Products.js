import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/Auth/AuthProvider";
import OrderInfoModal from "../ProductCard/PaymentModal/OrderInfoModal";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { user } = useContext(AuthContext);
  console.log(Products);
  const handleAddToFav = (productId) => {
    if (user.userEmail) {
      const favItem = {
        productId,
        email: user.userEmail,
      };
      fetch(`https://assignment-12-server-nine-virid.vercel.app/favorite`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(favItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            // setToggle(!toggle);
          }
          console.log(data);
          // favByUser();
        });
    } else {
      toast("You have to login first");
    }
  };

  const { data: favProductsByUser = [], refetch: refetchFavByUser } = useQuery({
    queryKey: ["favProductsByUser"],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-nine-virid.vercel.app/favorite/${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" grid grid-cols-2">
        {products?.map((product) => (
          <ProductCard
            refetchFavByUser={refetchFavByUser}
            favProductsByUser={favProductsByUser}
            handleAddToFav={handleAddToFav}
            setSelectedProduct={setSelectedProduct}
            product={product}
            key={product._id}
          ></ProductCard>
        ))}
      </div>
      {selectedProduct ? (
        <OrderInfoModal
          setSelectedProduct={setSelectedProduct}
          product={selectedProduct}
        ></OrderInfoModal>
      ) : null}
    </div>
  );
};

export default Products;
