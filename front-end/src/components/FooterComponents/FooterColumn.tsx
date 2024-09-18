import React from "react";

interface FooterItem {
  title: string;
  url: string;
}

interface FooterColumnProps {
  title: string;
  items: FooterItem[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <section className="flex flex-col grow shrink items-end px-5 text-right min-w-[240px] w-[253px]">
      <h2 className="flex flex-col justify-center w-full text-lg font-semibold leading-tight text-yellow-500 max-w-[285px]">
        <span className="pb-px w-full">{title}</span>
      </h2>
      <nav className="flex flex-col justify-center mt-1 max-w-full text-base leading-loose text-gray-200 w-[155px]">
        <ul className="flex flex-col w-full">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-center items-center mt-1 w-full hover:cursor-pointer group" // Added 'group' for targeting children on hover
            >
              <a href={item.url} className="relative flex flex-1 shrink items-center self-stretch justify-end my-auto w-full basis-0 group-hover:text-yellow-500 transition-colors duration-300">
                <span className="self-stretch pb-px my-auto">{item.title}</span>
                {/* Add the yellow line effect */}
                <span dir="rtl" className="absolute bottom-0 right-0 h-[3px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default FooterColumn;
