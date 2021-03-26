import React from "react";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { StaticImage } from "gatsby-plugin-image";
import NavigationLink from "./NavigationLink";

const Navbar = (props) => {
  return (
    <div className="sticky top-0 z-50 h-18">
      <nav
        className="absolute top-0 left-0 right-0 border-b border-white border-opacity-50 select-none h-18"
        style={{
          backgroundColor: `rgba(233, 143, 15, ${props.opacity})`,
        }}
      >
        <ul className="flex items-center h-18">
          <button className="focus:outline-none" onClick={props.toggleMenu}>
            <FaBars
              className={`${props.menuOpen ? "text-tussock" : "text-black"} ${
                props.menuOpen || "hover:text-indian"
              } md:hidden mr-2`}
              size={32}
            />
          </button>
          <NavigationLink to="about-us">عن خدماتنا</NavigationLink>
          <NavigationLink to="pizzas">البيتزا</NavigationLink>
          <NavigationLink to="location">موقعنا</NavigationLink>
          <StaticImage
            className="mr-auto ml-1.5"
            height={54}
            src="../images/logo.png"
            alt="best pizza logo"
            loading="eager"
            placeholder="none"
          />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
