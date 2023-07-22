import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopPics from "../components/TopPics";

function HomePage() {
  return (
    <div className="relative flex-col flex items-center justify-center w-full min-h-screen bg-green-50 m-0 overflow-hidden">
      {/* <div className="z-10 absolute mix-blend-multiply bg-[url(/gridsm.jpg)] bg-repeat bg-blend-lighten bg-center [mask-image:linear-gradient(180deg, white,rgba(255,255,255,0))] inset-0"></div>
      <img
        src="/beams.jpg"
        className="z-8 absolute h-full max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
        width={1308}
      ></img> */}
      <div className="z-10 absolute bg-[url(/gridsm.jpg)] bg-repeat bg-blend-lighten bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] inset-0"></div>
      <img
        src="/beams.jpg"
        width={1308}
        className="z-8 max-w-none h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
      />
      <Navbar />
      <Banner />
      <TopPics />
      <Carousel />
      <div className="mt-10"></div>
      <Footer />
      <div className="mb-20" />
    </div>
  );
}

export default HomePage;
