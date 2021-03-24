import React from "react";

const SlideText = (props) => {
  return (
    <div className="absolute left-0 right-0 h-32 py-4 font-medium text-center text-white bg-black border-t border-b border-white md:border md:rounded-lg md:px-3 md:py-6 border-box md:w-140 md:h-36 top-32 md:top-48 md:right-14 font-somar bg-opacity-30 border-opacity-40">
      <h1 className="text-2xl tracking-wider md:tracking-wide md:text-5xl text-orange text-shadow">
        {props.title}
      </h1>
      <p className="mt-4 text-xl tracking-wide md:text-3xl">{props.children}</p>
    </div>
  );
};

export default SlideText;
