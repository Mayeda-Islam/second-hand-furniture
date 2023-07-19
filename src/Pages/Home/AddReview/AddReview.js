import React, { useContext, useRef, useState } from "react";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { AuthContext } from "../../../context/Auth/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";
const AddReview = ({ refetchReviews }) => {
  const ref = useRef(null);
  const user = useContext(AuthContext);
  const isInView = useInView(ref, { once: true });
  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const review = {
      name: data.name,
      review: data.review,
      rating: rating,
      email: user.user.email,
      photoURL: user.user.photoURL,
    };

    axios
      .post("http://localhost:5000/reviews", review)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Successfully added your review");
          reset();
          refetchReviews();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div ref={ref} className="container mx-auto ">
      <h1 className="text-3xl mt-14 font-bold">Add Reviews</h1>
      <hr className="mt-8 mb-14" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="flex flex-col justify-center items-start border-4 p-14 rounded-sm"
      >
        <div className="text-4xl">
          <Rating
            onChange={handleRating}
            emptySymbol={
              <AiOutlineStar className="text-violet-500"></AiOutlineStar>
            }
            fullSymbol={<AiFillStar className=" text-pink-400"></AiFillStar>}
            fractions={2}
          />
        </div>
        <br />
        <div className="flex flex-col w-full">
          <input
            {...register("name", { required: true })}
            type="text"
            className="p-6 placeholder:text-xl"
            placeholder="Name"
            id=""
          />
          <br />
          <textarea
            {...register("review", { required: true })}
            className="p-6 placeholder:text-xl"
            placeholder="Review"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <br />
        <button
          type="submit"
          className="px-8 font-bold text-md  py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
