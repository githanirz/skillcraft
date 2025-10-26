import Header from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Inspiration from "../components/Inspiration";
import Category from "../components/Category";
import Course from "../components/Course";
import Testimoni from "../components/Testimoni";
import Partner from "../components/Partner";
import Faq from "../components/FaqProfil";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Inspiration />
      <Category />
      <Course />
      <Testimoni />
      <Partner />
      <Faq />
      <Footer />
    </div>
  );
};
export default HomePage;
