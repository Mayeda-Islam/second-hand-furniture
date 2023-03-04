import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const FavoriteCard = ({
  fav,
  setSelectedProduct,
  refetchFavByUser,
  favProductsByUser,
}) => {
  const { data: favProduct = [] } = useQuery({
    queryKey: ["favProduct", fav.productId],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products/${fav.productId}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="my-8">
      <ProductCard
        refetchFavByUser={refetchFavByUser}
        favProductsByUser={favProductsByUser}
        setSelectedProduct={setSelectedProduct}
        product={favProduct}
      ></ProductCard>
    </div>
  );
};

export default FavoriteCard;
