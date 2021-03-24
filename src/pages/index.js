import React from "react";
import AboutUs from "../components/AboutUs";
import Layout from "../components/Layout";
import PizzaSlideImages from "../components/PizzaSlideImages";

const index = () => {
  return (
    <Layout>
      <PizzaSlideImages />
      <AboutUs />
    </Layout>
  );
};

export default index;
