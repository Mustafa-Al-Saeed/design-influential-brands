import HeadComponent from "../Global/HeadComponent";
import { DataServices } from "./DataServices";

const Services = () => {
  return (
    <div className=" py-14 container mx-auto">
      <HeadComponent
        title="What We Do"
        colorT="text-customGreen "
        desc="We’ve got everything you need to launch and grow your business"
        colorD="text-RealBlack"
        colorB="before:bg-customLightGray"
      />

      <div className="flex flex-wrap justify-between pt-14  ">
        {DataServices.map((Service, index) => {
          return (
            <div key={index} className={` w-[100%] md:w-[49%]  py-4`}>
              <div
                className={` md:max-w-[450px] flex md:flex-nowrap flex-wrap md:text-left text-center ${
                  Service.id % 2 === 0 ? "" : "ml-auto"
                }`}
              >
                <div className=" w-[45px] text-customGreen text-4xl pb-2 mx-auto md:ml-3">
                  {Service.icon}
                </div>
                <div className="px-3 md:pl-3">
                  <h3 className=" text-RealBlack font-bold pb-5 text-2xl">
                    {Service.titleService}
                  </h3>
                  <p className=" text-customLightGray ">
                    {Service.descService}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
