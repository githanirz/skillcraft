import f1 from "../assests/images/f1.png";
import f2 from "../assests/images/f2.png";
import f3 from "../assests/images/f3.png";

const Partner = () => {
  return (
    <section
      id="faq"
      className="bg-white dark:bg-gray-900 w-full px-6 md:px-12 py-16 text-center"
    >
      <h1 className="text-[#0E111E] dark:text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-42">
        Skill Craft Telah dipercaya lebih dari <br />
        <span className="text-[#5761FF]">10.000 partners</span>
      </h1>
      <div
        id="custom-controls-gallery"
        className="relative flex flex-col items-center justify-center"
        data-carousel="slide"
      >
        <div className="relative w-full max-w-4xl h-56 md:h-80 overflow-hidden rounded-lg flex justify-center">
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              className="w-full object-contain mx-auto"
              src={f1}
              alt="Partner 1"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              className="w-full object-contain mx-auto"
              src={f2}
              alt="Partner 2"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              className="w-full object-contain mx-auto"
              src={f3}
              alt="Partner 3"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <button
            type="button"
            className="flex justify-center items-center h-10 w-10 rounded-full bg-[#b7bcfa] hover:bg-gray-300 transition"
            data-carousel-prev
          >
            <svg
              className="w-5 h-5 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
          </button>

          <button
            type="button"
            className="flex justify-center items-center h-10 w-10 rounded-full bg-[#b7bcfa] hover:bg-gray-300 transition"
            data-carousel-next
          >
            <svg
              className="w-5 h-5 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partner;
