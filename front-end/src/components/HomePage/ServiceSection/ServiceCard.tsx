import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  backgroundColor,
}) => {
  return (
    <div className={`flex flex-col mx-[15px] flex-1 shrink justify-center basis-0 p-[50px] min-w-[240px] rounded-xl shadow-sm ${backgroundColor} min-h-[556px] max-md:px-5 max-w-[350px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}>
      {/* <div
        className={`p-[50px]  flex-col px-12 pt-12 pb-20 w-full rounded-xl shadow-sm ${backgroundColor} min-h-[556px] max-md:px-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
      > */}
        <div className="justify-center w-full max-w-[350px]">
          <div className="w-full">
            <div dir="rtl" className="w-full mb-[35px]">
              <img
                loading="lazy"
                src={imageUrl}
                className="object-contain self-stretch my-auto aspect-square max-w-[113px] w-[100px]"
                alt=""
              />
            </div>
            <div className="w-full text-right">
              <h3 className="pb-px w-full text-[24px] font-bold leading-tight text-sky-400 font-[Rubik]">
                {title}
              </h3>
              <p className="pb-px w-full text-base leading-7 text-neutral-500 font-[Roboto]">
                {description}
              </p>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
