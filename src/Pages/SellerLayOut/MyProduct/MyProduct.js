import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/Auth/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user._id],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-nine-virid.vercel.app/products?sellerId=${user._id}`
      );
      const data = await res.json();
      return data;
    },
  });
  const handleDeleteProduct = (id) => {
    console.log(id);
    fetch(`https://assignment-12-server-nine-virid.vercel.app/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Deleted successfully");
        }
      });
  };

  const handleAdvertise = (product) => {
    axios
      .patch(
        `https://assignment-12-server-nine-virid.vercel.app/products/${product._id}`,
        {
          isAdvertising: true,
        }
      )
      .then((res) => {
        toast.success("Successfully added to advertising");
        refetch();
      });
  };

  return (
    <div>
      <div class="relative  overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>

              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Availability
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
              <th scope="col" class="px-6 py-3">
                advertise in home
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.productName}
                </th>
                <td class="px-6 py-4">{product.resalePrice}$</td>
                <td class="px-6 py-4">
                  {product.quantity > 0 ? "Available" : "Sold"}
                </td>
                <td class="px-2 py-4">
                  <div>
                    <button
                      className="btn btn-link"
                      onClick={() => handleDeleteProduct(product._id)}
                    >
                      delete
                    </button>
                  </div>
                </td>
                <td class="px-2 py-4">
                  <button
                    className="btn btn-link"
                    disabled={product.isAdvertising}
                    onClick={() => handleAdvertise(product)}
                  >
                    Advertise
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
