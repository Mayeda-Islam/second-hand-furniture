import React, { useRef, useState } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import PaymentLaterModal from "../../Shared/ProductCard/PaymentModal/PaymentLaterModal";
import PaymentModal from "../../Shared/ProductCard/PaymentModal/PaymentModal";
import BookingOrders from "./BookingOrders";

const Orders = () => {
  const paymentRef = useRef();
  const orders = useLoaderData();
  const revalidator = useRevalidator();
  const [selectedOrder, setSelectedOrder] = useState({});
  console.log("selected order", selectedOrder);
  const handlePaymentButton = (orderInfo) => {
    setSelectedOrder(orderInfo);
    paymentRef.current.click();
  };
  return (
    <div className="container mx-auto">
      <div className=" overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product</th>
              <th>Price</th>
              <th>Payment </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <BookingOrders
                handlePaymentButton={handlePaymentButton}
                orderInfo={order}
                key={order._id}
              ></BookingOrders>
            ))}
          </tbody>
        </table>
      </div>
      <PaymentLaterModal
        ref={paymentRef}
        revalidator={revalidator}
        orderInfo={selectedOrder}
      ></PaymentLaterModal>
    </div>
  );
};

export default Orders;
