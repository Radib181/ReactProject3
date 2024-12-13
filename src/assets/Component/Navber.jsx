import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

function Navber() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="w-full bg-gray-100 shadow-md">
      <Navbar isBordered={false} className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between w-full">
          <NavbarBrand className="flex items-center gap-2">
            <AcmeLogo />
            <p className="font-bold text-lg text-gray-900">ACME</p>
          </NavbarBrand>

          {/* Hamburger Icon (Visible on Small Screens) */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Content */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute sm:relative top-16 sm:top-0 left-0 sm:flex flex-col sm:flex-row bg-gray-100 sm:bg-transparent w-full sm:w-auto gap-4 sm:items-center px-4 sm:px-0`}
          >
            <NavbarItem>
              <Link
                href="#"
                className="text-gray-800 hover:text-blue-600 transition duration-200"
              >
                Features
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#"
                className="text-gray-800 hover:text-blue-600 transition duration-200"
              >
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="#"
                className="text-gray-800 hover:text-blue-600 transition duration-200"
              >
               
             Integrations
              </Link>
            </NavbarItem>
          </div>

          {/* Login and Signup Buttons (Always Visible on Medium+ Screens) */}
          <div className="hidden sm:flex gap-4 items-center">
       
            <NavbarItem>
              <Button
                as={Link}
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </div>
        </div>
      </Navbar>
    </section>
  );
}

export default Navber;
