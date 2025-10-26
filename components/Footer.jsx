import logo from "../assests/images/SkillCraft1.svg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0E111E] dark:bg-gray-900">
        <div className="mx-auto w-full max-w-6xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <img src={logo} className="h-12 w-60 mr-4" alt="logo" />
            </div>
            <div className="grid grid-cols-2 gap-12 sm:gap-8 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-lg font-semibold text-white dark:text-gray-900">
                  Program Skill Craft
                </h2>
                <ul className="text-white  dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <p>Home</p>
                  </li>
                  <li className="mb-4">
                    <p>Course</p>
                  </li>
                  <li className="mb-4">
                    <p>Services</p>
                  </li>
                  <li>
                    <p>Works</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-lg font-semibold text-white dark:text-gray-900">
                  Bantuan
                </h2>
                <ul className="text-white dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <p> Terms Conditions</p>
                  </li>
                  <li className="mb-4">
                    <p>Privacy Policy</p>
                  </li>
                  <li>
                    <p>Cookies</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-lg font-semibold text-white dark:text-gray-900">
                  Kontak
                </h2>
                <ul className="text-white  dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <p>+628 319495 5343</p>
                  </li>
                  <li className="mb-4">
                    <p>(021) 5433 32</p>
                  </li>
                  <li>
                    <p>skillcraft@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="items-center">
            <span className="text-lg text-gray-500 text-center dark:text-gray-400">
              © SkillCraft 2025. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
