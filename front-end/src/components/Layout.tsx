
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navItems = [
    "צרו קשר",
    "הדרך שלנו",
    "תיק עבודות",
    "אודותינו",
    "דף הבית",
  ];

  return (
    <div className="flex relative flex-col bg-[linear-gradient(0deg,#D6DCE4_0%,#D6DCE4_100%,#FFF)]">
      <div className="flex z-0 flex-col pt-2.5 w-full min-h-[1200px] max-md:max-w-full">
        <Header navItems={navItems} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
