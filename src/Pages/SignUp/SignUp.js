import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthProvider";

const SignUp = () => {
  const [role, setRole] = useState("buyer");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  console.log(role);
  const { signUp } = useContext(AuthContext);
  function onChangeValue(event) {
    setRole(event.target.value);
    console.log(event.target.value);
  }
  const handleRegister = (data) => {
    signUp(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        const newUser = {
          displayName: data.displayName,
          role,
          email: data.email,
        };
        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            fetch(`http://localhost:5000/jwt`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.status) {
                  localStorage.setItem("accessToken", data.token);
                  navigate("/");
                  toast.success("Sign up successfully");
                }
              });
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div>
      <div className=" h-[100vh] container mx-auto bg-white flex items-center justify-center">
        <div class="flex  md:w-1/2 lg:w-full justify-center py-10 items-center bg-white">
          <div>
            <form onSubmit={handleSubmit(handleRegister)} class="bg-white">
              <h1 class="text-gray-800 font-bold text-2xl mb-8">Sign Up!</h1>

              <div
                class="flex  items-center justify-between my-4"
                onChange={onChangeValue}
              >
                <div>
                  <input
                    type="radio"
                    value="buyer"
                    name="role"
                    checked={role === "buyer"}
                  />
                  Buyer
                </div>
                <div>
                  <input
                    type="radio"
                    value="seller"
                    name="role"
                    checked={role === "seller"}
                  />{" "}
                  Seller
                </div>
              </div>
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
                  {...register("displayName")}
                  class="pl-2 outline-none border-none"
                  type="text"
                  id=""
                  placeholder="Full name"
                />
              </div>
              {/* <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
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
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
                <input
                  {...register("displayName")}
                  class="pl-2 outline-none border-none"
                  type="text"
                  id=""
                  placeholder="Username"
                />
              </div> */}
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
                  {...register("email")}
                  class="pl-2 outline-none border-none"
                  type="text"
                  id=""
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
                  {...register("password")}
                  class="pl-2 outline-none border-none"
                  type="text"
                  id=""
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Sign Up
              </button>
              <span className="text-sm ml-2">
                Already have an account?
                <span className="text-sm ml-2 text-start hover:text-blue-500 cursor-pointer">
                  <Link to={"/login"}>Log In</Link>
                </span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
