import { Link } from "react-router-dom";
import logo from "../assests/images/SkillCarft.svg";

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-10 w-40 mr-4" alt="logo" />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ backgroundColor: "#5761FF" }}
          >
            Sign In
          </button>

          <button
            type="button"
            className="text-[#5761FF] hover:text-white border border-[#5761FF] hover:bg-[#7079fc] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#5761FF]dark:text-blue-500 dark:hover:text-white dark:hover:bg-[#5761FF] dark:focus:ring-[#4652fb]"
          >
            Sign Up
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
                       text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
                       focus:outline-none focus:ring-2 focus:ring-gray-200 
                       dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
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
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 
                       rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse 
                       md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 
                       md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="#herosection"
                className="block py-2 px-3 md:p-0 text-[#0E111E] bg-[#5761FF] rounded-sm 
                           md:bg-transparent md:text-[#5761FF] md:dark:text-[#5761FF]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#inspiration"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-[#5761FF] md:dark:hover:text-[#5761FF]
                           dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                           md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Inspiration
              </a>
            </li>
            <li>
              <a
                href="#course"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-[#5761FF] md:dark:hover:text-[#5761FF]
                           dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                           md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Course
              </a>
            </li>
            <li>
              <a
                href="#testimoni"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-[#5761FF] md:dark:hover:text-[#5761FF]
                           dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                           md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Testimoni
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-[#5761FF] md:dark:hover:text-[#5761FF]
                           dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                           md:dark:hover:bg-transparent dark:border-gray-700"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
