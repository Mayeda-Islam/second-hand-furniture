import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../../../Shared/NavBar/NavBar";

const SellerLayOut = () => {
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  bg-base-100 text-base-content">
            <li>
              <Link to={"/buyer/addProduct"}>Add Product</Link>
            </li>
            <li>
              <Link to={"/buyer/myProduct"}>My Product</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to={"/buyer/addProduct"}>Add Product</Link>
            </li>
            <li>
              <Link to={"/buyer/myProduct"}>My Product</Link>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default SellerLayOut;
