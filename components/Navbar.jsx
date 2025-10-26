import { Link } from "react-router-dom";
import logo from "../assests/images/SkillCarft.svg";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900  fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 max-w-7xl">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-10 w-auto" alt="logo" />
        </Link>

        <div className="flex md:order-2 gap-3 ">
          <button
            type="button"
            className="text-white bg-[#5761FF] hover:bg-[#4a53e0] font-medium rounded-full text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-[#5761FF]/30 transition-all"
          >
            Sign In
          </button>

          <button
            type="button"
            className="text-[#5761FF] border border-[#5761FF] hover:bg-[#5761FF] hover:text-white font-medium rounded-full text-sm px-5 py-2.5 transition-all"
          >
            Sign Up
          </button>
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
                       text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
                       focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          id="navbar-cta"
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out`}
        >
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 
                       rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse 
                       md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 
                       md:dark:bg-gray-900 dark:border-gray-700"
          >
            {[
              { href: "#herosection", label: "Home" },
              { href: "#inspiration", label: "Inspiration" },
              { href: "#course", label: "Course" },
              { href: "#testimoni", label: "Testimoni" },
              { href: "#faq", label: "FAQ" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Tutup menu saat klik link
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                             md:hover:bg-transparent md:hover:text-[#5761FF] 
                             dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                             md:dark:hover:bg-transparent transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
