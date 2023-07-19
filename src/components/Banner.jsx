import "./Banner.css";
import { HeartIcon } from "@heroicons/react/24/solid";

function Banner() {
  return (
    <div className="relative flex gap-0 flex-col items-center w-full min-h-screen m-0">
      <h1
        className="z-30 w-full mt-[18%] flex gap-2 items-center justify-center
      text-center text-2xl md:text-5xl font-bold text-black"
      >
        Only
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-600 via-sky-500 to-green-500 min-h-fit p-2">
          photograph
        </span>
        what you
        <span>
          <HeartIcon className="h-16 w-16 animate-pulse text-red-500" />
        </span>
      </h1>
      <div className="flex items-center justify-center w-full min-h-screen m-0">
        <div
          className="relative flex items-center justify-center p-2 bannerImage 
      bg-no-repeat bg-cover text-white w-[70%] h-[450px] rounded-lg 
      border-2 border-black "
        >
          <div
            className="bg-white text-black w-[80%] sm:w-[70%] md:w-[45%] lg:w-[35%] h-[80%] 
          border-2 border-black md:absolute md:top-[50%] md:translate-y-[-50%]
          md:left-10 rounded-lg flex items-center justify-center flex-col overflow-hidden"
          >
            <div className="rounded-b-lg min-w-full min-h-[85%]"></div>
            <div className="bg-black text-white min-w-full min-h-[15%]"></div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-black font-semibold text-xl">Voting Deadline</h1>
        <span className="countdown font-mono text-4xl text-white font-semibold bg-slate-500 p-3 border-x-2 border-t-2 border-black rounded-t-lg">
          <span style={{ "--value": 10 }}></span>:
          <span style={{ "--value": 24 }}></span>:
          <span style={{ "--value": 36 }}></span>
        </span>
      </div> */}
      {/* You can open the modal using ID.showModal() method */}
    </div>
  );
}

export default Banner;
