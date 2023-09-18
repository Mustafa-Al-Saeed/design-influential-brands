import HeadComponent from "../Global/HeadComponent";
import { DataWorks } from "./DataWorks";

const Works = () => {
  const caption = document.querySelector("#text")
  
  return (
    <div className=" relative before:bg-RealBlack before:absolute before:h-[450px] before:w-full before:top-0 before:right-0">
      <div className="py-14 container mx-auto relative">
        <HeadComponent
          title="Recent Works"
          colorT="text-customGreen "
          desc="We love what we do, check out some of our latest works"
          colorD="text-customWhite"
          colorB="before:bg-customLightGray"
        />
        <div className=" flex flex-col lg:flex-row justify-center ">
          <div className=" flex flex-col">
            {DataWorks.map((work, index) => {
              return work.id % 2 !== 0 ? (
                <div
                  key={index}
                  className={` mx-auto before:absolute before:w-full before:h-full before:bg-RealBlack before:opacity-0 before:duration-500 hover:before:opacity-70 box relative overflow-hidden ${
                    work.id == 5
                      ? " w-[300px] md:w-[450px] lg-w-[560px] h-[550px] lg-h-[700px]"
                      : " w-[300px] md:w-[450px] lg-w-[560px] h-[450px] lg-h-[560px]"
                  }`}
                >
                  <div
                    style={{
                      backgroundImage: `url('${work.imgSrc}')`,
                    }}
                    className={`  duration-500 bg-center bg-cover w-full h-full hover:scale-[1.05] `}
                  ></div>

                  <div id="text" className=" cpation duration-500 absolute top-[100%] px-10 z-40 opacity-0">
                    <h5 className= " text-customWhite font-bold  ">
                      {work.capTitle}
                    </h5>
                    <p className=" text-customLightGray">{work.capCat}</p>
                  </div>

                </div>
              ) : (
                ""
              );
            })}
          </div>
          <div className=" flex flex-col">
            {DataWorks.map((work, index) => {
              return work.id % 2 === 0 ? (
                <div
                  key={index}
                  className={` mx-auto before:absolute before:w-full before:h-full before:bg-RealBlack before:opacity-0 before:duration-500 hover:before:opacity-70 box relative overflow-hidden ${
                    work.id == 2
                    ? " w-[300px] md:w-[450px] lg-w-[560px] h-[550px] lg-h-[700px]"
                    : " w-[300px] md:w-[450px] lg-w-[560px] h-[450px] lg-h-[560px]"
                  }`}
                >
                  <div
                    style={{
                      backgroundImage: `url('${work.imgSrc}')`,
                    }}
                    className={`  duration-500 bg-center bg-cover w-full h-full hover:scale-[1.05] `}
                  ></div>

                  <div id="text" className=" cpation duration-500 absolute top-[100%] px-10 z-40 opacity-0">
                    <h5 className= " text-customWhite font-bold  ">
                      {work.capTitle}
                    </h5>
                    <p className=" text-customLightGray">{work.capCat}</p>
                  </div>

                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
