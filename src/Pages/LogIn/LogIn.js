import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const handleRegister = (data) => {
    alert("working");
    console.log(data);
  };
  return (
    <div className=" h-[100vh] container mx-auto bg-white flex items-center justify-center">
      <div class="flex  md:w-1/2 lg:w-full justify-center py-10 items-center bg-white">
        <div>
          <h1 class="text-gray-800 font-bold text-2xl mb-4">Sign In!</h1>
          <form onSubmit={handleSubmit(handleRegister)} class="bg-white">
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
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                {...register("password", {
                  required: "Password id required",
                  minLength: {
                    value: 6,
                    message: "Password should be 6 characters",
                  },
                })}
                class="pl-2 outline-none border-none"
                type="text"
                placeholder="Password"
              />
            </div>
            <span class="text-sm ml-2 text-start hover:text-blue-500 cursor-pointer">
              Forgot Password ?
            </span>
            <button
              type="submit"
              class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <span className="text-sm ml-2">
              Didn't have an account?
              <span className="text-sm ml-2 text-start hover:text-blue-500 cursor-pointer">
                <Link to={"/signup"}>Please register</Link>
              </span>
            </span>
          </form>
          <button
          
            class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
