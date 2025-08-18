import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";


function Home() {
  return (
    <>
      <Navbar />
      {/* <h1>Welcome Home Page</h1> */}
      <Hero />
      {/* You can add other homepage sections here */}
      <Features/>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
