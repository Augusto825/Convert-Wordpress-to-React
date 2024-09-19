import React from "react";

const BuildingLinkSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap md:flex-nowrap grow-0 shrink self-auto justify-normal items-normal w-full bg-slate-800 min-h-[260px] px-[10px] max-md:max-w-full">
        <div className="flex flex-wrap md:flex-nowrap flex-1 py-2.5 size-full content-[1366px]">
          <div className="md:w-[14.52%] w-full flex flex-col p-[10px] grow-0"></div>
          <div
            className={`flex flex-col gap-5 grow-0 box-border shrink p-2.5 text-right md:w-[57.975%] w-full max-md:max-w-full`}
          >
            <div
              className={` text-4xl font-bold max-w-full leading-10 text-teal-300 max-md:max-w-full`}
            >
              <div className="h-full max-md:max-w-full">
                <h2 className="font-rubik font-bold text-[40px] leading-[48px] max-md:px-5 max-md:max-w-full">
                  חודש 5-6: בניית קישורים וחיבור לרשתות חברתיות
                </h2>
              </div>
            </div>
            <div className="w-full text-xl text-white font-rubik text-[20px] leading-[25px] font-normal max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <p className="mb-[32px]">
                  קישורים נכנסים: במהלך חודשים אלו נתחיל לבנות קישורים חיצוניים
                  מאתרים איכותיים שיקשרו לאתר שלכם. זה יעזור להגביר את הסמכות של
                  האתר ולשפר את דירוג מנועי החיפוש.
                </p>
                <p className="mb-[32px]">
                  התחבר לערוצי מדיה חברתית: נתחיל לחבר את האתר שלך לערוצי המדיה
                  החברתית שלך (פייסבוק, אינסטגרם, לינקדאין וכו’). נדאג שתהיה
                  אינטגרציה מלאה בין האתר לערוצים אלו, וכן נקדם תכנים ברשתות
                  החברתיות כדי להביא יותר תנועה לאתר.
                </p>
                <p className="mb-[32px]">
                  מעורבות: נתחיל לעסוק בערוצי מדיה חברתית, כמו פוסטים, קידום
                  מכירות ושיתופי פעולה עם עסקים אחרים, כדי להגדיל את הנוכחות
                  המקוונת שלך.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow-0 border-solid border-r-[3px] border-r-teal-300 gap-[20px] p-[10px] mr-[31px] ml-[75px] mt-[-19px] shrink-0  self-start md:w-[25%] w-full">
            <div
              className={`w-full min-h-[254px]`}
            >
              <div className="w-full max-w-[256px]">
                <div className="w-full">
                  <div className="flex flex-col items-center pr-6 pb-2 pl-6 w-full max-md:px-5">
                    <div className="flex items-start max-w-full w-[186px]">
                      <svg
                        width="191"
                        height="191"
                        viewBox="0 0 191 191"
                        fill="none"
                        className=" text-center"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M121.564 68.9873C143.735 91.1821 143.431 126.766 121.697 148.62C121.656 148.665 121.608 148.713 121.564 148.758L96.6262 173.695C74.6315 195.69 38.8473 195.687 16.8559 173.695C-5.13882 151.704 -5.13882 115.916 16.8559 93.9248L30.6257 80.155C34.2773 76.5035 40.5658 78.9304 40.7543 84.0908C40.9948 90.6674 42.1742 97.2747 44.3502 103.655C45.0872 105.816 44.5607 108.206 42.9464 109.82L38.0899 114.676C27.6896 125.077 27.3634 142.011 37.6613 152.513C48.0608 163.119 65.1541 163.182 75.6334 152.702L100.571 127.769C111.032 117.307 110.989 100.398 100.571 89.9801C99.1975 88.6093 97.8141 87.5442 96.7335 86.8002C95.969 86.2752 95.3378 85.5789 94.8902 84.7667C94.4426 83.9545 94.191 83.0489 94.1555 82.1222C94.0085 78.2008 95.3979 74.16 98.4965 71.0614L106.31 63.248C108.358 61.1992 111.572 60.9476 113.948 62.6056C116.669 64.5054 119.217 66.6409 121.564 68.9873ZM173.864 16.6846C151.872 -5.30713 116.088 -5.3101 94.0935 16.6846L69.156 41.6221C69.1115 41.6667 69.0632 41.7149 69.0224 41.7594C47.2889 63.6139 46.9843 99.1977 69.156 121.392C71.5024 123.739 74.0506 125.874 76.7712 127.774C79.147 129.432 82.3614 129.18 84.4098 127.131L92.2228 119.318C95.3215 116.219 96.7108 112.179 96.5639 108.257C96.5284 107.331 96.2768 106.425 95.8292 105.613C95.3816 104.801 94.7504 104.104 93.9859 103.579C92.9053 102.835 91.5218 101.77 90.1484 100.399C79.7307 89.9816 79.6869 73.0723 90.1484 62.6108L115.086 37.677C125.565 27.1977 142.658 27.2608 153.058 37.8663C163.356 48.3682 163.03 65.3027 152.629 75.703L147.773 80.5595C146.159 82.1738 145.632 84.5636 146.369 86.7241C148.545 93.1047 149.725 99.712 149.965 106.289C150.154 111.449 156.442 113.876 160.094 110.224L173.863 96.4546C195.859 74.4639 195.859 38.6756 173.864 16.6846Z"
                          fill="#5AD1D1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildingLinkSection;
