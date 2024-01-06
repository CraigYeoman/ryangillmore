import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/ryangillmore" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
