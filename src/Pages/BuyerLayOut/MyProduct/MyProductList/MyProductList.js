import React from "react";

const MyProductList = ({ product }) => {
  const { productName } = product;
  console.log(productName);
  return (
    <div>
      <tr class="bg-primary border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <label for="checkbox-table-1" class="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple MacBook Pro 17"
        </th>
        <td class="px-6 py-4">{productName}</td>
        <td class="px-6 py-4">Laptop</td>
        <td class="px-6 py-4">$2999</td>
        <td class="px-6 py-4">
          <a
            href="#"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
        </td>
      </tr>
    </div>
  );
};

export default MyProductList;
