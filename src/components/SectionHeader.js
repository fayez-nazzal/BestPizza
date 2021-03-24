import React from "react";

const SectionHeader = (props) => {
  return (
    <h1 className="text-5xl font-bold text-center text-white md:text-right md:mr-16 md:text-7xl font-somar">
      {props.text}
    </h1>
  );
};

export default SectionHeader;
