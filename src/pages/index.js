import React from "react";
import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout";
import PizzaSlideImages from "../components/PizzaSlideImages";
import Pizzas from "../components/Pizzas";
import OurLocation from "../components/OurLocation";

const index = () => {
  return (
    <Layout>
      <PizzaSlideImages />
      <AboutUs />
      <Pizzas />
      <OurLocation />
    </Layout>
  );
};

export default index;
