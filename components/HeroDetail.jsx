import { Link } from "react-router-dom";
import ins1 from "../assests/images/ins1.png";
import ins2 from "../assests/images/ins2.png";
import ins3 from "../assests/images/ins3.png";

const HeroDetail = () => {
  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('/../assests/images/bg1.jpg')] bg-gray-800 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-7xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            UI/UX Design Profesional: <br /> Desain Cerdas.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Pelajari cara menjadi UI/UX Designer cerdas, tanpa bingung, tanpa
            ribet dan menyenangkan bagi siapapun.
          </p>

          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex -space-x-3 rtl:space-x-reverse">
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={ins1}
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={ins2}
                alt=""
              />
              <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={ins3}
                alt=""
              />
            </div>
            <span className="text-white font-medium text-lg">
              5000 orang telah bergabung
            </span>
          </div>

          <div className="mt-12 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              to="/detailcourse"
              className="inline-flex justify-center items-center py-3 px-20 text-base font-medium text-center text-white rounded-full bg-[#5761FF] hover:bg-[#5761FF]/90 focus:ring-4 focus:ring-[#5761FF]/30 dark:focus:ring-60"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroDetail;
