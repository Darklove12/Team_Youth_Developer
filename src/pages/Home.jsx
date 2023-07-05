import React from "react";
import Slider from "../components/Slider";
import Category from "../components/Category";
import Productcard from "../components/Productcard";
import Footer from "../components/Footer";

const Home = () => {
 
  return (
    <div className="home">
      <div className="main">
        <Slider />
        <br />
        <Productcard />
        <Category />
      </div>

      <Footer />
    </div>
  ); 
};


export default Home;
