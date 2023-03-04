import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";
import { AuthContext } from "../../context/Auth/AuthProvider";
import avatar from "../../assests/avatar.svg";
const NavBar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="container mx-auto ">
      <div className="navbar bg-primary">
        <div className="flex-1">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={1}>
                <Link to="blogs">Blogs</Link>
                <ul className="p-2">
                  <li>
                    <Link to="/home">home</Link>
                  </li>
                  {user?.role === "admin" && (
                    <li>
                      <Link to={"/alluser"}>Alluser</Link>
                    </li>
                  )}
                </ul>
              </li>

              <li tabIndex={0}>
                <a>
                  Option
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Seller</a>
                  </li>
                  <li>
                    <a>Buyer</a>
                  </li>
                </ul>
              </li>
              {user?.role === "buyer" && (
                <>
                  <li>
                    <Link to={"/orders"}>Orders</Link>
                  </li>
                  <li>
                    <Link to={"/favorite"}>My Favorite</Link>
                  </li>
                </>
              )}
              {user?.role === "seller" && (
                <li>
                  <Link to={"/buyer/addProduct"}>DashBoard</Link>
                </li>
              )}

              {user?.email ? (
                <li>
                  <button onClick={handleLogOut}>Log out</button>
                </li>
              ) : (
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
              )}
            </ul>
          </div>
          <img src={logo} className="w-20" alt="" />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li tabIndex={0}>
                  <Link to="/">Home</Link>
                </li>
                <li tabIndex={0}>
                  <Link to="blogs">Blogs</Link>
                </li>
                {user?.role === "admin" && (
                  <li>
                    <Link to={"/alluser"}>Alluser</Link>
                  </li>
                )}
                {user?.role === "buyer" && (
                  <>
                    <li>
                      <Link to={"/orders"}>Orders</Link>
                    </li>
                    <li>
                      <Link to={"/favorite"}>My Favorite</Link>
                    </li>
                  </>
                )}
                {user?.role === "seller" && (
                  <li>
                    <Link to={"/buyer/addProduct"}>DashBoard</Link>
                  </li>
                )}
                {user?.email ? (
                  <li>
                    <button onClick={handleLogOut}>Log out</button>
                  </li>
                ) : (
                  <li>
                    <Link to="/login">Sign In</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={2} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || avatar} alt="" />
              </div>
            </label>
            <ul
              tabIndex={2}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            </ul>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
