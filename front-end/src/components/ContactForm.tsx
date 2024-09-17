
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col justify-center mt-5 text-base text-right text-slate-800 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink justify-center items-center p-2.5 w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col justify-center w-full max-w-6xl max-md:max-w-full">
          <div className="flex flex-col flex-1 px-6 pt-8 pb-8 w-full bg-white rounded-xl shadow-sm max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center w-full max-md:max-w-full">
              <div className="flex flex-col justify-center pb-2.5 w-full min-h-[55px] max-md:max-w-full">
                <div className="flex flex-wrap justify-center items-center px-1.5 w-full min-h-[45px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch px-3 pt-3 pb-3.5 my-auto w-full bg-white rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[1082px] min-h-[40px] min-w-[240px] max-md:max-w-full">
                  <label htmlFor="fullName" className="sr-only">שם מלא</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full bg-transparent"
                    placeholder="שם מלא *"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center pb-2.5 w-full min-h-[55px] max-md:max-w-full">
              <div className="flex flex-wrap justify-center items-center px-1.5 w-full min-h-[45px] max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink justify-center self-stretch px-7 py-3.5 my-auto w-full bg-white rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[1082px] min-h-[40px] min-w-[240px] max-md:pl-5 max-md:max-w-full">
                  <label htmlFor="phone" className="sr-only">טלפון</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-transparent"
                    placeholder="טלפון *"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center pb-2.5 w-full min-h-[55px] max-md:max-w-full">
              <div className="flex flex-wrap justify-center items-center px-1.5 w-full min-h-[45px] max-md:max-w-full">
                <div className="flex flex-col flex-1 shrink self-stretch px-3 pt-3 pb-3.5 my-auto w-full bg-white rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[1082px] min-h-[40px] min-w-[240px] max-md:max-w-full">
                  <label htmlFor="email" className="sr-only">כתובת מייל</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent"
                    placeholder="כתובת מייל *"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center pb-2.5 w-full font-medium leading-none text-center text-white min-h-[50px] max-md:max-w-full">
              <div className="flex flex-wrap items-end pl-1 w-full min-h-[40px] pr-[930px] max-md:pr-5 max-md:max-w-full">
                <button type="submit" className="flex flex-col grow shrink justify-center px-6 py-3.5 bg-yellow-500 rounded min-h-[40px] w-[118px] max-md:px-5">
                  <div className="flex justify-center items-center pr-1.5 w-full">
                    <span className="self-stretch my-auto">צור פניה חדשה</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </form>
  );
};

export default ContactForm;