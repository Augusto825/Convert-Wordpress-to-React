import React from "react";
import FooterLinks from "./FooterComponents/FooterLinks";
import FooterUnder from "./FooterComponents/FooterUnder";

const Footer: React.FC = () => {
  return (
    <div>
      <section>
        <FooterLinks />
        <FooterUnder />
      </section>
    </div>
  );
};

export default Footer;
