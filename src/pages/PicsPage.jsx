import CardPics from "../components/CardPics";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function PicsPage() {
  return (
    <div className="relative flex-col flex items-center justify-center w-full min-h-fit pt-[32%] md:pt-[14%]  bg-green-50 m-0 overflow-hidden">
      <div className="z-10 absolute bg-[url(/gridsm.jpg)] bg-repeat bg-blend-lighten bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] inset-0"></div>
      <img
        src="/beams.jpg"
        width={1308}
        className="z-8 max-w-none h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
      />
      <Navbar />
      {/* <div className="w-full h-20 bg-white text-black flex items-center justify-center p-4">
        <h1 className="">What a Pic !</h1>
      </div> */}
      <CardPics />
      <Footer />
    </div>
  );
}

export default PicsPage