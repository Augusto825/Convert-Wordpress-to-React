
import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col flex-1 shrink justify-center items-center self-stretch p-2.5 my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-w-[570px] max-md:max-w-full">
        <div className="flex flex-col flex-1 px-6 pt-8 pb-8 w-full bg-white rounded-xl shadow-sm max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center w-full max-md:max-w-full">
            <div className="flex flex-col justify-center pb-2.5 w-full text-base text-right min-h-[55px] text-slate-800 max-md:max-w-full">
              <div className="flex flex-wrap justify-center items-center px-1.5 w-full min-h-[45px] max-md:max-w-full">
                <input
                  type="text"
                  className="flex flex-col flex-1 shrink self-stretch px-3 pt-3 pb-3.5 my-auto w-full bg-white rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[500px] min-h-[40px] min-w-[240px] max-md:max-w-full"
                  placeholder="שם מלא *"
                  aria-label="שם מלא"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col justify-center pb-2.5 w-full text-base text-right min-h-[55px] text-slate-800 max-md:max-w-full">
              <div className="flex flex-wrap justify-center items-center px-1.5 w-full min-h-[45px] max-md:max-w-full">
                <input
                  type="tel"
                  className="flex flex-col flex-1 shrink self-stretch px-3 pt-3 pb-3.5 my-auto w-full bg-white rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[500px] min-h-[40px] min-w-[240px] max-md:max-w-full"
                  placeholder="טלפון *"
                  aria-label="טלפון"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col justify-center pb-2.5 w-full text-base text-right min-h-[55px] text-slate-800 max-md:max-w-full">
              <div className="flex flex-wrap justify-center items-center px-1.5 w-full min-h-[45px] max-md:max-w-full">
                <input
                  type="email"
                  className="flex flex-col flex-1 shrink self-stretch px-3 pt-3 pb-3.5 my-auto w-full bg-white rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[500px] min-h-[40px] min-w-[240px] max-md:max-w-full"
                  placeholder="כתובת מייל *"
                  aria-label="כתובת מייל"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col justify-center pb-2.5 w-full min-h-[50px] max-md:max-w-full">
              <div className="flex flex-wrap justify-center items-center px-1.5 w-full min-h-[40px] max-md:max-w-full">
                <div className="flex relative flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
                  <select
                    className="flex z-0 flex-col flex-1 shrink justify-center pt-1.5 pr-3.5 pb-2 pl-5 text-base leading-loose text-right bg-white rounded border-b border-solid basis-0 border-b-yellow-500 max-w-[490px] min-h-[40px] min-w-[240px] text-slate-800 max-md:max-w-full"
                    aria-label="על מה נדבר?"
                  >
                    <option value="">על מה נדבר?</option>
                    {/* Add more options here */}
                  </select>
                  <div className="flex absolute left-2.5 z-0 flex-col items-end self-start py-2 inset-y-[7px] min-h-[26px] w-[11px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d3490a582b1b201d54451fd8ed077be415d09c1cb1878c2303557812f24b5f8?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856"
                      alt=""
                      className="object-contain aspect-square w-[11px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center pb-2.5 w-full text-base font-medium leading-none text-center text-white min-h-[50px] max-md:max-w-full">
              <div className="flex flex-wrap items-end pr-80 pl-1 w-full min-h-[40px] max-md:pr-5 max-md:max-w-full">
                <button
                  type="submit"
                  className="flex flex-col grow shrink justify-center px-6 py-3.5 bg-yellow-500 rounded min-h-[40px] w-[118px] max-md:px-5"
                >
                  <span className="self-stretch my-auto">צור פניה חדשה</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
