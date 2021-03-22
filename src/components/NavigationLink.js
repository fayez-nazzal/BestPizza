import React from "react";
import { Link } from "react-scroll";

const LinkElement = (props) => {
  return (
    <li
      className={
        props.insideMenu
          ? "text-4xl font-somar text-black font-bold h-14 flex justify-center items-center bg-orange-bright"
          : "hidden h-full text-4xl font-bold text-black md:block font-somar p-full"
      }
    >
      <Link
        className={`flex justify-center items-center h-full ${
          props.insideMenu && "w-full"
        } px-3  transition-all duration-200 cursor-pointer hover:bg-red-dark`}
        to="services"
        smooth
      >
        {props.children}
      </Link>
    </li>
  );
};

export default LinkElement;
