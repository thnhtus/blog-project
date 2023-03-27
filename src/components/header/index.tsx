import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "@/hooks";
import { setUserInfo } from "@/slices/user";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);

  //------------------------------------------------------------

  useEffect(() => {
    if (window) {
      const user = localStorage.getItem("USER");

      if (user) dispatch(setUserInfo(JSON.parse(user)));
    } else {
      dispatch(setUserInfo(undefined));
    }
  }, [dispatch]);

  //-------------------------------------------------------------

  return (
    <header className="navbar">
      <div className="navbar-start">
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
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">LOGO.</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <a>Single Post</a>
          </li>
          <li>
            <a>Pages</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <Link className="btn px-[50px]" href="/blog/new">
          Add Post
        </Link> */}
        {!userInfo ? (
          <div className="flex gap-5">
            <Link
              className="btn btn-outline px-[50px] normal-case"
              href="/register"
            >
              Register
            </Link>
            <Link className="btn px-[50px] normal-case" href="/login">
              Login
            </Link>
          </div>
        ) : (
          <div className="avatar online placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span></span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
