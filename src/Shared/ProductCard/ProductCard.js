import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthProvider";
import { toast } from "react-hot-toast";

const ProductCard = ({
  refetchFavByUser,
  product,
  setSelectedProduct,
  favProductsByUser,
}) => {
  console.log(favProductsByUser);
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const {
    productName,
    location,
    originalPrice,
    resalePrice,
    yearsOfUse,
    img,
    _id,
  } = product;
  const handleAddToFav = (id) => {
    const favItem = {
      productId: id,
      email: userEmail,
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
          toast.success("Favorite added");
          refetchFavByUser();
        }
      });
  };
  const handleFavByUserDelete = (id) => {
    fetch(
      `https://assignment-12-server-nine-virid.vercel.app/favorite/${id}/${userEmail}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Unfavorite successfully");

          refetchFavByUser();
        }
      });
  };
  // const handleAddToFav = (id, userEmail) => {
  //   fetch(`https://assignment-12-server-nine-virid.vercel.app/products/favorite/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ userId: user._id, email: userEmail }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  //   console.log(id, userEmail);
  // };
  return (
    <div className="card justify-self-center  w-[95%] bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">
            {productName}
            <div className="badge badge-secondary">verified</div>
          </h2>
          {favProductsByUser?.find(
            (favProduct) => favProduct.productId === _id
          ) ? (
            <FcLike onClick={() => handleFavByUserDelete(_id)}></FcLike>
          ) : (
            <MdFavoriteBorder
              onClick={() => handleAddToFav(_id)}
            ></MdFavoriteBorder>
          )}
        </div>

        <div className="text-justify">
          <p>Years of use:{yearsOfUse}</p>
          <p>Location: {location}</p>
          <p>Original Price:{originalPrice} $</p>
          <p>Resale Price:{resalePrice} $</p>
        </div>
        <div className="card-actions justify-end">
          <label
            htmlFor="my-modal-5"
            className="badge badge-outline"
            onClick={() => setSelectedProduct(product)}
          >
            Buy Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
