import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Wcu from "../components/Wcu";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      {/* <h1>Welcome Home Page</h1> */}
      <Hero />
      {/* You can add other homepage sections here */}
      <Features/>
      <TestimonialsCarousel/>
      <Wcu/>
      <Footer/>
    </>
  );
}

export default Home;
