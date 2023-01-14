import React from "react";
import BookNowModal from "./BookNowModal/BookNowModal";

const ProductCard = ({ product }) => {
  const { productName, location, originalPrice, resalePrice, yearsOfUse, img } =
    product;
  return (
    <div>
      <div className="card ml-8 w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {productName}
            <div className="badge badge-secondary">verified</div>
          </h2>
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
