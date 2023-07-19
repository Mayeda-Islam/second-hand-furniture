import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const Review = ({ review }) => {
  const {
    name,
    photoURL,
    email,
    dateAndTime,
    rating,
    review: userReview,
  } = review;
  return (
    <div className="container mx-auto">
      <div className="shadow-lg p-8 rounded-md my-6">
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <img
              src={photoURL}
              width="50px"
              className="rounded-full "
              alt=""
              srcset=""
            />
            <div className="flex flex-col items-start mx-4">
              <h1 className="text-xl  uppercase font-bold text-zinc-600 ">
                {name}
              </h1>
              <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {dateAndTime}
              </h1>
            </div>
          </div>

          <Rating
            className="text-xl"
            initialRating={rating}
            readonly
            emptySymbol={
              <AiOutlineStar className="text-violet-500"></AiOutlineStar>
            }
            fullSymbol={<AiFillStar className=" text-pink-400"></AiFillStar>}
          />
        </div>
        <div className=" items-start mt-4">
          <p className="w-2/3 text-start ml-16">{userReview}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
