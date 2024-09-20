import React, { useEffect, useState } from "react";

const ReloadContactModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay to show the modal (2 seconds for demonstration)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // 2000ms = 2 seconds (adjust as needed)

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Close modal
  const closeModal = () => {
    setIsVisible(false);
  };

  // Close modal when clicking on the background
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Close modal if the background is clicked
    }
  };

  return (
    <>
      {isVisible && (
        <div
          dir="ltr"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleBackgroundClick} // Added click handler to background
        >
          <div className="flex flex-col bg-[#19212A] w-1/2 font-rubik h-full md:max-w-4xl md:h-auto rounded-lg shadow-lg">
            {/* Modal Content */}
            <div className="flex justify-end mr-5">
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-700 text-5xl text-end"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col pb-[50px]">
              <div className="flex flex-col w-[65%] mx-auto p-[10px] gap-5">
                <div className="flex flex-col text-center gap-5 mx-auto">
                  <h2 className="text-[12px] text-white text-end">צרו קשר</h2>
                  <h2 className="text-[86px] font-rubik font-bold text-white text-end leading-[1.3em]">
                    בואו נעבוד ביחד
                  </h2>
                  <h2 className="text-[24px] font-rubik font-normal text-white text-end">
                    החל מ-500 ש"ח לחודש לקידום: אינסטגרם / פייסבוק וקידום לוקאלי
                    בגוגל
                  </h2>
                  <div>
                    <div className="p-[30px] rounded-[10px] shadow-custom-black">
                      <form className="mt-4">
                        <input type="hidden" name="post_id" value="4079" />
                        <input type="hidden" name="form_id" value="a181e66" />
                        <input type="hidden" name="queried_id" value="2272" />
                        <div
                          dir="rtl"
                          className="mx-[-8px] mb-[-16px] bg-[#19212A] flex flex-wrap items-start"
                        >
                          <div className="flex flex-col px-2 mb-[16px] w-full md:w-1/2">
                            <input
                              type="text"
                              placeholder="שם מלא *"
                              id="form-field-name"
                              name="form_fields[name]"
                              dir="rtl"
                              className="w-full bg-transparent outline-none py-2 px-4 text-right border-b border-b-yellow-500 focus-within:border-gray-300 focus-within:rounded-sm"
                              required
                            />
                          </div>
                          <div className="flex flex-col px-2 mb-[16px] w-full md:w-1/2">
                            <input
                              type="number"
                              placeholder="טלפון *"
                              id="form-field-email"
                              name="form_fields[email]"
                              dir="rtl"
                              className="w-full bg-transparent outline-none py-2 px-4 text-right border-b border-b-yellow-500 focus-within:border-gray-300 focus-within:rounded-sm"
                              required
                            />
                          </div>
                          <div className="flex flex-col px-2 mb-[16px] w-full md:w-1/2">
                            <input
                              type="email"
                              placeholder="טלפון *"
                              id="form_fields[field_fe08a14]"
                              name="form_fields[field_fe08a14]"
                              dir="rtl"
                              className="w-full bg-transparent outline-none py-2 px-4 text-right border-b border-b-yellow-500 focus-within:border-gray-300 focus-within:rounded-sm"
                              required
                            />
                          </div>
                          <div className="flex flex-col w-full px-2 mb-[16px] items-end">
                            <button
                              type="submit"
                              className="bg-[#19212A] border-solid border-spacing-1 md:w-2/5 w-full border-[1px] border-yellow-500 text-yellow-500 p-[14px] rounded hover:text-white hover:border-white"
                            >
                              צור פניה חדשה
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReloadContactModal;
