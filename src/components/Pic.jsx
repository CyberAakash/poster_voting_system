import "./Pic.css"

function Pic() {
  return (
    <div className="relative flex flex-row rounded-2xl items-center justify-start min-h-[13rem] min-w-[20rem] bg-white text-black border-2 border-black">
      <div className="flex flex-col items-center justify-center max-w-[50%]">
        <img className="object-cover h-full w-full rounded-l-xl" src="https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max" />
      </div>
      <div className="flex flex-col text-lg font-semibold gap-6 items-center justify-center w-full min-h-full">
        <h1>Name</h1>
        <p>lorem ipsum</p>
        <div className="absolute text-center right-0 bottom-0 bg-greenBlue rounded-br-xl min-w-[50%] text-white text-sm p-4">Count : 20</div>
      </div>
    </div>
  );
}

export default Pic




