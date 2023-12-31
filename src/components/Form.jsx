import { useState, useEffect } from "react";
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import {motion} from "framer-motion"
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"


function Form() {


  const [cardNo, setCardNo] = useState(0);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [admNo, setAdmNo] = useState(16000);
  const [searchedCardNo, setSearchedCardNo] = useState(""); // For search input
  const votesCollectionRef = collection(db, "votes");
  const cardsCollectionRef = collection(db, "cards");

  // Load voted admission numbers from localStorage or initialize as an empty array
  const [votedAdmNumbers, setVotedAdmNumbers] = useState(
    JSON.parse(localStorage.getItem("votedAdmNumbers")) || []
  );

  const createVote = async (e) => {
    e.preventDefault();
    try {
      // Check if the admission number has already voted (in the local state)
      if (votedAdmNumbers.includes(admNo)) {
        alert("You have already voted.");
      } else if (admNo >= 16000 && admNo <= 18000) {
        // Check if the admission number has already voted (in Firestore)
        const querySnapshot = await getDocs(
          query(votesCollectionRef, where("admNo", "==", Number(admNo)))
        );
        if (querySnapshot.docs.length > 0) {
          alert("You have already voted.");
        } else {
          // If the admission number is valid and hasn't voted yet, check if the cardNo exists in the "cards" collection
          const cardSnapshot = await getDocs(
            query(cardsCollectionRef, where("cardNo", "==", Number(cardNo)))
          );
          if (cardSnapshot.docs.length > 0) {
            // If the cardNo exists, add the vote
            await addDoc(votesCollectionRef, {
              admNo: Number(admNo),
              cardNo: Number(cardNo),
            });

            const cardId = cardSnapshot.docs[0].id;
            const cardData = cardSnapshot.docs[0].data();
            const newVoteCount = (cardData.vote_count || 0) + 1;
            console.log(newVoteCount);
            const docRef = doc(db, "cards", cardId);
            await updateDoc(docRef, {
              vote_count: newVoteCount,
            });
            // Add the voted admission number to the list and save to localStorage
            setVotedAdmNumbers([...votedAdmNumbers, admNo]);
            localStorage.setItem(
              "votedAdmNumbers",
              JSON.stringify([...votedAdmNumbers, admNo])
            );
            alert("Voted successfully!");
          } else {
            // If the cardNo does not exist, inform the user that the given cardNo is wrong
            alert("The given cardNo is wrong. Please enter a valid cardNo.");
          }
        }
      } else {
        alert("Invalid Admission Number");
      }
    } catch (e) {
      console.error("Error adding vote:", e);
      alert("Error occurred while voting. Please try again later.");
    }
  };


  useEffect(() => {
    // Fetch the stored data from localStorage
    const storedCardNo = localStorage.getItem("cardNo");
    const storedImg = localStorage.getItem("img");
    const storedName = localStorage.getItem("name");

    // Update the states if the stored data is valid
    if (storedCardNo && storedImg && storedName) {
      setCardNo(Number(storedCardNo));
      setImg(storedImg);
      setName(storedName);
    }
  }, []);

  const checkSrch = async (searchedCardNo) => {
    // Check if the searchedCardNo is a number
    if (!isNaN(searchedCardNo) && searchedCardNo !== "") {
      const searchCardNo = Number(searchedCardNo);
      // Query the Firestore to find the card with the matching cardNo
      const querySnapshot = await getDocs(
        query(cardsCollectionRef, where("cardNo", "==", searchCardNo))
      );

      if (!querySnapshot.empty) {
        const cardData = querySnapshot.docs[0].data();
        setCardNo(cardData.cardNo);
        setImg(cardData.img);
        setName(cardData.name);
        setSearchedCardNo(cardData.cardNo);
      } else {
        // If the card with the searched cardNo is not found, reset the card info
        // setCardNo(0);
        // setImg("");
        // setName("");
        console.log("Not found");
      }
    } else {
      // If the search input is not a valid number, reset the card info
      // setCardNo(0);
      // setImg("");
      // setName("");
      console.log("Invalid Number");
    }
  };
  // useEffect to update card information based on the searched cardNo
  useEffect(() => {
    checkSrch(searchedCardNo);
  }, [searchedCardNo]);


  // const gradient = "linear-gradient(45deg,pink,blue,green,yellow)";

  return (
    <div className="relative z-40 flex flex-col  w-full min-h-fit overflow-hidden items-center justify-center gap-2 pb-20">
      <form
        className="flex flex-row items-center justify-center gap-0 text-black bg-transparent mb-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-lg p-[6px] bg-white text-black border-l-2 border-y-2 border-black rounded-l-2xl">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </label>
        <input
          // name="srchNo"
          type="number"
          className="border-y-2 border-r-2 border-black p-2 max-w-xs text-sm rounded-r-2xl focus:outline-none"
          value={searchedCardNo}
          onChange={(e) => setSearchedCardNo(e.target.value)}
        />
      </form>
      <div className="relative gap-4 md:gap-10 px-10 lg:px-40 pt-0 grid place-items-center grid-cols-1 md:grid-cols-2 w-full h-full">
        <motion.form
          initial={{ opacity: 0, y: -1000, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            // ease: "ease-in-and-out",
            // duration: 1,
            // x: { duration: 1 },
            type: "tween",
          }}
          className=" relative flex flex-col items-center justify-start bg-transparent shadow-2xl w-full h-full gap-4 pb-12 lg:pb-0 overflow-hidden col-span-2 md:col-span-1"
        >
          <img
            src="/beams.jpg"
            width={1308}
            className="z-8 max-w-none h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
          <h1
            className="z-10 p-2 pt-6  w-full text-center text-xl font-extrabold border-b"
            onChange={(e) => setName(e.target.value)}
          >
            Vote for {name}
          </h1>
          <div className="z-10 w-full flex flex-col items-center justify-center gap-6 py-6 ">
            <div className="z-10 w-[90%] grid grid-cols-2 lg:grid-cols-1 md:gap-4 place-items-center">
              <label className="col-span-1 text-sm sm:text-base lg:text-lg">
                Admission Number
              </label>
              <input
                className="rounded-md shadow-2xl pl-4 p-2 min-w-full text-sm focus:outline-none"
                type="number"
                min={16000}
                max={18000}
                value={admNo}
                onChange={(e) => setAdmNo(e.target.value)}
              />
            </div>
            <div className=" z-10 w-[90%] grid grid-cols-2 lg:grid-cols-1 md:gap-4 place-items-center">
              <label className="col-span-1 text-sm sm:text-base lg:text-lg">
                Photo Number
              </label>
              <input
                className="rounded-md shadow-2xl pl-4 p-2 min-w-full text-sm focus:outline-none"
                type="number"
                name="card-no"
                min={0}
                max={100}
                value={cardNo}
                // onChange={(e) => setCardNo(e.target.value)}
                onChange={(e) => {
                  setCardNo(e.target.value);
                  checkSrch(e.target.value); // Call search when the cardNo changes
                }}
              />
            </div>
          </div>
          <div
            className={`z-10 relative flex mb-0 lg:mb-6 items-center justify-center w-[80%] h-12 p-1 bg-gradient-to-br from-pink-500 via-sky-500 to-green-400 rounded-md`}
          >
            <button
              onClick={(e) => createVote(e)}
              className={`h-full w-full p-2 bg-white text-black text-sm font-semibold min-w-96 rounded-md`}
            >
              Submit
            </button>
          </div>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: -1000, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            // ease: "ease-in-and-out",
            // duration: 1,
            // x: { duration: 1 },
            type: "tween",
          }}
          className="shadow-2xl w-full overflow-hidden max-h-fit"
        >
          <img
            src={img}
            className="object-contain"
            onChange={(e) => setImg(e.target.value)}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Form;
