import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  window.addEventListener("scroll", function () {
    let menuEle = document.querySelector("#stickyMenu");
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;

    if (scrollPosition > 0 && scrollPosition < windowHeight) {
      menuEle.classList.add("bg-transparent");
      menuEle.classList.remove("bg-black");
      if (scrollPosition > 200 && scrollPosition < windowHeight) {
        menuEle.classList.remove("bg-transparent");
        menuEle.classList.add("bg-black");
      }
    }
  });

  return (
    <div className=" z-10 absolute flex items-center justify-between bg-transparent p-5">
      <div className=" h-8 cursor-pointer">
        <img
          className="h-full"
          src="https://preview.colorlib.com/theme/glint/images/logo.png.webp"
          alt=""
        />
      </div>
      <div
        id="stickyMenu"
        className=" hover:text-customWhite text-customGreen flex cursor-pointer items-center text-2xl font-bold fixed right-5 top-5 px-2 py-1 "
      >
        <span className=" duration-500  mr-2 hidden sm:block ">Menu</span>
        <GiHamburgerMenu className="text-white" />
      </div>
    </div>
  );
};

export default Header;
