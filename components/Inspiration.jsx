import { Link } from "react-router-dom";
import card1 from "../assests/images/card1.png";
import card2 from "../assests/images/card2.png";
import card3 from "../assests/images/card3.png";
import card4 from "../assests/images/card4.png";
const Inspiration = () => {
  return (
    <div>
      <section
        id="inspiration"
        className="bg-[#0E111E] dark:bg-gray-900 flex flex-col items-center justify-center text-center min-h-screen"
      >
        <h1 className="mb-12 text-3xl font-extrabold tracking-tight leading-tight text-white md:text-4xl lg:text-5xl mt-24 ">
          Find Your Inspiration in <br /> SkillCraft
        </h1>
        <div className="grid grid-cols-2 gap-8 p-8">
          <div className="flex flex-col items-start bg-white border border-gray-200 rounded-2xl shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between leading-normal text-left w-full p-8">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mentor Terbaik untuk Kamu
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 mb-8">
                Belajar langsung dari mereka yang sudah melangkah lebih dulu{" "}
                <br />
                agar kamu bisa tumbuh lebih cepat dan <br /> percaya diri
                mengejar tujuanmu.
              </p>
            </div>

            <img
              src={card1}
              alt="card1"
              className="w-full max-w-[300px] object-contain self-star"
            />
          </div>

          <div className="flex flex-col items-start bg-white border border-gray-200 rounded-2xl shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between leading-normal text-right w-full p-8">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Materi Lengkap & Terstruktur
              </h5>
              <p
                className="font-normal text-gray-700 dark:text-gray-400 mb-14
              "
              >
                Semua pengetahuan yang kamu butuhkan telah kami rangkai <br />{" "}
                untuk membawamu dari pemula menjadi ahli.
              </p>
            </div>

            <img
              src={card2}
              alt="card2"
              className="w-full max-w-[300px] object-contain self-end"
            />
          </div>
          <div className="flex flex-col items-start bg-white border border-gray-200 rounded-2xl shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between leading-normal text-right w-full p-8">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Raih Skill Impianmu Untuk <br /> Masa Depanmu
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 mb-5">
                Bangun masa depanmu dengan kemampuan yang kamu pilih sendiri{" "}
                <br /> karena impian besar dimulai dari satu langkah kecil hari
                ini.
              </p>
            </div>

            <img
              src={card4}
              alt="card4"
              className="w-full max-w-[300px] object-contain self-end"
            />
          </div>
          <div className="flex flex-col items-start bg-white border border-gray-200 rounded-2xl shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between leading-normal text-left w-full p-8">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Akses Mudah & Cepat Siapapun <br /> Yang Ingin Belajar
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 mb-1">
                Tak perlu menunggu waktu yang tepat untuk mulai. Cukup satu
                klik, <br /> dan perjalanan belajarmu dimulai sekarang. ini.
              </p>
            </div>

            <img
              src={card3}
              alt="card3"
              className="w-full max-w-[300px] object-contain self-star"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Inspiration;
