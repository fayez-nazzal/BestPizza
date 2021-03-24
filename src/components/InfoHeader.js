import React from "react";

const InfoHeader = (props) => {
  return (
    <h1 className="mb-2 text-4xl tracking-wide text-center md:text-right md:text-6xl text-orange font-somar">
      {props.children}
    </h1>
  );
};

export default InfoHeader;
