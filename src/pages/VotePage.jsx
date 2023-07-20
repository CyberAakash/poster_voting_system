import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";


function VotePage() {
  return (
    <div className="relative flex-col flex items-center justify-center w-full min-h-screen bg-greenYellow m-0 overflow-hidden">
      <Navbar />
      <div className="mt-[30%] sm:mt-[25%] md:mt-[20%] lg:[16%]" />
      <Form />
      {/* <div className="min-h-screen"/> */}
      <Footer />
    </div>
  );
}

export default VotePage