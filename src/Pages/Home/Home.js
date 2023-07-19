import React from "react";
import AdvertisingProducts from "./Advertise/AdvertisingProducts";
import AllReviews from "./AllReviews/AllReviews";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ContactMe from "./ContactMe/ContactMe";
import Gallery from "./Gallery/Gallery";
import OurServices from "./OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisingProducts></AdvertisingProducts>
      <Gallery></Gallery>
      <Category></Category>
      <OurServices></OurServices>

      <AllReviews></AllReviews>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
