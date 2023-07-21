import Pic from "./Pic";


function TopPics() {
  return (
    <div
      className="relative grid place-items-center grid-cols-1 gap-16 w-full 
    min-h-screen bg-green-300/10 m-0 p-8 md:px-36 lg:px-60 overflow-x-hidden pb-14"
    >
      <h1 className="text-5xl font-extrabold border-2 border-black p-4">Top rankers</h1>
      {cardPics.map((card) => (
        <Pic key={card.id}/>
      ))}
    </div>
  );
}


export default TopPics

// {[...Array(9)].map((_, i) => {} ) }

const cardPics = [
  {
    id: 1,
    name: "Sample Name",
    desc: "IV CSE - 'A'",
    img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
    author: "Author",
    cardNo: 1,
  },
  {
    id: 2,
    name: "Sample Name",
    desc: "IV CSE - 'A'",
    img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
    author: "Author",
    cardNo: 2,
  },
  {
    id: 3,
    name: "Sample Name",
    desc: "IV CSE - 'A'",
    img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
    author: "Author",
    cardNo: 3,
  },
  {
    id: 4,
    name: "Sample Name",
    desc: "IV CSE - 'A'",
    img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
    author: "Author",
    cardNo: 4,
  },
  {
    id: 5,
    name: "Sample Name",
    desc: "IV CSE - 'A'",
    img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
    author: "Author",
    cardNo: 5,
  },
  {
    id: 6,
    name: "Sample Name",
    desc: "IV CSE - 'A'",
    img: "https://images.nightcafe.studio/jobs/W7fK5O1lvryggtj2CfBX/W7fK5O1lvryggtj2CfBX--1--2j8yt_2x.jpg?tr=w-1600,c-at_max",
    author: "Author",
    cardNo: 6,
  },
];