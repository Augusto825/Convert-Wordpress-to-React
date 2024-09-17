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
    <div className="flex flex-col flex-1 shrink justify-center px-4 basis-0 min-w-[240px]">
      <div
        className={`flex flex-col px-12 pt-12 pb-20 w-full rounded-xl shadow-sm ${backgroundColor} min-h-[556px] max-md:px-5 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
      >
        <div className="flex flex-col justify-center w-full max-w-[350px]">
          <div className="flex flex-col flex-1 w-full">
            <div className="flex flex-col w-full">
              <div className="flex items-center w-full">
                <img
                  loading="lazy"
                  src={imageUrl}
                  className="object-contain self-stretch my-auto aspect-square max-w-[113px] w-[100px]"
                  alt=""
                />
              </div>
              <div className="flex flex-col mt-9 w-full text-right">
                <h3 className="pb-px w-full text-2xl font-bold leading-tight text-sky-400">
                  {title}
                </h3>
                <p className="pb-px w-full text-base leading-7 text-neutral-500">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
