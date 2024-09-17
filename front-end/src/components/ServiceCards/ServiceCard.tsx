/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col flex-1 shrink justify-center p-4 basis-0 min-w-[240px]">
      <div className="flex flex-col justify-center p-2.5 w-full min-h-[312px]">
        <div className="flex flex-col justify-center w-full max-w-[350px]">
          <div className="flex flex-col flex-1 justify-center px-10 py-12 w-full bg-white rounded-xl shadow-sm max-md:px-5">
            <div className="flex flex-col w-full">
              <div className="flex items-start self-center w-[50px]">
                <img
                  loading="lazy"
                  src={imageSrc}
                  alt=""
                  className="object-contain aspect-square w-[50px]"
                />
              </div>
              <div className="flex flex-col mt-3.5 w-full text-center">
                <h3 className="flex flex-col items-center px-5 pb-px w-full text-base font-medium leading-tight text-slate-800">
                  {title}
                </h3>
                <p className="px-1.5 w-full text-lg leading-7 text-neutral-500">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
