import React from "react";
import HeroBg from "../assets/images/Rectangle.png";
import HeroImage from "../assets/images/hero.png";

const Hero: React.FC = () => {
  return (
    <section className="flex relative flex-col pt-52 w-full min-h-[989px] max-md:pt-24 max-md:max-w-full">
      <img
        loading="lazy"
        src={HeroBg}
        className="object-cover absolute inset-0 size-full"
        alt="Background image"
      />
      <div className="flex relative flex-col justify-center w-full text-6xl font-bold leading-tight text-center text-white max-md:max-w-full max-md:text-4xl">
        <div className="flex flex-col flex-1 w-full max-md:max-w-full max-md:text-4xl">
          {/* <div className="w-full text-6xl max-md:px-5 max-md:max-w-full max-md:text-4xl"> */}
          <h2 className="">איכות ללא פשרות</h2>
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
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fca10ec972a43181429d346c559e797e2904e77d9185308affc950d41c7b2cd?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856"
                    className="object-contain w-5 aspect-square"
                    alt=""
                  /> */}
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.817383 10.3201C0.817383 15.6716 5.15332 20.0076 10.5049 20.0076C15.8564 20.0076 20.1924 15.6716 20.1924 10.3201C20.1924 4.96851 15.8564 0.632568 10.5049 0.632568C5.15332 0.632568 0.817383 4.96851 0.817383 10.3201ZM18.3174 10.3201C18.3174 14.6365 14.8213 18.1326 10.5049 18.1326C6.18848 18.1326 2.69238 14.6365 2.69238 10.3201C2.69238 6.00366 6.18848 2.50757 10.5049 2.50757C14.8213 2.50757 18.3174 6.00366 18.3174 10.3201ZM15.5049 9.53882V11.1013C15.5049 11.3591 15.2939 11.5701 15.0361 11.5701H10.5049V14.1873C10.5049 14.6052 10.001 14.8123 9.7041 14.5193L5.83691 10.6521C5.65332 10.4685 5.65332 10.1716 5.83691 9.98804L9.7041 6.12085C10.001 5.82397 10.5049 6.03491 10.5049 6.45288V9.07007H15.0361C15.2939 9.07007 15.5049 9.28101 15.5049 9.53882Z"
                      fill="white"
                    />
                  </svg>
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
        <div className="flex flex-col flex-1 justify-center items-center w-full max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            style={{ width: "1006px", height: "378" }}
            src={HeroImage}
            className="object-contain w-full aspect-[2.66] max-md:max-w-full"
            alt="Decorative image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
