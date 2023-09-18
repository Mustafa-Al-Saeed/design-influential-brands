import HeadComponent from "../Global/HeadComponent"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DataClientsCompanies } from "./DataClientsCompanies";
import { DataOfTesti } from "./DataOfTesti";

const Clients = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const responsive_S = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className=" bg-[#dadada]">
        <div className=" container mx-auto py-14">
            <HeadComponent
            title="What We Do"
            colorT="text-customGreen "
            desc="We’ve got everything you need to launch and grow your business"
            colorD="text-RealBlack"
            colorB="before:bg-customLightGray"
            />
            <div>
                <div>
                  <Carousel className=" before:absolute before:w-[60%] before:h-[1px] before:bg-customLightGray  before:bottom-0 before:translate-x-[-50%] before:left-[50%] relative container mx-auto pt-20" responsive={responsive}>
                    {DataClientsCompanies.map((card, index) => {
                      return (
                        <div
                          key={index}
                          className=" flex flex-col items-center text-center px-3 cursor-pointer py-10 mb-14 "
                        >
                          <div
                            className="bg-cover text-8xl opacity-[0.5] hover:opacity-100 duration-500   "
                          >{card.logo}</div> 
                        </div>
                      );
                  })}
                  </Carousel>
                </div>
                <div>
                  <Carousel className=" before:absolute before:w-[60%] before:h-[1px] before:bg-customLightGray  before:bottom-0 before:translate-x-[-50%] before:left-[50%] relative container mx-auto pt-20" responsive={responsive_S}>
                    {DataOfTesti.map((testi , index) => {
                      return (
                        <div key={index} className="px-3 cursor-pointer mb-14 max-w-[450px] mx-auto text-center">
                          <p>
                            {testi.paragraph}
                          </p>
                          <div>
                            <img src={testi.img} alt="" className=" w-[75px] h-[75px] rounded-[50%] my-5 mx-auto"/>
                            <div className=" flex flex-col">
                              <span className=" font-bold">{testi.name}</span>
                              <span>{testi.company}</span>
                            </div>
                          </div>
                        </div>
                      );
                  })}
                  </Carousel>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients