
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  borderColor: string;
  titleColor: string;
  imgPercentage: string;
  desPercentage: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  borderColor,
  titleColor,
  imgPercentage,
  desPercentage,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-slate-800 min-h-[260px] px-[10px] max-md:max-w-full">
      <div className="flex sm:flex-nowrap flex-1 py-2.5 pl-52 size-full">
        <div
          className={`flex flex-col gap-5   p-2.5 text-right ${desPercentage} max-md:max-w-full`}
        >
          <h2
            className={`flex flex-col justify-center w-full text-4xl font-bold leading-10 ${titleColor} max-md:max-w-full`}
          >
            <div className="flex flex-col flex-1 w-full max-md:max-w-full">
              <div className="pr-40 pl-64 w-full max-md:px-5 max-md:max-w-full">
                {title}
              </div>
            </div>
          </h2>
          <p className="flex flex-col justify-center pt-5 mt-5 w-full text-xl text-white max-md:max-w-full">
            <div className="flex flex-col flex-1 w-full max-md:max-w-full">
              <div className="flex flex-col pr-10 w-full max-md:pr-5 max-md:max-w-full">
                <div className="w-full leading-6 max-md:max-w-full">
                  {description}
                </div>
              </div>
            </div>
          </p>
        </div>
        <div className="flex flex-col  gap-[20px]  justify-center self-start pt-12 pr-6 pl-20 w-72 min-h-[305px] min-w-[240px] max-md:px-5">
          <div
            className={`flex flex-col pt-2.5 pr-3.5 pb-12 pl-2.5 w-full border-solid border-r-[3px] ${borderColor} min-h-[254px]`}
          >
            <div className="flex flex-col justify-center w-full max-w-[256px]">
              <div className="flex flex-col flex-1 w-full">
                <div className="flex flex-col items-center pr-6 pb-2 pl-6 w-full max-md:px-5">
                  <div className="flex items-start max-w-full w-[186px]">
                    <img
                      loading="lazy"
                      src={imageSrc}
                      className="object-contain aspect-square w-[186px]"
                      alt="Service illustration"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
