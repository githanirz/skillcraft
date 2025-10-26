import hr1 from "../assests/images/hr1.png";
import hr2 from "../assests/images/hr2.png";

const HeroSection = () => {
  return (
    <div>
      <section
        id="herosection"
        className=" relative bg-linear-to-r from-[#FFAC89]/30 via-[#FFF6A9]/10 to-[#89DCFA]/30 min-h-[80vh] flex flex-col lg:flex-row items-center justify-center overflow-hidden"
      >
        <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end lg:absolute lg:bottom-0 lg:self-end mr-24">
          <img
            src={hr2}
            alt="hr2"
            className="w-[220px] sm:w-[250px] lg:w-[270px] object-contain"
          />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-16 max-w-3xl">
          <h1 className="mb-6 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            Build Your Skills, Shape Your Future <br /> with World class Online
            Learning.
          </h1>
          <p className="mb-12 text-lg font-normal text-gray-500 lg:text-xl">
            Tingkatkan kemampuanmu bersama mentor berpengalaman dan wujudkan{" "}
            <br />
            karier impian lewat pembelajaran online yang fleksibel dan
            inspiratif.
          </p>
          <button
            type="button"
            className="text-white bg-[#5761FF] hover:bg-[#4853E6] focus:ring-4 focus:outline-none focus:ring-[#5761FF]/50 font-medium rounded-full text-sm px-8 py-3.5 text-center inline-flex items-center transition-all duration-300 mb-32"
          >
            Mulai Belajar Sekarang
          </button>

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 lg:-left-12 lg:translate-x-0 bg-gray-800/80 backdrop-blur-md text-white rounded-2xl px-8 py-4 flex flex-col sm:flex-row items-center justify-between w-[90%] sm:w-[600px] shadow-lg lg:justify-end lg:absolute lg:bottom-0 lg:right-16 lg:self-end">
            <div className="text-center sm:text-left sm:border-r sm:pr-6 border-gray-600">
              <p className="text-xl font-bold">50.000++</p>
              <p className="text-sm text-gray-200">
                telah bergabung dan berkembang
              </p>
            </div>
            <div className="text-center sm:text-left sm:border-r sm:px-6 border-gray-600 mt-3 sm:mt-0">
              <p className="text-xl font-bold">90%</p>
              <p className="text-sm text-gray-200">
                peserta merasa skill meningkat
              </p>
            </div>
            <div className="text-center sm:text-left sm:pl-6 mt-3 sm:mt-0">
              <p className="text-xl font-bold">100++</p>
              <p className="text-sm text-gray-200">
                course tersedia dan up to date
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end lg:absolute lg:bottom-0 lg:self-end ml-6">
          <img
            src={hr1}
            alt="hr1"
            className="w-[220px] sm:w-[250px] lg:w-[350px] object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
