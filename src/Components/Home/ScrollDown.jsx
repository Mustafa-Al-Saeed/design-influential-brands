import { BiSolidDownArrow } from "react-icons/bi";

const ScrollDown = () => {
  window.addEventListener("scroll", function () {
    let toUp = document.querySelector("#StickyToUp");
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;

    if (scrollPosition > 0 && scrollPosition < windowHeight) {
      toUp.classList.add("opacity-0");
      toUp.classList.add("z-[-10]");
      toUp.classList.remove("opacity-100");
      toUp.classList.remove("z-0");
      if (scrollPosition > 300 && scrollPosition < windowHeight) {
        toUp.classList.remove("opacity-0");
        toUp.classList.remove("z-[-10]");
        toUp.classList.add("opacity-100");
        toUp.classList.add("z-0");
      }
    }
  });

  return (
    <a
      href="#"
      className=" w-fit flex items-start  border-r border-solid border-r-4 border-customGreen h-20 pr-4 absolute right-16 bottom-0"
    >
      <BiSolidDownArrow className=" text-customGreen mr-3 mt-1" />
      <span className=" tracking-widest text-customWhite ">Scroll Down</span>
    </a>
  );
};

export default ScrollDown;
