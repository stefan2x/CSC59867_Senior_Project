import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import AppName from "../components/AppName";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <AppName />
      <Slider />
      <Categories />
      <FeaturedProducts />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
