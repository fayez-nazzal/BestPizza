import React from "react";

const Flex = (props) => {
  return (
    <div
      className={`flex flex-col md:flex-row my-4 md:my-8 ${props.align} items-center md:items-start bg-red-dark w-screen md:w-bscreen xl:w-max md:mx-4 p-2 lg:p-6 md:rounded-md bg-opacity-80`}
    >
      {props.children}
    </div>
  );
};

export default Flex;
