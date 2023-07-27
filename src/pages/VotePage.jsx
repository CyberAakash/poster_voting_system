import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";


function VotePage() {
  return (
    <div className="relative flex-col flex items-center justify-center w-full min-h-fit bg-green-50 m-0 overflow-hidden">
      <div className="z-10 absolute bg-[url(/gridsm.jpg)] bg-repeat bg-blend-lighten bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] inset-0"></div>
      <img
        src="/beams.jpg"
        width={1308}
        className="z-8 max-w-none h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
      />
      <Navbar />
      <div className="mt-[30%] sm:mt-[25%] md:mt-[20%] lg:[12%]" />
      <Form />
      {/* <div className="mt-20 bg-transparent"/> */}
      <Footer />
    </div>
  );
}

export default VotePage