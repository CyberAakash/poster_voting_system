/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link, } from "react-router-dom";

function CardPic(props) {

  const storeVoteData = (cardNo, img, name) => {
    localStorage.setItem("cardNo" , cardNo);
    localStorage.setItem("img", img);
    localStorage.setItem("name", name);
  }

  return (
    <motion.div
      initial={{ opacity:0, scale:0, x:-200, y:-100 }}
      whileInView={{ opacity:1, scale:1, x:0, y:0  }}
      viewport={{ once: true }}
      className="relative flex-col flex items-center 
    w-72 h-[450px] bg-white text-black m-0
    border-2 border-black rounded-2xl"
    >
      <div
        className="absolute -bottom-4 -right-4 z-20 bg-white text-greenBlue rounded-full h-12 w-12 
      flex items-center justify-center text-center border-2 border-greenBlue"
      >
        {props.cardNo}
      </div>
      <div className="min-h-10 p-2 min-w-full bg-greenBlue/80 border-b-2 border-black rounded-t-xl text-white text-center">
        {props.name}
      </div>
      <div className="p-2 border-b-2 rounded-2xl border-black">
        <img className="rounded-2xl" src={props.img} alt="image" />
      </div>
      {/* <div className="flex flex-col items-center justify-center text-center font-semibold text-base gap-1 w-full p-2 px-10">
        <p className=" text-black w-full">{props.author}</p>
        <p className=" text-black w-full">{props.desc}</p>
      </div> */}
      <div className="w-full h-full  bg-white text-black flex items-center justify-between px-2">
        <div className="flex flex-col items-start justify-start ">
          <h1 className="text-lg font-semibold">{props.author}</h1>
          <p className="text-xs font-medium">{props.desc}</p>
        </div>
        {/* <button className="btn glass">Vote Now</button> */}
        <Link
          to="/vote"
          onClick={() => {
            storeVoteData(props.cardNo, props.img, props.name);
          }}
          className=""
        >
          <button className="btn bg-greenBlue text-white hover:bg-greenBlue/90">
            Vote Now
          </button>
        </Link>
      </div>
      <div className="w-full text-xs flex items-center justify-center text-center min-h-3 bg-greenBlue/80 text-white rounded-b-xl">
        Who shot this ?
      </div>
    </motion.div>
  );
}

export default CardPic