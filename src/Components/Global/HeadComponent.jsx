import React from "react";

const HeadComponent = (props) => {
  return (
    <div className=" px-2">
      <span
        className={` text-[12px] w-fit mx-auto block text-customGreen ${props.colorT}`}
      >
        {props.title}
      </span>
      <h1
        className={`before:absolute before:bottom-0 before:right-0 before:h-[1px] before:w-[70%] before:mr-[15%] relative text-3xl sm:text-4xl text-center max-w-[600px] font-bold pb-6 mb-6  mx-auto ${props.colorD} ${props.colorB}`}
      >
        {props.desc}
      </h1>
    </div>
  );
};

export default HeadComponent;
