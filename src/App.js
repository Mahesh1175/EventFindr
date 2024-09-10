import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importing components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/HeroPage/Hero";
import Main from "./Components/Main";
import CardInfo from "./Components/CardInfo/CardInfo";

const App = () => {
  return (
  <>
    <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<><Header /><Hero /><Main /></>} />
            <Route path="/CardInfo/:id" element={<CardInfo />} />
          </Routes>
        </Router>
    </div>
    <Footer />
  </>
  );
}

export default App;