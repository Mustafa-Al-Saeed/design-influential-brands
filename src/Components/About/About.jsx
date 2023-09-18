import HeadComponent from "../Global/HeadComponent";
import { AboutData } from "./AboutData";

const About = () => {
  return (
    <div className="bg-customGreen py-14 relative">
      <div className="before:border-r before:border-solid before:border-r-4 before:border-customWhite  before:h-20 before:pr-4 before:absolute before:right-16 before:top-0 container px-4 mx-auto max-w-[900px] text-center">
        <div>
          <HeadComponent
            title="Hello There"
            colorT="text-black"
            desc="We Are Glint"
            colorD="text-customWhite"
            colorB="before:bg-customLightGray"
          />
          <p className=" mx-auto max-w-[700px] pb-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
        </div>
        <div className="flex justify-center flex-wrap pt-6">
          {AboutData.map((part, index) => {
            return (
              <div
                key={index}
                className={`flex flex-wrap w-[50%] md:w-[25%] my-5 px-2 border-customWhite ${
                  AboutData[AboutData.length - 1] !== part
                    ? "md:border-r-2 "
                    : ""
                } ${part.id % 2 !== 0 ? "border-r-2 " : ""}`}
              >
                <span className="w-full text-customWhite font-bold text-5xl pb-2">
                  {part.numbers}
                </span>
                <span className="w-full font-bold">{part.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
