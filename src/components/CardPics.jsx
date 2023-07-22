import CardPic from "./CardPic";
import {useState, useEffect} from "react"
import {collection, getDocs, orderBy, query} from "firebase/firestore"
import {db} from "../firebase"



function CardPics() {
  const [cards, setCards] = useState([]);
  const cardsCollectionRef = collection(db, "cards");
  const q = query(
    cardsCollectionRef,
    orderBy("cardNo", "asc")
  );

  useEffect(() => {
    const getCards = async () => {
      const data = await getDocs(q)
      // console.log(data)
      setCards(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }
    getCards()
  }, []);
  return (
    <div className="relative z-40 grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full 
    min-h-screen m-0 p-8 overflow-hidden pb-14">
        { cards.map((card, i) => (
            <CardPic key={i} id={card.id} name={card.name} desc={card.desc} img={card.img} cardNo={card.cardNo} author={card.author} />
        ))
        }
    </div>
  )
}

export default CardPics


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