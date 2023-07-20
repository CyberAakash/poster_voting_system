import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PicsPage from "./components/PicsPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import VotePage from "./components/Votepage";

function App() {
  return (
    <>
      <Router>
        <div className="relative flex flex-col items-center justify-center w-screen overflow-hidden min-h-fit px-0 py-0 m-0">
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
    </>
  );
}

export default App;
