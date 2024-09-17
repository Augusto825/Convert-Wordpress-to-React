
import React from "react";
import NavigationItem from "./NavigationItem";

const navigationItems = [
  "צרו קשר",
  "הדרך שלנו",
  "תיק עבודות",
  "אודותינו",
  "דף הבית",
];

const NavigationMenu: React.FC = () => (
  <div className="flex flex-col flex-1 w-full max-md:max-w-full">
    <div className="flex justify-center w-full max-md:max-w-full">
      <div className="flex flex-wrap justify-center h-full min-w-[240px] max-md:max-w-full">
        {navigationItems.map((item, index) => (
          <NavigationItem key={index} label={item} />
        ))}
      </div>
    </div>
  </div>
);

export default NavigationMenu;
