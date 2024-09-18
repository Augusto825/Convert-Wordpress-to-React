
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center px-96 pt-px w-full text-sm leading-5 text-center text-white border-t border-solid bg-fuchsia-950 border-t-slate-400 border-t-opacity-20 max-w-[1920px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 justify-center py-12 w-full">
        <div className="flex flex-col justify-center w-full max-w-[1140px] max-md:max-w-full">
          <div className="flex flex-col flex-1 w-full max-md:max-w-full">
            <div className="w-full max-md:px-5 max-md:max-w-full">
            © 2023 AI Web Dev | כל הזכויות שמורות
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
