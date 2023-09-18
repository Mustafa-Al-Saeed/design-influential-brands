import ScrollDown from "./ScrollDown";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsBehance } from "react-icons/bs";
import { BiLogoDribbble } from "react-icons/bi";

const Home = () => {
  return (
    <div className=" h-screen min-h-[800px] bg-center bg-cover relative z-[0] bg-[url('https://preview.colorlib.com/theme/glint/images/hero-bg.jpg')] before:w-full before:h-full before:absolute before:right-0 before:top-0 before:bg-black before:opacity-[0.7] before:z-[-1] ">
      <section className=" pb-[96px] h-[calc(100%+72px)] px-10 container mx-auto flex flex-wrap justify-between items-center ">
        <div className=" text-center sm:text-left  max-w-[700px] w-[100%] sm:w-[calc(100%-36px)]">
          <span className=" text-customWhiteOnBlack tracking-wider font-bold text-lg inline-block mb-4">
            WELCOME TO GLINT
          </span>
          <p className=" text-customWhite lg:text-6xl md:text-5xl text-3xl font-bold leading-[1.4] pb-10 ">
            We are a creative group of people who design influential brands and
            digital experiences.
          </p>
          <ul className="flex flex-col sm:flex-row text-customWhite pt-10 ">
            <li>
              <a
                className=" w-full mb-4 duration-700  hover:bg-customWhite hover:text-black inline-block border-2 px-4 py-2"
                href="#"
              >
                START A PROJECT
              </a>
            </li>
            <li>
              <a
                className=" w-full mb-4 duration-700  hover:bg-customWhite hover:text-black inline-block border-2 px-4 py-2"
                href="#"
              >
                MORE ABOUT US
              </a>
            </li>
          </ul>
        </div>
        <div className=" hidden sm:block">
          <ul className=" text-customWhite">
            <li>
              <a
                className=" before:duration-500 before:text-[0px] hover:before:text-[15px] before:top-[50%] before:translate-y-[-50%] before:text-customGreen before:right-[46px] before:absolute before:content-['Facebook'] relative border rounded-[50%] my-1 p-2 inline-block"
                href="#"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                className=" before:duration-500 before:text-[0px] hover:before:text-[15px] before:top-[50%] before:translate-y-[-50%] before:text-customGreen before:right-[46px] before:absolute before:content-['Twitter'] relative border rounded-[50%] my-1 p-2 inline-block"
                href="#"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                className=" before:duration-500 before:text-[0px] hover:before:text-[15px] before:top-[50%] before:translate-y-[-50%] before:text-customGreen before:right-[46px] before:absolute before:content-['Instagram'] relative border rounded-[50%] my-1 p-2 inline-block"
                href="#"
              >
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a
                className=" before:duration-500 before:text-[0px] hover:before:text-[15px] before:top-[50%] before:translate-y-[-50%] before:text-customGreen before:right-[46px] before:absolute before:content-['Behance'] relative border rounded-[50%] my-1 p-2 inline-block"
                href="#"
              >
                <BsBehance />
              </a>
            </li>
            <li>
              <a
                className=" before:duration-500 before:text-[0px] hover:before:text-[15px] before:top-[50%] before:translate-y-[-50%] before:text-customGreen before:right-[46px] before:absolute before:content-['Dribbble'] relative border rounded-[50%] my-1 p-2 inline-block"
                href="#"
              >
                <BiLogoDribbble />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <ScrollDown />
    </div>
  );
};

export default Home;
