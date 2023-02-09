import React from "react";

const MyProductList = ({ product, handleDeleteProduct }) => {
  const { productName, quantity } = product;

  return (
    <div>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {product.productName}
        </th>
        <td class="px-6 py-4">{product.resalePrice}$</td>
        <td class="px-6 py-4"></td>
        <td class="px-6 py-4">
          <button onClick={() => handleDeleteProduct(product._id)}>
            delete
          </button>
        </td>
        <td class="px-6 py-4 text-right">
          <button>Advertise</button>
        </td>
      </tr>
    </div>
  );
};

export default MyProductList;
