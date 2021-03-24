import React from "react";

const InfoP = (props) => {
  return (
    <p className="mb-4 mr-2 text-2xl tracking-wide text-black md:mb-0 md:text-3xl md:w-115 font-somar">
      {props.children}
    </p>
  );
};

export default InfoP;
