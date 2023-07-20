import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function HomePage() {
  return (
    <div className="relative flex-col flex items-center justify-center w-full min-h-screen bg-greenYellow m-0 overflow-hidden">
      <Navbar />
      <Banner />
      <Carousel />
      <div className="mt-10"></div>
      <Footer />
      <div className="mb-20" />
    </div>
  );
}

export default HomePage;
