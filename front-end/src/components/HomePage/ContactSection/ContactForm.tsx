import React from "react";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <div className="max-w-full">
      <div className="p-[30px] shadow-inner rounded-xl shadow-gray-900">
        <form className="text-base text-right text-white max-md:max-w-full">
          <input type="hidden" name="post_id" value="1282" />
          <input type="hidden" name="form_id" value="0acf433" />
          <input
            type="hidden"
            name="referer_title"
            value="דף הבית - AIWEBDEV"
          />
          <input type="hidden" name="queried_id" value="1282" />
          <div className=" mx-[-8px] mb-[-16px] flex flex-wrap bg-[#19212A] rounded-xl shadow-sm max-md:px-5 max-md:max-w-full">
            <div className="px-2 mb-4 w-3/6 max-md:max-w-[50%] min-h-[61px]">
              <input
                type="text"
                id="fullName"
                className="shrink self-stretch p-3 my-auto w-full bg-[#19212A] rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[195px] min-h-[40px] transition-colors duration-300
                   focus-visible:outline-none focus-visible:border-yellow-800"
                placeholder="שם מלא *"
                required
              />
            </div>
            <div className="px-2 mb-4 w-3/6 max-md:max-w-[50%] min-h-[61px]">
              <input
                type="tel"
                dir="rtl"
                id="phone"
                className="shrink self-stretch p-3 my-auto w-full bg-[#19212A] rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[195px] min-h-[40px] max-md:pl-5 transition-colors duration-300
                   focus-visible:outline-none focus-visible:border-yellow-800"
                placeholder="טלפון *"
                required
              />
            </div>
            <div className="px-2 mb-4 w-3/6 max-md:max-w-[50%] min-h-[61px]">
              <input
                type="email"
                id="email"
                className="shrink self-stretch p-3 my-auto w-full bg-[#19212A] rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[195px] min-h-[40px] transition-colors duration-300
                  focus-visible:outline-none focus-visible:border-yellow-800"
                placeholder="כתובת מייל *"
                required
              />
            </div>
            <div className="flex justify-end font-medium px-2 mb-4 w-full max-md:max-w-full leading-none text-center text-yellow-500">
              <button
                type="submit"
                className="w-1/3 p-[7px] shrink justify-center bg-[#19212A] border border-yellow-500 border-solid min-h-[40px] transition-colors duration-300 hover:border-white hover:text-white"
              >
                <span className="pr-1.5 text-xs w-full">
                  <span>צור פניה חדשה</span>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
