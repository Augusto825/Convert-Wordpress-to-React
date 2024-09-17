
import React from "react";

interface NavigationItemProps {
  label: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ label }) => (
  <div className="flex justify-center h-full">
    <div className="self-stretch px-5 pt-3.5 pb-3.5 h-full">{label}</div>
  </div>
);

export default NavigationItem;
