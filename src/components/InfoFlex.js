import React from "react";

const InfoFlex = (props) => {
  return (
    <div
      className={`flex flex-col bg-opacity-70 ${
        props.inGrid
          ? "w-full h-full justify-around text-center"
          : "w-screen md:w-bscreen xl:w-max md:mx-4  my-4 md:my-8 md:flex-row lg:p-6 md:items-start"
      } ${props.align} items-center bg-${
        props.bg
      } p-2 lg:p-4 box-border md:rounded-md`}
    >
      {props.children}
    </div>
  );
};

export default InfoFlex;
