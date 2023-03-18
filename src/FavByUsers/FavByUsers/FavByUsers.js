import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthProvider";
import OrderInfoModal from "../../Shared/ProductCard/PaymentModal/OrderInfoModal";
import BookNowModal from "../../Shared/ProductCard/PaymentModal/PaymentModal";
import FavoriteCard from "../FavoriteCard/FavoriteCard";

const FavByUsers = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { user } = useContext(AuthContext);
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
  return (
    <div className="min-h-screen py-8 flex items-center justify-center ">
      <div className=" grid grid-cols-2">
        {favProductsByUser.map((fav) => (
          <FavoriteCard
            favProductsByUser={favProductsByUser}
            refetchFavByUser={refetchFavByUser}
            fav={fav}
            key={fav._id}
            setSelectedProduct={setSelectedProduct}
          ></FavoriteCard>
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

export default FavByUsers;
