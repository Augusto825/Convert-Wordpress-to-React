import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col grow shrink justify-center w-[40%] mr-[60px] p-[10px]">
      <div className="items-center w-full">
        <div className="p-[30px] w-full rounded-[10px] bg-white shadow-custom-black">
          <form className="max-md:max-w-full">
            <input type="hidden" name="post_id" value="1282" />
            <input type="hidden" name="form_id" value="1282" />
            <input type="hidden" name="referer_title" value="1282" />
            <input type="hidden" name="queried_id" value="1282" />
            <div className="flex flex-wrap flex-col mx-[-5px] mb-[-10px] max-md:max-w-full">
              {/* Full Name Field */}
              <div className="flex flex-col flex-1 shrink self-stretch flex-wrap items-center px-[5px] mb-[10px] relative min-h-[1px] w-full bg-white border-b border-b-yellow-500 max-w-[1082px] focus-within:border focus-within:border-gray-300 focus-within:rounded-sm">
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
              {/* Phone Field */}
              <div className="flex flex-col flex-1 shrink self-stretch flex-wrap items-center px-[5px] mb-[10px] relative min-h-[1px] w-full bg-white border-b border-b-yellow-500 max-w-[1082px] focus-within:border focus-within:border-gray-300 focus-within:rounded-sm">
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
              {/* Email Field */}
              <div className="flex flex-col flex-1 shrink self-stretch flex-wrap items-center px-[5px] mb-[10px] relative min-h-[1px] w-full bg-white border-b border-b-yellow-500 max-w-[1082px] focus-within:border focus-within:border-gray-300 focus-within:rounded-sm">
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
              <div className="flex flex-col flex-1 shrink self-stretch flex-wrap items-center mb-[10px] relative min-h-[1px] w-full bg-white border-b border-b-yellow-500 max-w-[1082px] focus-within:border focus-within:border-gray-300 focus-within:rounded-sm">
                <select
                  name="form_fields[field_22d8251]"
                  id="form-field-field_22d8251"
                  className="w-full bg-transparent outline-none py-2 px-4 text-right"
                  aria-label="על מה נדבר?"
                >
                  <option value="על מה נדבר?">על מה נדבר?</option>
                  <option value="אחר..">אחר..</option>
                  <option value="פיתוח ל-UC">פיתוח ל-UC</option>
                  <option value="קידום ברשתות החברתיות">
                    קידום ברשתות החברתיות
                  </option>
                  <option value="קידום אתרים אורגני (SEO)">
                    קידום אתרים אורגני (SEO)
                  </option>
                  <option value="עיצוב אתרים UI/UX">עיצוב אתרים UI/UX</option>
                  <option value="פיתוח אתר ו/או אפליקציה">
                    פיתוח אתר ו/או אפליקציה
                  </option>
                  <option value=""></option>
                </select>
              </div>

              <div className="flex shrink self-stretch flex-wrap items-end justify-end px-[5px] mb-[10px] relative w-full font-medium leading-none text-center text-white min-h-[50px] max-md:max-w-full">
                <button
                  type="submit"
                  className="flex justify-center bg-yellow-500 px-6 rounded min-h-[40px] max-md:px-5"
                >
                  <span className="self-stretch my-auto">צור פניה חדשה</span>
                </button>
              </div>
            </div>
            {/* Submit Button */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
