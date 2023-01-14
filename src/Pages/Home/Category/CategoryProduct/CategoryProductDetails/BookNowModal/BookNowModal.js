import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { AuthContext } from "../../../../../../context/Auth/AuthProvider";

const BookNowModal = ({ resalePrice, productName, img }) => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleRegister = (data) => {
   const bookingInfo={
     buyerName:data.name,
     email:data.email,
     productName:data.productName,
     price:data.resalePrice,
     phone:data.phone,
     productImage:img
   }
   fetch(`http://localhost:5000/bookings`,{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(bookingInfo)
   })
   .then(res=>res.json())
   .then(data=>{
    if(data.acknowledged){
      toast.success("Successfully booked")
    }
   })
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-lg">
          <div className="relative my-4">
            <h1 className="text-2xl ">Booking Now</h1>
            <label
              htmlFor="my-modal-5"
              className=" border-2 border-primary rounded-full p-2 absolute -top-6 right-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
            {/* <label htmlFor="my-modal-5" className="btn absolute top-0 right-0">
              Yay!
            </label> */}
          </div>
          <form onSubmit={handleSubmit(handleRegister)} class="bg-white">
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                {...register("name")}
                class="pl-2 outline-none border-none"
                type="text"
                id=""
                placeholder="Full name"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>

            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                class="pl-2 outline-none border-none"
                type="text"
                placeholder="Email Address"
                defaultValue={user?.email}
                readOnly
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                {...register("productName", {})}
                defaultValue={productName}
                class="pl-2 outline-none border-none"
                type="text"
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
              <input
                {...register("resalePrice", {})}
                class="pl-2 outline-none border-none"
                defaultValue={resalePrice}
                readOnly
                type="text"
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
              <input
                {...register("phone", {
                  required: "phone number required",
                })}
                class="pl-2 outline-none border-none"
                type="text"
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
              <input
                {...register("location", {
                  required: "meeting location required",
                })}
                class="pl-2 outline-none border-none"
                type="text"
              />
            </div>

            <button
              type="submit"
              class="block w-full bg-primary mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Submit
            </button>
          </form>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookNowModal;
