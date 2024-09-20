
import React from "react";
import FooterSection from "./FooterSection";

const footerData = [
  
  {
    title: "קידום אתרים ודיגיטל",
    items: [
      {title: "קידום ב-Facebook", url: '/קידום%20ב-Facebook'},
      {title: "קידום ב-Instagram", url: '/קידום%20ב-Instagram'},
      {title: "קידום ב-Tik Tok", url: '/קידום%20ב-Tik%20Tok'},],
  },
  {
    title: "עיצוב אתרים",
    items: [
      {title: "עיצוב אתרים", url: '/עיצוב%20אתרים'},
      {title: "עיצוב UI/UX", url: '/%d7%a2%d7%99%d7%a6%d7%95%d7%91-ui-ux/'},
      {title: "עיצוב ממשק משתמש", url: '/עיצוב%20ממשק%20משתמש'},
      {title: "עיצוב אפליקציות", url: '/עיצוב%20אפליקציות%20'},
    ],
  },  
  {
    title: "בניית אתרים",
    items: [
      {title: "בניית אתרים", url: '/בניית אתרים'},
      {title: "בניית אתר תדמית", url: "/בניית אתר תדמית"},
      {title: "בניית אתר מסחר", url: "בניית אתר מסחר"},
      {title: "בניית אתר פורטל", url: "בניית אתר פורטל"},
    ],
  },
];

const FooterLinks: React.FC = () => {
  return <FooterSection columns={footerData} />;
};

export default FooterLinks;
