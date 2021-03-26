import React from "react";
import SectionHeader from "./SectionHeader";
import InfoFlex from "./InfoFlex";
import InfoHeader from "./InfoHeader";
import InfoP from "./InfoP";
import { StaticImage } from "gatsby-plugin-image";

const imageProps = {
  className: "m-4",
  width: 303,
  height: 306,
  placeholder: "blurred",
};

const Pizzas = () => {
  return (
    <section id="pizzas" className="px-4 py-8 md:px-16 pizzas">
      <SectionHeader text="البيتزا" />
      <div className="grid items-center justify-center grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto">
        <PizzaFlex>
          <InfoHeader>بيتزا ايطالية</InfoHeader>
          <InfoP inCell>جبنة موزاريلا, طماطم, بصل</InfoP>
          <StaticImage
            src="../images/italianPizza.png"
            alt="cheese pizza"
            {...imageProps}
          />
        </PizzaFlex>
        <PizzaFlex>
          <InfoHeader>بيتزا ببروني</InfoHeader>
          <InfoP inCell>جبنة موزاريلا, ببروني, طماطم</InfoP>
          <StaticImage
            src="../images/tastyPizza.png"
            alt="cheese pizza"
            {...imageProps}
          />
        </PizzaFlex>
        <PizzaFlex>
          <InfoHeader>بيتزا هاواي</InfoHeader>
          <InfoP inCell>جبنة موزاريلا, فلفل, زيتون, طماطم, بصل</InfoP>
          <StaticImage
            src="../images/hawaiiPizza.png"
            alt="cheese pizza"
            {...imageProps}
          />
        </PizzaFlex>
        <PizzaFlex>
          <InfoHeader>بيتزا البيت</InfoHeader>
          <InfoP>جبنة بلدية, طماطم, خس</InfoP>
          <StaticImage
            src="../images/assortedPizza.png"
            alt="cheese pizza"
            {...imageProps}
          />
        </PizzaFlex>
        <PizzaFlex>
          <InfoHeader>بيتزا الجبنة</InfoHeader>
          <InfoP inCell>جبنة موزاريلا, جبنة قطع</InfoP>
          <StaticImage
            src="../images/chesePizza.png"
            alt="cheese pizza"
            {...imageProps}
          />
        </PizzaFlex>
        <PizzaFlex>
          <InfoHeader>بيتزا نباتية</InfoHeader>
          <InfoP inCell>جبنة توفو, فلفل, زيتون, مشروم</InfoP>
          <StaticImage
            src="../images/veganPizza.png"
            alt="cheese pizza"
            {...imageProps}
          />
        </PizzaFlex>
      </div>
    </section>
  );
};

export default Pizzas;

const PizzaFlex = (props) => {
  return (
    <InfoFlex bg="white" opacity={20} align={props.align} inGrid>
      {props.children}
    </InfoFlex>
  );
};
