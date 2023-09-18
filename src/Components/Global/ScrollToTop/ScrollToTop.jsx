import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  return (
    <a
      id="StickyToUp"
      href="#"
      className=" z-[100] duration-300 w-16 h-16 bg-black flex text-customWhiteOnBlack hover:text-customWhite justify-center items-center text-2xl fixed right-5 bottom-5 px-2 py-1 "
    >
      <AiOutlineArrowUp />
    </a>
  );
};

export default ScrollToTop;
