
import React from "react";
import FooterSection from "./FooterSection";

const footerData = [
  {
    title: "בניית אתרים",
    items: [
      {title: "בניית אתרים", url: 'https://aiwebdev.co.il/בניית%20אתרים'},
      {title: "בניית אתר תדמית", url: 'https://aiwebdev.co.il/בניית%20אתר%20תדמית%20'},
      {title: "בניית אתר מסחר", url: 'https://aiwebdev.co.il/בניית%20אתר%20מסחר%20'},
      {title: "בניית אתר פורטל", url: 'https://aiwebdev.co.il/בניית%20אתר%20פורטל'},
    ],
  },
  {
    title: "עיצוב אתרים",
    items: [
      {title: "עיצוב אתרים", url: 'https://aiwebdev.co.il/עיצוב%20אתרים'},
      {title: "עיצוב UI/UX", url: 'https://aiwebdev.co.il/%d7%a2%d7%99%d7%a6%d7%95%d7%91-ui-ux/'},
      {title: "עיצוב ממשק משתמש", url: 'https://aiwebdev.co.il/עיצוב%20ממשק%20משתמש'},
      {title: "עיצוב אפליקציות", url: 'https://aiwebdev.co.il/עיצוב%20אפליקציות%20'},
    ],
  },
  {
    title: "קידום אתרים ודיגיטל",
    items: [
      {title: "קידום ב-Facebook", url: 'https://aiwebdev.co.il/קידום%20ב-Facebook'},
      {title: "קידום ב-Instagram", url: 'https://aiwebdev.co.il/קידום%20ב-Instagram'},
      {title: "קידום ב-Tik Tok", url: 'https://aiwebdev.co.il/קידום%20ב-Tik%20Tok'},],
  },
];

const FooterLinks: React.FC = () => {
  return <FooterSection columns={footerData} />;
};

export default FooterLinks;
