import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col justify-center mt-5 text-base text-right text-slate-800 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink justify-center items-center p-2.5 w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col justify-center w-full max-w-6xl max-md:max-w-full">
          <div className="flex flex-col flex-1 px-6 pt-8 pb-8 w-full bg-white rounded-xl shadow-sm max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center w-full max-md:max-w-full">
              {/* Full Name Field */}
              <div className="flex flex-col justify-center pb-4 w-full max-md:max-w-full">
                <div className="flex flex-wrap justify-center items-center px-1.5 w-full max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full bg-white border-b border-b-yellow-500 max-w-[1082px] min-w-[240px] focus-within:border focus-within:border-gray-300 focus-within:rounded-sm">
                    <label htmlFor="fullName" className="sr-only">שם מלא</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      dir="rtl" 
                      className="w-full bg-transparent outline-none py-2 px-4 text-right" 
                      placeholder="שם מלא *"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Phone Field */}
              <div className="flex flex-col justify-center pb-4 w-full max-md:max-w-full">
                <div className="flex flex-wrap justify-center items-center px-1.5 w-full max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full bg-white border-b border-b-yellow-500 max-w-[1082px] min-w-[240px] focus-within:border focus-within:border-gray-300 focus-within:rounded-sm">
                    <label htmlFor="phone" className="sr-only">טלפון</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      dir="rtl" 
                      className="w-full bg-transparent outline-none py-2 px-4 text-right" 
                      placeholder="טלפון *"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Email Field */}
              <div className="flex flex-col justify-center pb-4 w-full max-md:max-w-full">
                <div className="flex flex-wrap justify-center items-center px-1.5 w-full max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full bg-white border-b border-b-yellow-500 max-w-[1082px] min-w-[240px] focus-within:border focus-within:border-gray-300 focus-within:rounded-sm">
                    <label htmlFor="email" className="sr-only">כתובת מייל</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      dir="rtl" 
                      className="w-full bg-transparent outline-none py-2 px-4 text-right" 
                      placeholder="כתובת מייל *"
                      required
                    />
                  </div>
                </div>
              </div>
              {/* Submit Button */}
              <div className="flex flex-col justify-left pt-4 w-full font-medium leading-none text-center text-white min-h-[50px] max-md:max-w-full">
                <div className="flex justify-center w-full">
                  <button type="submit" className="flex justify-center px-6 py-3.5 bg-yellow-500 rounded min-h-[50px] max-md:px-5">
                    <span className="self-stretch my-auto">צור פניה חדשה</span>
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
