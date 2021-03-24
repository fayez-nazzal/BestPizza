import React from "react";
import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout";
import PizzaSlideImages from "../components/PizzaSlideImages";
import Pizzas from "../components/Pizzas";

const index = () => {
  return (
    <Layout>
      <PizzaSlideImages />
      <AboutUs />
      <Pizzas />
    </Layout>
  );
};

export default index;
