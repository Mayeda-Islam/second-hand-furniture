import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from '../Home/Category/CategoryProduct/CategoryProductDetails/BookNowModal/BookNowModal';
import BookingOrders from './BookingOrders';

const Orders = () => {
    const bookings=useLoaderData()
    return (
        <div className='container mx-auto'>
             <div className=" overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                {/* <label>
                  <input type="checkbox" className="checkbox" />
                </label> */}
              </th>
              <th>Name</th>
              <th>Product</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
                bookings.map(booking=><BookingOrders booking={booking} key={booking._id}></BookingOrders>)
            }
            </tbody>
        </table>
      </div>



            
        </div>
    );
};

export default Orders;