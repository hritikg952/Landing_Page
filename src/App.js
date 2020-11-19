import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Section1 from "./components/section1/Section1.jsx";
import AboutMe from "./components/about/AboutMe";
import Services from "./components/services/Services";
import Stats from "./components/stats/Stats";
import Experience from "./components/experience/Experience";
import Pricing from "./components/pricing/Pricing";
import Query from "./components/query/Query";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <AboutMe />
      <Services />
      <Stats />
      <Experience />
      <Pricing />
      <Query />
      <Footer />
    </div>
  );
}

export default App;
