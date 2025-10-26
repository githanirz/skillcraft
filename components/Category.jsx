import fullstack from "../assests/images/fullstack.svg";
import figma from "../assests/images/Figma.svg";
import iphone from "../assests/images/iphone.svg";
import learning from "../assests/images/Learning.svg";
import all from "../assests/images/all.svg";

const Category = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <nav
        className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start w-[75%] md:w-[80%] px-4 md:px-8 py-4 md:py-0 text-gray-700 border border-white rounded-2xl shadow-md bg-white dark:bg-gray-800 dark:border-gray-700"
        aria-label="Category"
      >
        <ol className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 text-sm md:text-base space-x-4">
          <li>
            <button
              type="button"
              className="flex items-center gap-2 md:gap-3 text-[#2B2D34] bg-white hover:bg-[#5761FF]/10 focus:ring-4 focus:outline-none focus:ring-[#5761FF]/30 font-medium rounded-xl text-sm md:text-base px-3 md:px-5 py-2 md:py-3 text-center transition-all duration-300 shadow-sm hover:text-[#5761FF]"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-10 md:h-10 rounded-lg bg-[#A0AEC0]/80">
                <img
                  src={fullstack}
                  alt="Fullstack"
                  className="w-8 h-8 md:w-6 md:h-6 object-contain"
                />
              </div>
              <span className="font-semibold whitespace-nowrap">
                Full-Stack Web
              </span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="flex items-center gap-2 md:gap-3 text-[#2B2D34] bg-white hover:bg-[#5761FF]/10 focus:ring-4 focus:outline-none focus:ring-[#5761FF]/30 font-medium rounded-xl text-sm md:text-base px-3 md:px-5 py-2 md:py-3 text-center transition-all duration-300 shadow-sm hover:text-[#5761FF]"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-10 md:h-10 rounded-lg bg-[#A0AEC0]/80">
                <img
                  src={iphone}
                  alt="iphone"
                  className="w-8 h-8 md:w-6 md:h-6 object-contain"
                />
              </div>
              <span className="font-semibold whitespace-nowrap">
                Mobile Dev
              </span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="flex items-center gap-2 md:gap-3 text-[#2B2D34] bg-white hover:bg-[#5761FF]/10 focus:ring-4 focus:outline-none focus:ring-[#5761FF]/30 font-medium rounded-xl text-sm md:text-base px-3 md:px-5 py-2 md:py-3 text-center transition-all duration-300 shadow-sm hover:text-[#5761FF]"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-10 md:h-10 rounded-lg bg-[#A0AEC0]/80">
                <img
                  src={learning}
                  alt="learning"
                  className="w-8 h-8 md:w-6 md:h-6 object-contain"
                />
              </div>
              <span className="font-semibold whitespace-nowrap">
                Machine Learning
              </span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="flex items-center gap-2 md:gap-3 text-[#2B2D34] bg-white hover:bg-[#5761FF]/10 focus:ring-4 focus:outline-none focus:ring-[#5761FF]/30 font-medium rounded-xl text-sm md:text-base px-3 md:px-5 py-2 md:py-3 text-center transition-all duration-300 shadow-sm hover:text-[#5761FF]"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-10 md:h-10 rounded-lg bg-[#A0AEC0]/80">
                <img
                  src={figma}
                  alt="figma"
                  className="w-8 h-8 md:w-6 md:h-6 object-contain"
                />
              </div>
              <span className="font-semibold whitespace-nowrap">
                UI/UX Design
              </span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="flex items-center gap-2 md:gap-3 text-[#2B2D34] bg-white hover:bg-[#5761FF]/10 focus:ring-4 focus:outline-none focus:ring-[#5761FF]/30 font-medium rounded-xl text-sm md:text-base px-3 md:px-5 py-2 md:py-3 text-center transition-all duration-300 shadow-sm hover:text-[#5761FF]"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-10 md:h-10 rounded-lg bg-[#A0AEC0]/80">
                <img
                  src={all}
                  alt="all"
                  className="w-8 h-8 md:w-6 md:h-6 object-contain"
                />
              </div>
              <span className="font-semibold whitespace-nowrap">
                All Program
              </span>
            </button>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Category;
