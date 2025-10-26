import p1 from "../assests/images/p-1.png";
import course1 from "../assests/images/course1.jpg";
const DecsDetail = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="w-full flex justify-center mb-8">
          <nav
            className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start w-[95%] md:w-[90%] px-4 md:px-8 py-2 md:py-0 text-gray-700 border border-white rounded-2xl shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700"
            aria-label="Category"
          >
            <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-600 rounded-t-lg gap-4">
              <li className="mx-2">
                <a
                  href="#overview"
                  className="inline-block p-4 px-6 text-[#1e1e1f] font-semibold rounded-full hover:bg-[#5761FF]/20"
                >
                  Overview
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="#syllabus"
                  className="inline-block p-4 px-6 text-[#1e1e1f] font-semibold rounded-full hover:bg-[#5761FF]/20"
                >
                  Syllabus
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="#study"
                  className="inline-block p-4 px-6 text-[#1e1e1f] font-semibold rounded-full hover:bg-[#5761FF]/20"
                >
                  Study
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="#instructor"
                  className="inline-block p-4 px-6 text-[#1e1e1f] font-semibold rounded-full hover:bg-[#5761FF]/20"
                >
                  Instructor
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="#comment"
                  className="inline-block p-4 px-6 text-[#1e1e1f] font-semibold rounded-full hover:bg-[#5761FF]/20"
                >
                  Comment
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <section id="overview" className="mb-12 scroll-mt-20">
          <h2 className="text-[#5761FF] font-semibold text-xl mb-2">
            Overview
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Menjadi UI/UX Designer profesional
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Pelajari cara menciptakan pengalaman digital yang memukau dan
            fungsional melalui desain yang berpusat pada pengguna. Di course
            ini, kamu akan memahami dasar-dasar User Interface (UI) dan User
            Experience (UX) mulai dari riset pengguna, pembuatan wireframe,
            hingga prototyping interaktif di Figma. Bersama mentor berpengalaman
            di industri, kamu akan belajar bagaimana merancang produk digital
            yang tidak hanya indah secara visual, tapi juga efektif, mudah
            digunakan, dan berdampak nyata bagi pengguna.
          </p>
        </section>

        <section id="syllabus" className="mb-12 scroll-mt-20">
          <h2 className="text-[#5761FF] font-semibold text-lg mb-2">
            Syllabus
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Apa saja yang akan kamu pelajari?
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li className="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                className="shrink-0 w-6 h-6 dark:text-blue-500 fill-current text-[#5761FF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="bg-[#5761FF]"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight text-lg font-normal">
                Prinsip desain UI/UX modern
              </span>
            </li>
            <li className="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                className="shrink-0 w-6 h-6 dark:text-blue-500 fill-current text-[#5761FF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="bg-[#5761FF]"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight text-lg font-normal">
                User research & usability testing
              </span>
            </li>
            <li className="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                className="shrink-0 w-6 h-6 dark:text-blue-500 fill-current text-[#5761FF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="bg-[#5761FF]"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight text-lg font-normal">
                Design system & component library
              </span>
            </li>
            <li className="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                className="shrink-0 w-6 h-6 dark:text-blue-500 fill-current text-[#5761FF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="bg-[#5761FF]"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight text-lg font-normal">
                Prototyping menggunakan Figma
              </span>
            </li>
            <li className="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                className="shrink-0 w-6 h-6 dark:text-blue-500 fill-current text-[#5761FF]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="bg-[#5761FF]"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight text-lg font-normal">
                Tips membangun portofolio desain profesional
              </span>
            </li>
          </ul>
        </section>

        <section id="study" className="mb-12 scroll-mt-20">
          <h2 className="text-[#5761FF] font-semibold text-xl mb-2">
            How We Work?
          </h2>
          <h3 className="text-2xl font-bold mb-12">
            Cara Belajar diSKill Craft
          </h3>

          <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse ">
            <li className="flex items-center text-[#0E111E] dark:text-[#0E111E]/30 space-x-2.5 rtl:space-x-reverse border-r-4 border-[#5761FF] pr-4">
              <h3 className="flex items-center justify-center leading-tight  shrink-0 dark:border-[#0E111E]/30 font-bold ">
                Pemberian <br /> Materi Dasar
              </h3>
              <span>
                <p className="text-sm">
                  Pelajari konsep fundamental dari <br /> para ahli industri
                  untuk
                  <br />
                  membangun skill yang kuat.
                </p>
              </span>
            </li>
            <li className="flex items-center text-[#0E111E] dark:text-[#0E111E]/30 space-x-2.5 rtl:space-x-reverse border-r-4 border-[#5761FF] pr-4">
              <h3 className="flex items-center justify-center leading-tight  shrink-0 dark:border-[#0E111E]/30 font-bold ">
                Bimbingan <br /> Mentor <br /> Profesional
              </h3>
              <span>
                <p className="text-sm">
                  Dapatkan arahan langsung dari mentor <br /> berpengalaman
                  untuk meningkatkan <br /> hasil belajarmu.
                </p>
              </span>
            </li>
          </ol>
          <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse mt-8">
            <li className="flex items-center text-[#0E111E] dark:text-[#0E111E]/30 space-x-2.5 rtl:space-x-reverse border-r-4 border-[#5761FF] pr-4">
              <h3 className="flex items-center justify-center leading-tight  shrink-0 dark:border-[#0E111E]/30 font-bold ">
                Simulasi & <br /> Penerapan <br /> Project
              </h3>
              <span>
                <p className="text-sm">
                  Langsung praktik dengan studi kasus <br />
                  nyata agar siap menghadapi tantangan <br />
                  dunia kerja.
                </p>
              </span>
            </li>
            <li className="flex items-center text-[#0E111E] dark:text-[#0E111E]/30 space-x-3 rtl:space-x-reverse border-r-4 border-[#5761FF] pr-4">
              <h3 className="flex items-center justify-center leading-tight  shrink-0 dark:border-[#0E111E]/30 font-bold ">
                Evaluasi & <br /> Umpan <br /> Balik
              </h3>
              <span>
                <p className="text-sm">
                  Terima feedback agar tahu <br /> sejauh mana perkembangan
                  kemampuanmu.
                </p>
              </span>
            </li>
          </ol>
        </section>

        <section id="instructor" className="mb-12 scroll-mt-20">
          <h2 className="text-[#5761FF] font-semibold text-lg mb-2">
            Instructor
          </h2>
          <h3 className="text-2xl font-bold mb-4">Langsung dari ahlinya!</h3>
          <div className="flex items-center gap-4">
            <img
              src={p1}
              alt="Instructor"
              className="w-42 h-42 object-cover "
            />
            <div>
              <p className="font-semibold text-gray-900 text-xl">
                Jelina Putri Sandi
              </p>
              <p className="text-gray-600 text-xm">
                Jelina telah berpengalaman di bidang UI/UX Design selama 5 tahun
                dan telah bekerja di perusahaan ternama di Indonesia.
              </p>
            </div>
          </div>
        </section>

        <section id="comment" className="scroll-mt-20">
          <h2 className="text-[#5761FF] font-semibold text-lg mb-2">Comment</h2>
          <h3 className="text-2xl font-bold mb-4">Apa kata mereka?</h3>
          <div className="space-y-4">
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-white hover:shadow-xs transition-all duration-300 dark:bg-white-800 dark:border-white-700">
              <div className=" max-w-full grid grid-cols-2">
                <div className="flex gap-4 mb-4 ">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Fania Bunga
                    </h4>
                    <p className="text-yellow-500 text-2xl">★★★★★</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#5761FF]/20 mb-4">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#5761FF"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic text-lg leading-relaxed">
                “Belajarnya seru! Penjelasan mentor juga sangat jelas dan
                terarah.”
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-white hover:shadow-xs transition-all duration-300 dark:bg-white-800 dark:border-white-700">
              <div className=" max-w-full grid grid-cols-2">
                <div className="flex gap-4 mb-4 ">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Budiman Deni
                    </h4>
                    <p className="text-yellow-500 text-2xl">★★★★★</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#5761FF]/20 mb-4">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#5761FF"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic text-lg leading-relaxed">
                “Materinya sangat mudah dipahami dan cocok untuk pemula!”
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-24">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <img
              src={course1}
              alt="Course"
              className="w-full h-50 object-cover p-4"
            />
            <div className="p-5">
              <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Beginner</span>
              </div>

              <span className=" bg-[#DF0000] text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md mb-3">
                42%
              </span>
              <div className="mt-2 flex items-center gap-2 ">
                <span className="text-[#2B2D34] line-through text-sm font-bold">
                  Rp 3.390.000
                </span>

                <span className="text-[#0E111E] font-bold text-2xl">
                  Rp 2.590.000
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                    <path
                      fill-rule="evenodd"
                      d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                      clip-rule="evenodd"
                    />
                    <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                  </svg>

                  <span className="leading-tight text-sm font-normal">
                    Sertifikat kelulusan
                  </span>
                </li>
                <hr className="my-3 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-1" />
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="leading-tight text-sm font-normal">
                    Akses video selamanya
                  </span>
                </li>
                <hr className="my-3 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-1" />
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 6c0-1.65685 1.3431-3 3-3s3 1.34315 3 3-1.3431 3-3 3-3-1.34315-3-3Zm2 3.62992c-.1263-.04413-.25-.08799-.3721-.13131-1.33928-.47482-2.49256-.88372-4.77995-.8482C4.84875 8.66593 4 9.46413 4 10.5v7.2884c0 1.0878.91948 1.8747 1.92888 1.8616 1.283-.0168 2.04625.1322 2.79671.3587.29285.0883.57733.1863.90372.2987l.00249.0008c.11983.0413.24534.0845.379.1299.2989.1015.6242.2088.9892.3185V9.62992Zm2-.00374V20.7551c.5531-.1678 1.0379-.3374 1.4545-.4832.2956-.1034.5575-.1951.7846-.2653.7257-.2245 1.4655-.3734 2.7479-.3566.5019.0065.9806-.1791 1.3407-.4788.3618-.3011.6723-.781.6723-1.3828V10.5c0-.58114-.2923-1.05022-.6377-1.3503-.3441-.29904-.8047-.49168-1.2944-.49929-2.2667-.0352-3.386.36906-4.6847.83812-.1256.04539-.253.09138-.3832.13765Z" />
                  </svg>

                  <span className="leading-tight text-sm font-normal">
                    20 Video, 10 Test
                  </span>
                </li>
                <hr className="my-3 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-1" />
                <li className="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2H5Zm4 10H3v2a2 2 0 0 0 2 2h4v-4Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="leading-tight text-sm font-normal">
                    Live teaching via online meeting
                  </span>
                </li>
                <hr className="my-3 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-1" />
              </ul>
              <button className="mt-6 w-full py-3 text-white bg-[#5761FF] hover:bg-[#5761FF]/90 font-medium rounded-full transition-all duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecsDetail;
