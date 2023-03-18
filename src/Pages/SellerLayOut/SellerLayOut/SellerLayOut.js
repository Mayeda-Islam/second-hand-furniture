import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import NavBar from "../../../Shared/NavBar/NavBar";

const SellerLayOut = () => {
  let activeStyle = {
    color: "white",
    marginBottom: "8px",
  };
  return (
    <div>
      <div className="shadow-sm">
        <NavBar></NavBar>
      </div>

      <div className="drawer drawer-mobile shadow-2xl">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-xl">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  mt-4 text-base-content">
            <li>
              <NavLink
                to={"/seller/addProduct"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className=""
                to={"/seller/myProduct"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                My Product
              </NavLink>
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
