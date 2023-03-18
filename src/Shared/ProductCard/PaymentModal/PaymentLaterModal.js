import React from "react";
import { toast } from "react-hot-toast";
import PaymentForm from "./PaymentForm";

const PaymentLaterModal = React.forwardRef(
  ({ orderInfo, revalidator }, ref) => {
    console.log(orderInfo._id, "order id");
    const handlePlaceOrder = (data) => {
      fetch(
        `https://assignment-12-server-nine-virid.vercel.app/orders/${orderInfo._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            paymentStatus: "paid",
            transactionId: data.transactionId,
            paymentAmount: data.paymentAmount,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Payment completed successfully");
            ref.current.click();
            revalidator.revalidate();
          }
        });
    };

    return (
      <div>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-lg">
            <div className="relative my-4">
              <h1 className="text-2xl ">Pay Now</h1>
              <label
                ref={ref}
                htmlFor="my-modal-4"
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
            <PaymentForm
              orderInfo={orderInfo}
              handlePlaceOrder={handlePlaceOrder}
            ></PaymentForm>
          </div>
        </div>
      </div>
    );
  }
);

export default PaymentLaterModal;
