
import React from "react";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Logo from "./Logo";

const Header: React.FC = () => (
  <header className="flex absolute top-0 right-0 z-0 flex-col justify-center items-center px-96 bg-white min-h-[90px] w-[1920px] max-md:px-5 max-md:max-w-full">
    <div className="flex-1 py-2.5 max-w-full w-[1140px] max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <nav className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch my-auto text-base font-bold leading-none text-right text-yellow-500 max-md:mt-10 max-md:max-w-full">
            <NavigationMenu />
          </div>
        </nav>
        <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
          <Logo />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
