import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import AddReview from "../AddReview/AddReview";
import Review from "./Review";

const AllReviews = () => {
  const { data: reviews = [], refetch: refetchReviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/reviews");
      const data = await res.data;
      console.log(data);
      return data;
    },
  });
  return (
    <div className="container mx-auto">
      <AddReview refetchReviews={refetchReviews}></AddReview>
      <h1 className="text-3xl mt-14 font-bold">All Reviews About Us</h1>
      <hr className="mt-8 mb-14" />
      <div>
        {reviews?.map((review) => (
          <Review review={review} key={review?._id}></Review>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
