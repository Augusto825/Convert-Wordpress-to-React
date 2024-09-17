
import React from "react";

const Logo: React.FC = () => (
  <div className="flex flex-col grow justify-center min-h-[80px] max-md:mt-10">
    <div className="flex flex-col flex-1 w-full">
      <div className="flex flex-col w-full">
        <div className="flex justify-center items-center w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/407d5e893cd2e980e35df7ce58e994accb0cff953e728ba506e749432c4c0924?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856"
            className="object-contain self-stretch my-auto aspect-[1.5] max-w-[120px] w-[120px]"
            alt="Company logo"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Logo;
