import React from "react";
import FooterColumn from "./FooterColumn";
import Logo from "./Logo";

interface FooterSectionProps {
  columns: {
    title: string;
    items: { title: string; url: string }[];
  }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ columns }) => {
  return (
    <footer className="bg-[#35023D] text-white py-10">
      <div className="flex flex-wrap flex-1 justify-center px-16 pt-24 pb-12 size-full max-md:px-5">
        {columns.map((column, index) => (
          <FooterColumn key={index} title={column.title} items={column.items} />
        ))}
        <Logo />
      </div>
    </footer>
  );
};

export default FooterSection;
