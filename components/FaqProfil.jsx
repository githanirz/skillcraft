import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const buttonFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      tanya: "Apa itu SkillCraft?",
      jawab:
        "SkillCraft adalah platform belajar online yang membantu profesional dan kreator mengembangkan keahlian mereka melalui kursus interaktif yang dirancang oleh para ahli industri.",
    },
    {
      tanya: "Siapa saja yang bisa bergabung di SkillCraft?",
      jawab:
        "Siapa pun bisa! Baik kamu pelajar, mahasiswa, profesional, maupun seseorang yang ingin beralih karier — SkillCraft menyediakan berbagai course yang sesuai dengan kebutuhanmu.",
    },
    {
      tanya: "Apakah semua course di SkillCraft berbayar?",
      jawab:
        "Tidak semuanya berbayar. SkillCraft juga menyediakan beberapa course gratis agar pengguna bisa belajar dasar-dasarnya terlebih dahulu sebelum melanjutkan ke level lanjutan.",
    },
    {
      tanya: "Apakah saya mendapatkan sertifikat setelah menyelesaikan course?",
      jawab:
        "Ya, setelah kamu menyelesaikan seluruh materi dan tugas dari course, kamu akan mendapatkan sertifikat resmi dari SkillCraft sebagai bukti kompetensi kamu.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-white dark:bg-gray-900 w-full px-6 md:px-12 lg:px-24 py-16 text-center"
    >
      <h1 className="text-[#0E111E] dark:text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-16">
        FAQ — Get to Know
        <br />
        <span className="text-[#5761FF]">Craft Skills Better</span>
      </h1>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 text-left">
            <button
              onClick={() => buttonFAQ(index)}
              className={`flex items-center justify-between w-full p-4 font-bold text-lg md:text-xl text-[#0E111E] bg-white shadow-xs  rounded-2xl transition-all duration-200 ${
                openIndex === index
                  ? "bg-[#5761FF]/20"
                  : "hover:bg-[#5761FF]/10"
              } focus:ring-4 focus:ring-[#5761FF]/20`}
            >
              <span className="text-left">{faq.tanya}</span>
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full bg-[#5761FF] transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  className="w-3 h-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </span>
            </button>

            {openIndex === index && (
              <div className="p-5 rounded-b-2xl  shadow-xs transition-all duration-300">
                <p className="text-[#2B2D34] dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  {faq.jawab}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
