import { useEffect, useState } from "react";
import { Dropdown, Navbar } from "flowbite-react";
import axios from "axios";

export default function Nav() {
  const userName = localStorage.getItem("userName");
  
  return (
    <nav className="top-0 fixed w-screen bg-blue-950 max-w-screen flex flex-wrap items-center justify-between text-white h-20 py-0 px-6">
      <div className="flex gap-2 items-center h-full font-medium ">
        <Navbar.Brand href="/home" className="flex items-center ">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Login+
          </span>
        </Navbar.Brand>
      </div>
      <div className="flex items-center gap-4 me-4">
      <div className="flex h-20 p-4 items-center text-white   hover:bg-blue-900">
          <Dropdown
            inline
            label={userName}
            className="flex h-20 p-4 items-center mt-50"
          >
            <Navbar.Link
              href="/profile"
              className="block items-center hover:bg-blue-700"
            >
              <div className="w-[100px] pl-5">Profile</div>
            </Navbar.Link>

            <Navbar.Link
              href="/"
              className="block items-center hover:bg-blue-700"
            >
              <div className="w-[100px] pl-5">Logout</div>
            </Navbar.Link>

          </Dropdown>
        </div>

        <img
          className="h-14 rounded-full border border-black"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
          alt="user"
        />
      </div>
    </nav>
  );
}
