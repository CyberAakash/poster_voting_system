import "./Navbar.css"
import { Link } from "react-router-dom";
// import { BellAlertIcon } from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <div
      className="fixed top-0 py-6 left-[50%] translate-x-[-50%] bg-white border-x-2 border-b-2 border-black text-white 
    flex flex-col items-center justify-center w-full sm:w-[90%] md:w-[80%] gap-3 z-50"
    >
      <div className="relative flex items-center justify-around gap-4 min-w-fit min-h-fit">
        {/* <div className="flex items-center justify-center gap-2">
          <BellAlertIcon className="h-4 w-4 text-black" />
          <BellAlertIcon className="h-4 w-4 text-black" />
          <BellAlertIcon className="h-4 w-4 text-black" />
          <BellAlertIcon className="h-4 w-4 text-black" />
        </div> */}

        <div className="h-1 w-2 bg-black rounded-full absolute -left-4 top-[50%] translate-y-[-50%]"></div>
        <div className="h-1 w-2 bg-black rounded-full absolute -right-4 top-[50%] translate-y-[-50%]"></div>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-600 via-sky-500 to-green-500 
        font-extrabold text-3xl w-fit">
          PHOTO-CLUB
        </h1>
      </div>
      {/* <hr className="text-black bg-black h-1 w-[40%]" /> */}
      <div className="relative text-xs sm:text-sm flex items-center justify-center gap-6 md:gap-12 border-2 border-black min-w-[85%] bg-white text-black p-2 rounded-3xl">
        <div className="h-2 w-2 bg-black rounded-full absolute left-2 top-[50%] translate-y-[-50%]"></div>
        <div className="h-2 w-2 bg-black rounded-full absolute right-2 top-[50%] translate-y-[-50%]"></div>
        <Link to="/" className="cursor-pointer">
          Home
        </Link>
        <Link to="/vote" className="cursor-pointer">
          Vote
        </Link>
        <Link to="/pics" className="cursor-pointer">
          Pics
        </Link>
        <Link to="/about" className="cursor-pointer">
          About
        </Link>
        <Link to="/contact" className="cursor-pointer">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar




// fixed top-2 left-[50%] translate-x-[-50%] 