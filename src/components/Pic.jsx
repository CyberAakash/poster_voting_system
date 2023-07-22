import "./Pic.css"

// eslint-disable-next-line react/prop-types
function Pic({name, author, desc, img, vote_count, cardNo}) {
  return (
    <div className="relative flex flex-row rounded-2xl items-start justify-start min-h-[10rem] sm:min-h-[13rem] min-w-[8rem] sm:min-w-[20rem] bg-white text-black border-2 border-black">
      <div className="flex flex-col items-center justify-center max-w-[50%] z-8">
        <img className="object-cover h-full w-full rounded-l-xl" src={img} />
      </div>
      <div className="flex flex-col text-xl font-semibold gap-6 items-center justify-center w-full min-h-full">
        <h1 className="border-b-2 border-black w-full text-center p-2 text-xs sm:text-xl lg:text-3xl font-extralight font-mono">
          {name} [{cardNo}]
        </h1>
        <h1 className="text-xs sm:text-lg">{author}</h1>
        <p className="text-xs sm:text-lg">{desc}</p>
        <div className="absolute text-center z-9 right-0 bottom-0 bg-greenBlue rounded-br-xl min-w-[50%] text-white text-sm p-1 sm:p-4">
          Count : {vote_count}
        </div>
      </div>
      {/* <span className="absolute text-lg top-0 right-0 bg-greenBlue text-white  font-bold px-4 py-2 rounded-full z-10">{cardNo}</span> */}
    </div>
  );
}

export default Pic




