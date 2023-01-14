import React from "react";

const BookingOrders = ({ booking }) => {
  const { buyerName, email, productName, price, phone, productImage } = booking;
  return (
    <tr>
      <th>
        <label>{/* <input type="checkbox" className="checkbox" /> */}</label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={productImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{buyerName}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {productName}
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>{price} $</td>
      <th>
        <button className="btn btn-ghost btn-xs">pay</button>
      </th>
    </tr>
  );
};

export default BookingOrders;
