
import React from "react";
import ContactForm from "./ContactForm";
import FooterSection from "../layoutComponents/Footer/FooterComponents/FooterSection";

const ContactPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col bg-[linear-gradient(0deg,#D6DCE4_0%,#D6DCE4_100%,#FFF)]">
      <div className="flex z-0 flex-col pt-2.5 w-full min-h-[1200px] max-md:max-w-full">
        {/* <Header /> */}
        <main className="flex flex-col flex-1 items-center w-full max-md:max-w-full">
          <section className="flex justify-center w-full max-w-[1920px] min-h-[1029px] max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex relative flex-col justify-center items-center pt-48 pb-52 pl-96 w-full leading-tight text-white bg-gray-950 pr-[582px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dd37a80018cd7af036dfaaa9cda85a653389aa668f143684b48165502533482?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856"
                    alt=""
                    className="object-contain absolute inset-x-0 -bottom-px z-0 self-start w-full h-48 aspect-[9.9] max-md:max-w-full"
                  />
                  <h1 className="z-0 text-5xl font-bold text-center max-md:text-4xl">
                    <span className="pl-20 max-md:pl-5 max-md:max-w-full max-md:text-4xl">
                      <span className="px-80 pb-px w-full max-md:px-5 max-md:max-w-full max-md:text-4xl">
                        צרו קשר
                      </span>
                    </span>
                  </h1>
                  <p className="z-0 mt-5 max-w-full text-2xl text-right w-[587px]">
                    <span className="pl-24 max-md:pl-5 max-md:max-w-full">
                      <span className="pb-px w-full max-md:max-w-full">
                        תשאירו לנו רק כמה פרטים, אנחנו נדאג לכל השאר.
                      </span>
                    </span>
                  </p>
                </div>
                <div className="flex flex-col justify-center mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-1 justify-center items-center px-72 size-full max-md:px-5 max-md:max-w-full">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
          {/* <Footer/> */}
      </div>
    </div>
  );
};

export default ContactPage;
