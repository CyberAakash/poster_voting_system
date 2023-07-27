import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PicsPage from "./pages/PicsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import VotePage from "./pages/VotePage";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Clear the login state and remove the data from local storage
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Query the "users" collection to check if the entered username and password exist
    const usersCollectionRef = collection(db, "users");
    const q = query(
      usersCollectionRef,
      where("username", "==", username),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
      // User found, set the isLoggedIn state to true
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      // User not found or credentials are invalid, show an error message
      alert("Invalid username or password");
    }
  };

  useEffect(() => {
    // Check if the user is logged in when the component loads
    const isLoggedInFromStorage = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(isLoggedInFromStorage === "true");
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Router>
          <div className="relative flex flex-col items-center justify-center w-screen overflow-hidden min-h-fit px-0 py-0 m-0">
            <button
              className="fixed z-50 bg-black text-white border-2 border-white top-40 lg:top-10 left-0 p-2 rounded-r-2xl"
              onClick={handleLogout}
            >
              Logout
            </button>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/vote" element={<VotePage />} />
              <Route exact path="/pics" element={<PicsPage />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/contact" element={<ContactPage />} />
              {/* <Route exact path="/trains" element={<Read />} />
            <Route path="/view/:tname" element={<ViewTrain />} /> */}
            </Routes>
          </div>
        </Router>
      ) : (
        <div className="relative flex flex-col gap-16 items-center justify-center m-0 p-0 sm:p-10 lg:px-40 h-screen w-screen overflow-hidden shadow-2xl ">
          <h1 className="z-40 text-base sm:text-2xl text-black font-semibold">
            <span className="text-lg sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-400 to-green-400">
              Why
            </span>{" "}
            don{"'"}t you just{" "}
            <span className="text-lg sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-400 to-green-400">
              LOGIN
            </span>{" "}
            already
          </h1>
          <div className="z-10 mix-blend-multiply absolute bg-[url(/gridsm.jpg)] bg-repeat bg-blend-lighten bg-center [mask-image:linear-gradient(180deg, white,rgba(255,255,255,0))] inset-0"></div>
          <img
            src="/beams.jpg"
            className="z-8 w-full h-full absolute max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          ></img>
          <form
            onSubmit={handleLogin}
            className="z-40 bg-white w-[20rem] h-[20rem] p-10 flex flex-col items-center justify-center gap-6 overflow-hidden shadow-2xl"
          >
            <input
              className="border border-black p-2  focus:outline-none"
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="border border-black p-2focus:outline-none"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-black text-white p-2 w-[80%]" type="submit">
              Login
            </button>
          </form>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
