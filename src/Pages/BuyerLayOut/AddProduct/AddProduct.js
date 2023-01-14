import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Auth/AuthProvider";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  //   const { user } = useContext(AuthContext);
  const handleAddProduct = (data) => {
    const addProduct = {
      category: data.category,
      condition: data.condition,
      location: data.location,
      originalPrice: data.originalPrice,
      phone: data.phone,
      productName: data.productName,
      resalePrice: data.resalePrice,
      yearsOfUse: data.yearsOfUse,
    };
    fetch(`http://localhost:5000/addProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/buyer/myProduct");
          toast.success("Add Product successfully");
        }
      });
  };
  return (
    <div>
      <div class="mt-10 ">
        <div class="mt-10 sm:mt-0">
          <div class="px-4 sm:px-0">
            <h3 class="text-xl mb-4 font-medium leading-6 text-gray-900">
              Add Product
            </h3>
          </div>
          <div class=" mx-auto w-3/4 md:grid md:grid-cols-2 md:gap-6">
            <div class="mt-5  md:col-span-2 md:mt-0">
              <form
                onSubmit={handleSubmit(handleAddProduct)}
                action="#"
                method="POST"
              >
                <div class="overflow-hidden shadow sm:rounded-md">
                  <div class="bg-primary px-4 py-5 sm:p-6">
                    <div class="grid text-start grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-4">
                        <label
                          for="Product-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Product name
                        </label>
                        <input
                          {...register("productName", {
                            required: "Product name is required",
                          })}
                          type="text"
                          autocomplete="given-name"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-4 ">
                        <label
                          for="Product Price"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Location
                        </label>
                        <input
                          {...register("location", {
                            required: "location required",
                          })}
                          type="text"
                          autocomplete="family-name"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for=""
                          class="block text-sm font-medium text-gray-700"
                        >
                          {" "}
                          Product Condition
                        </label>
                        <select
                          {...register("condition", {
                            required: "product condition require",
                          })}
                          autocomplete="country-name"
                          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none p-2 focus:ring-indigo-500 sm:text-sm"
                        >
                          <option disabled selected>
                            Product condition
                          </option>
                          <option>Excellent</option>
                          <option>Good</option>
                          <option>Fair</option>
                        </select>
                      </div>
                      <div class="col-span-6 sm:col-span-3 ">
                        <label class="block text-sm font-medium text-gray-700">
                          Phone number
                        </label>
                        <input
                          {...register("phone", {
                            required: "phone number require",
                          })}
                          type="text"
                          n
                          autocomplete="email"
                          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none p-2 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label class="block text-sm font-medium text-gray-700">
                          Product Category
                        </label>
                        <select
                          {...register("category", {
                            required: "category require",
                          })}
                          autocomplete="country-name"
                          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none p-2 focus:ring-indigo-500 sm:text-sm"
                        >
                          <option className="selected disabled:">
                            Product Category
                          </option>
                          <option>BedRoom</option>
                          <option>Kitchen</option>
                          <option>BathRoom</option>
                        </select>
                      </div>

                      <div class="col-span-6">
                        <label
                          for="street-address"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <textarea
                          type="text"
                          name="street-address"
                          id="street-address"
                          autocomplete="street-address"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label class="block text-sm font-medium text-gray-700">
                          Original Price
                        </label>
                        <input
                          type="text"
                          {...register("originalPrice", {
                            required: "Original Price require",
                          })}
                          autocomplete="address-level2"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label class="block text-sm font-medium text-gray-700">
                          Years Of Purchase
                        </label>
                        <input
                          {...register("yearsOfUse", {
                            required: "Years of use require",
                          })}
                          type="text"
                          autocomplete="address-level1"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          for="postal-code"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Resale Price
                        </label>
                        <input
                          type="text"
                          {...register("resalePrice", {
                            required: "resale price require",
                          })}
                          autocomplete="postal-code"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
