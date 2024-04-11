import React from "react";
import Info from "./components/Info.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Interests from "./components/Interests.js";
import ReactDOM from "react-dom";
import "./styles.css";

export default function App() {
  return (
    <main className="main">
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  );
}
