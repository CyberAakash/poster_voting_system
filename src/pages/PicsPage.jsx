import CardPics from "../components/CardPics";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function PicsPage() {
  return (
    <div className="relative flex-col flex items-center justify-center w-full min-h-fit pt-[32%] md:pt-[14%]  bg-greenYellow m-0 overflow-hidden">
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