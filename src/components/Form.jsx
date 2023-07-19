import { useState, useEffect } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";


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

  // useEffect to update card information based on the searched cardNo
  useEffect(() => {
    const checkSrch = async () => {
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
        } else {
          // If the card with the searched cardNo is not found, reset the card info
          // setCardNo(0);
          // setImg("");
          // setName("");
          console.log("Not found")
        }
      } else {
        // If the search input is not a valid number, reset the card info
        // setCardNo(0);
        // setImg("");
        // setName("");
        console.log("Invalid Number")
      }
    };

    checkSrch();
  }, [searchedCardNo]);

  return (
    <div className="relative flex flex-col w-full min-h-fit overflow-hidden items-center justify-center gap-6">
      <form
        className="flex flex-row items-center justify-center gap-0 text-black bg-transparent mb-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="text-lg p-[6px] bg-black text-white rounded-l-2xl">
          Search
        </label>
        <input
          // name="srchNo"
          type="number"
          className="border-2 border-black p-2 max-w-xs text-sm rounded-r-2xl"
          value={searchedCardNo}
          onChange={(e) => setSearchedCardNo(e.target.value)}
        />
      </form>
      <div className="grid gap-4 md:gap-10 p-10 pt-0 place-items-center grid-cols-1 lg:grid-cols-2 w-full min-h-[10rem] max-h-fit ">
        <form className="flex flex-col items-center justify-start border-2 border-black w-full h-full gap-4 pb-6 lg:pb-0">
          <h1
            className="p-2 w-full text-center rounded-b-2xl bg-black text-white"
            onChange={(e) => setName(e.target.value)}
          >
            Vote for {name}
          </h1>
          <div className="w-full flex flex-col items-center justify-center gap-6 py-6 text-sm sm:text-lg">
            <div className="w-[90%] grid grid-cols-2 lg:grid-cols-1 md:gap-4 place-items-center">
              <label className="">Admission Number</label>
              <input
                className="rounded-2xl border-b-2 border-black pl-4 p-2 min-w-[150px] text-sm"
                type="number"
                min={16000}
                max={18000}
                value={admNo}
                onChange={(e) => setAdmNo(e.target.value)}
              />
            </div>
            <div className="w-[90%] grid grid-cols-2 lg:grid-cols-1 md:gap-4 place-items-center">
              <label className="">Photo Number</label>
              <input
                className="rounded-2xl border-b-2 border-black pl-4 p-2 min-w-[150px] text-sm"
                type="number"
                min={0}
                max={100}
                value={cardNo}
                onChange={(e) => setCardNo(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-[90%] border-2 border-black rounded-tl-2xl rounded-br-2xl">
            <button
              onClick={(e) => createVote(e)}
              className="w-full bg-white text-black p-2 text-sm font-semibold min-w-96 rounded-tl-2xl rounded-br-2xl"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="border-2 border-black w-full overflow-hidden max-h-96">
          <img
            src={img}
            className="object-cover blur-sm"
            onChange={(e) => setImg(e.target.value)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
