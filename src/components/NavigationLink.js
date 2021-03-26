import React from "react";
import { Link } from "react-scroll";

const LinkElement = (props) => {
  return (
    <li
      className={
        props.insideMenu
          ? `text-4xl font-somar text-white font-bold h-14 flex justify-center items-center`
          : "hidden h-full text-4xl font-bold text-white md:block font-somar p-full"
      }
    >
      <Link
        className={`flex justify-center items-center h-full ${
          props.insideMenu && "w-full"
        } px-3  transition-all duration-200 cursor-pointer hover:bg-red-dark`}
        style={{
          backgroundColor: `rgb(233,143,15,${props.opacity}`,
        }}
        to="services"
        smooth
      >
        {props.children}
      </Link>
    </li>
  );
};

export default LinkElement;
