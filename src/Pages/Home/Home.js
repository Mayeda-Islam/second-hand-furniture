import React from "react";
import AdvertisingProducts from "./Advertise/AdvertisingProducts";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <div className=" container mx-auto">
      <Banner></Banner>
      <AdvertisingProducts></AdvertisingProducts>
      <Gallery></Gallery>
      <Category></Category>
    </div>
  );
};

export default Home;
