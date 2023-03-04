import React from "react";
import { useForm } from "react-hook-form";

const PaymentForm = ({ orderInfo, handlePlaceOrder }) => {
  const { productName, price } = orderInfo;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handlePlaceOrder)} class="bg-white">
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <h3>Product Name: {productName}</h3>
      </div>

      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <h3>Price : {price}$</h3>
      </div>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <h3>Sub Total :{price}$</h3>
      </div>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <h3>Bkash payment : 01966783934</h3>
      </div>
      <div class="flex items-center border-2 mb-2 py-2 px-3 rounded-2xl">
        <input
          {...register("paymentAmount", {
            required: true,
            message: "Payment amount id required",
          })}
          placeholder="Payment amount"
          class="pl-2 outline-none border-none"
          type="text"
        />
      </div>
      {errors.paymentAmount?.type === "required" && (
        <p className="text-start">Payment amount is required</p>
      )}
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
        <input
          {...register("transactionId", {
            required: true,
            message: "transaction id required",
          })}
          class="pl-2 outline-none border-none"
          type="text"
          placeholder="Transaction Id"
        />
      </div>
      {errors.transactionId?.type === "required" && (
        <p className="text-start">Transaction id is required</p>
      )}
      <button
        type="submit"
        class="block w-full bg-primary mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
      >
        Place order
      </button>
    </form>
  );
};

export default PaymentForm;
