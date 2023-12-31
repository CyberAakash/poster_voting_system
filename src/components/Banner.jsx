import "./Banner.css";
// import { HeartIcon } from "@heroicons/react/24/solid";

function Banner() {
  return (
    <div className="z-40 relative flex gap-0 flex-col items-center w-full min-h-screen m-0">
      <h1
        className="relative z-30 w-[80%] mt-[50%] sm:mt-[30%] lg:mt-[18%] flex flex-col gap-2 items-center justify-center
      text-center text-2xl md:text-5xl font-bold text-black"
      >
        <img src="/heart1.jpeg" alt="" className="object-cover opacity-25 scale-150 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        Only
        <span className="text-transparent brightness-125 bg-clip-text bg-gradient-to-tr from-pink-600 via-sky-500 to-green-500 min-h-fit p-2">
          photograph
        </span>
        what you love
        {/* <span>
          <HeartIcon className="h-16 w-16 animate-pulse text-red-500" />
        </span> */}
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
