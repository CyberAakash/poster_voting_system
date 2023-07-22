import Pic from "./Pic";
import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function TopPics() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    // Function to fetch data from the Firestore "cards" collection
    const fetchCardsData = async () => {
      try {
        const cardsCollectionRef = collection(db, "cards");
        const q = query(
          cardsCollectionRef,
          orderBy("vote_count", "desc"),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        const cardsData = querySnapshot.docs.map((doc) => doc.data());
        setCards(cardsData);
      } catch (error) {
        console.error("Error fetching cards data:", error);
      }
    };

    // Call the fetchCardsData function
    fetchCardsData();
  }, []); // Empty dependency array to ensure the useEffect runs only once

  return (
    <div
      className="relative z-40 grid place-items-center grid-cols-1 gap-16 w-full 
    min-h-screen m-0 p-8 md:px-36 lg:px-60 overflow-x-hidden pb-14"
    >
      <h1 className="text-lg sm:text-5xl font-extrabold border-2 border-black bg-white p-4">
        Top rankers
      </h1>
      {cards.map((card) => (
        <Pic key={card.id} name={card.name}  author={card.author} desc={card.desc} img={card.img} vote_count={card.vote_count} cardNo={card.cardNo} />
      ))}
    </div>
  );
}


export default TopPics

// {[...Array(9)].map((_, i) => {} ) }

// const cards = [
//   {
//     id: 1,
//     name: "Sample Name",
//     desc: "IV CSE - 'A'",
//     img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
//     author: "Author",
//     cardNo: 1,
//   },
//   {
//     id: 2,
//     name: "Sample Name",
//     desc: "IV CSE - 'A'",
//     img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
//     author: "Author",
//     cardNo: 2,
//   },
//   {
//     id: 3,
//     name: "Sample Name",
//     desc: "IV CSE - 'A'",
//     img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
//     author: "Author",
//     cardNo: 3,
//   },
//   {
//     id: 4,
//     name: "Sample Name",
//     desc: "IV CSE - 'A'",
//     img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
//     author: "Author",
//     cardNo: 4,
//   },
//   {
//     id: 5,
//     name: "Sample Name",
//     desc: "IV CSE - 'A'",
//     img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
//     author: "Author",
//     cardNo: 5,
//   },
//   {
//     id: 6,
//     name: "Sample Name",
//     desc: "IV CSE - 'A'",
//     img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
//     author: "Author",
//     cardNo: 6,
//   },
// ];