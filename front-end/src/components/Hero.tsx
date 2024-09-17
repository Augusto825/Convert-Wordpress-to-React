import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex relative flex-col pt-52 w-full min-h-[989px] max-md:pt-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/10841517f64b582f78f3f51f84e9cff2e68c0274ac8f7ffb6fe32ed28365b703?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856"
        className="object-cover absolute inset-0 size-full"
        alt="Background image"
      />
      <div className="flex relative flex-col justify-center w-full text-6xl font-bold leading-tight text-center text-white max-md:max-w-full max-md:text-4xl">
        <div className="flex flex-col flex-1 w-full max-md:max-w-full max-md:text-4xl">
          {/* <div className="w-full text-6xl max-md:px-5 max-md:max-w-full max-md:text-4xl"> */}
          <h2 className="">
            איכות ללא פשרות

          </h2>
          {/* </div> */}
        </div>
      </div>
      <div className="flex relative flex-col justify-center pb-11 mt-5 w-full text-2xl leading-none text-center text-white max-md:max-w-full">
        <div className="flex flex-col flex-1 w-full max-md:max-w-full">
          <div className="flex flex-col items-center px-20 pt-2 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[567px]">
              <div className="flex flex-wrap gap-2.5">
                <div className="flex-auto">אתר אינטרנט, אינסטגרם ופייסבוק.</div>
                <div className="grow shrink font-bold w-[173px]">
                  קידום מותאם אישית:
                </div>
              </div>
              <div className="self-center">תתחיל כאן ותן לעסק שלך לבלוט.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative flex-col justify-center pt-10 mt-5 w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 w-full max-md:max-w-full">
          <div className="flex flex-col items-center w-full pl-[857px] pr-[856px] max-md:px-5 max-md:max-w-full">
            <button className="flex justify-center items-start px-11 pt-5 pb-4 bg-yellow-500 rounded-[50px] max-md:px-5">
              <div className="flex gap-1.5 justify-center">
                <div className="flex flex-col items-center w-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fca10ec972a43181429d346c559e797e2904e77d9185308affc950d41c7b2cd?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856"
                    className="object-contain w-5 aspect-square"
                    alt=""
                  />
                </div>
                <div className="text-xl font-medium leading-none text-center text-white min-w-[94px]">
                  התחל כאן
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex relative flex-col justify-center pt-20 mt-5 w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-center items-center px-96 w-full max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c363884d3b3cbc87373e84b604a326a65d939b9c450acca2861d9c96906adeba?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856"
            className="object-contain w-full aspect-[2.66] max-md:max-w-full"
            alt="Decorative image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
