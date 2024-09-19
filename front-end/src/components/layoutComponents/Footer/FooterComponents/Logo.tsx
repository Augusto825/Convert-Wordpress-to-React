
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col grow shrink items-start md:w-[14%] min-w-0">
      <div className="flex flex-col justify-center max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f504b80141c6414a2a719e3ffd8edfc0bc6101f45784ce468c91c036d907fecd?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856"
          className="object-contain self-stretch my-auto aspect-[1.49] max-w-[139px] w-[139px]"
          alt="Company logo"
        />
      </div>
    </div>
  );
};

export default Logo;
