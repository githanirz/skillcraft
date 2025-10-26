import ins1 from "../assests/images/ins1.png";
import ins2 from "../assests/images/ins2.png";
import ins3 from "../assests/images/ins3.png";
import ins4 from "../assests/images/ins4.png";
import work1 from "../assests/images/work1.png";
import work2 from "../assests/images/work2.png";
import work3 from "../assests/images/work3.png";
import work4 from "../assests/images/work4.png";

const Testimoni = () => {
  const testimonis = [
    {
      id: 1,
      image: ins1,
      name: "Andrian Nugraha",
      course: "Course UI/UX Design",
      work: work1,
      desc: "“Platform ini bener-bener bantu aku upgrade skill desain UI/UX. Materinya lengkap, mentornya responsif, dan hasilnya langsung kerasa di pekerjaan sehari-hari!”",
    },
    {
      id: 2,
      image: ins2,
      name: "Dewi Kartika",
      course: "Course Web Development",
      work: work2,
      desc: "“Suka banget sama tampilannya yang clean dan materi videonya berkualitas tinggi. Bikin semangat belajar setiap hari!. Benar - benar bisa nambah skill aku”",
    },
    {
      id: 3,
      image: ins3,
      name: "Rizal Akbar",
      course: "Course Data Science",
      work: work3,
      desc: "“Kursusnya praktikal banget! , sangat mudah dipahami. Aku bisa langsung terapin hasil belajarnya ke project ku. Worth it banget! dan bisa dapat dream company aku!”",
    },
    {
      id: 4,
      image: ins4,
      name: "Sinta Rahma",
      course: "Course Graphic Design",
      work: work4,
      desc: "“Sebagai orang yang baru pindah karier ke bidang digital, platform ini bantu banget. Struktur kursusnya jelas dan step-by-step, jadi nggak bikin bingung.”",
    },
  ];

  return (
    <section
      id="testimoni"
      className="bg-[#0E111E] dark:bg-gray-900 w-full px-6 md:px-12 py-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-12 bg-white/30 p-12 rounded-lg ">
        <div className="flex-1">
          <h1 className="text-white dark:text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Trusted by Thousands of{" "}
            <span className="text-[#5761FF]">Lifelong Learners</span>
          </h1>
          <p
            className="text-white
           dark:text-gray-400 text-base md:text-lg max-w-3xl"
          >
            Lebih dari 50.000 orang telah membuktikan bagaimana SkillCraft
            membantu mereka berkembang dan mencapai tujuan karier.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <button
            type="button"
            className="text-white bg-[#5761FF] hover:bg-[#5761FF]/30 font-medium rounded-full text-md px-12 py-3 text-center me-2 mb-2 dark:bg-[#5761FF]/30 dark:hover:bg--[#5761FF]/40 "
          >
            Lihat Apa Kata <br /> Alumni
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-14">
        {testimonis.map((testimoni) => (
          <div
            key={testimoni.id}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-white hover:shadow-xs transition-all duration-300 dark:bg-white-800 dark:border-white-700"
          >
            <div className="max-w-full grid grid-cols-2 items-center">
              <div className="flex gap-4 mb-4">
                <img
                  className="w-20 h-20 rounded-xl object-cover"
                  src={testimoni.image}
                  alt={testimoni.name}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimoni.name}
                  </h4>
                  <p className="text-xs text-[#5761FF] font-medium">
                    {testimoni.course}
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <img
                  className="max-w-[100px] sm:max-w-[120px] h-auto object-contain"
                  src={testimoni.work}
                  alt="work logo"
                />
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
            <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
              {testimoni.desc}
            </p>
          </div>
        ))}
      </div>
      <div className=" flex justify-center items-center gap-2 mt-10">
        <span className="w-3 h-3 bg-[#5761FF] rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
};

export default Testimoni;
