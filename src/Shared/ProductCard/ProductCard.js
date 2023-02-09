import React from "react";
import BookNowModal from "./BookNowModal/BookNowModal";
import { MdFavoriteBorder } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthProvider";
const ProductCard = ({ product }) => {
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
  const handleAddToFav = (id, userEmail) => {
    fetch(`http://localhost:5000/products/favorite/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userId: user._id, email: userEmail }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(id, userEmail);
  };
  return (
    <div>
      <div className="card ml-8 w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">
              {productName}
              <div className="badge badge-secondary">verified</div>
            </h2>
            <div
              onClick={() => handleAddToFav(_id, userEmail)}
              className="text-xl"
            >
              <MdFavoriteBorder></MdFavoriteBorder>
            </div>
          </div>

          <div className="text-justify">
            <p>Years of use:{yearsOfUse}</p>
            <p>Location: {location}</p>
            <p>Original Price:{originalPrice} $</p>
            <p>Resale Price:{resalePrice} $</p>
          </div>
          <div className="card-actions justify-end">
            <label htmlFor="my-modal-5" className="badge badge-outline">
              Buy Now
            </label>
          </div>
        </div>
        <BookNowModal
          productName={productName}
          img={img}
          location={location}
          resalePrice={resalePrice}
        ></BookNowModal>
      </div>
    </div>
  );
};

export default ProductCard;
