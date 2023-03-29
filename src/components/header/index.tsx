import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "@/hooks";
import { setUserInfo } from "@/slices/user";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const router = useRouter();

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
          <div className="flex gap-4">
            <button
              className="btn btn-outline normal-case"
              onClick={() => router.push("/blog/new")}
            >
              Create Post
            </button>
            <button className="btn btn-outline btn-circle border-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            <div className="avatar online placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
