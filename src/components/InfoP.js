import React from "react";

const InfoP = (props) => {
  return (
    <p
      className={`mb-4 mr-2 text-2xl tracking-wide md:mb-0 md:text-3xl ${
        props.inCell ? "self-stretch" : "md:w-115"
      } font-somar`}
    >
      {props.children}
    </p>
  );
};

export default InfoP;
