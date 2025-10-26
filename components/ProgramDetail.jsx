import course1 from "../assests/images/course1.jpg";
import course2 from "../assests/images/course2.jpg";
import course3 from "../assests/images/course3.jpg";
import course4 from "../assests/images/course4.jpg";
import ins1 from "../assests/images/ins1.png";
import ins2 from "../assests/images/ins2.png";
import ins3 from "../assests/images/ins3.png";
import ins4 from "../assests/images/ins4.png";
import { Link } from "react-router-dom";

const Program = () => {
  const programs = [
    {
      id: 1,
      image: course1,
      title: "UI/UX Design Beginner to Professional",
      price: "Rp 499.000",
      discountPrice: "Rp 299.000",
      discountLabel: "40% OFF",
      levelprogram: "Beginner",
      imageIns: ins1,
      nameIns: "Hendrik",
      rate: "5.0",
      join: "300",
    },
    {
      id: 2,
      image: course2,
      title: "Full-Stack Next JS Laravel 11",
      price: "Rp 699.000",
      discountPrice: "Rp 399.000",
      discountLabel: "43% OFF",
      levelprogram: "Intermediate",
      imageIns: ins2,
      nameIns: "Hendrik",
      rate: "5.0",
      join: "300",
    },
    {
      id: 3,
      image: course4,
      title: "Pemrograman Go-Lang : Untuk Intermediate",
      price: "Rp 699.000",
      discountPrice: "Rp 2.599.000",
      discountLabel: "31% OFF",
      levelprogram: "Advanced",
      imageIns: ins3,
      nameIns: "Hendrik",
      rate: "5.0",
      join: "300",
    },
    {
      id: 4,
      image: course3,
      title: "Digital Marketing : Untuk pemula sampai mahir",
      price: "Rp 599.000",
      discountPrice: "Rp 349.000",
      discountLabel: "41% OFF",
      levelprogram: "Advanced",
      imageIns: ins4,
      nameIns: "Hendrik",
      rate: "5.0",
      join: "300",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 w-full px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="flex-1">
          <h1 className="text-[#0F0F10] dark:text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Course lainnya
          </h1>
        </div>

        <div className="mt-6 md:mt-0">
          <a
            href=""
            className="inline-flex items-center text-[#5761FF] hover:text-[#3b46d9] font-semibold text-lg transition-colors duration-300"
          >
            Lihat Selengkapnya
            <span className="ml-2 flex items-center justify-center w-7 h-7 rounded-full bg-[#5761FF] text-white">
              <svg
                className="w-4 h-4"
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
            </span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program) => (
          <div
            key={program.id}
            className="relative bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-all duration-300"
          >
            <span
              className={`absolute top-3 left-3 flex items-center text-xs font-medium px-3 py-1 rounded-full 
              ${
                program.levelprogram === "Beginner"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                  : program.levelprogram === "Intermediate"
                  ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
              }`}
            >
              <span
                className={`w-2 h-2 mr-1 rounded-full 
              ${
                program.levelprogram === "Beginner"
                  ? "bg-green-500"
                  : program.levelprogram === "Intermediate"
                  ? "bg-orange-500"
                  : "bg-red-500"
              }`}
              ></span>
              {program.levelprogram}
            </span>

            <a href="#">
              <img
                className="w-full rounded-xl h-50 object-cover p-4"
                src={program.image}
                alt={program.title}
              />
            </a>

            <div className="pl-5 pr-5">
              <h5 className="text-xl font-bold text-[#0E111E] dark:text-white mb-3">
                {program.title}
              </h5>
              <span className=" bg-[#DF0000] text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md mb-3">
                {program.discountLabel}
              </span>
              <div className="mt-2 flex items-center gap-2 ">
                <span className="text-[#2B2D34] line-through text-sm font-bold">
                  {program.price}
                </span>

                <span className="text-[#0E111E] font-bold text-2xl">
                  {program.discountPrice}
                </span>
              </div>
              <div className=" max-w-full grid grid-cols-2">
                <div className="flex items-center ">
                  <img
                    className="rounded-full h-18 w-18 object-cover p-4"
                    src={program.imageIns}
                  />
                  <div className="font-medium text-[#5761FF]">
                    <div>Jese Leos</div>
                  </div>
                </div>

                <div class="flex items-center">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                    {program.join}
                  </p>
                  <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  <svg
                    class="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p class=" ms-1 text-sm font-bold text-gray-900 dark:text-white">
                    {program.rate}
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center mb-5 justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#5761FF] rounded-lg hover:bg-[#3b46d9] focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Enroll Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
