
import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: ": פיתוח ובניית אתרים",
    description:
      "בדיקת שביעות רצון: בסיום שלב זה נוודא שהאתר תואם את הציפיות שלך ושאתה מרוצה מהתוצאה. אנו נבצע שינויים ועדכונים לפי הצורך כדי להבטיח שהאתר עומד בסטנדרטים שלך.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/46ada65a9fa2fc8ddb662510a6ed396e10ce559d20d14567a58486fec71b7582?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856",
    borderColor: "border-r-sky-500",
    titleColor: "text-sky-400",
    imgPercentage: "w-[17%]",
    desPercentage: "w-[57.975%]",
  },
  {
    title: ": יצירת תוכן וקידום אורגני",
    description:
      "כתיבת מאמרים ותכנים איכותיים: במהלך חודשים אלו נתחיל להפיק מאמרים ותכנים נוספים לאתר שלכם. המאמרים יתמקדו במילות מפתח רלוונטיות לתחום שלכם וישמשו בסיס לקידום אורגני.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2911fdfb8dd87b916d9acf9ec19ad951fa5cea11d87a63d711fc7f2ee6aa2e19?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856",
    borderColor: "border-r-fuchsia-600",
    titleColor: "text-fuchsia-600",
    imgPercentage: "w-[17%]",
    desPercentage: "w-[60.653%]",
  },
  {
    title: ": בניית קישורים וחיבור לרשתות חברתיות",
    description:
      "קישורים נכנסים: במהלך חודשים אלו נתחיל לבנות קישורים חיצוניים מאתרים איכותיים שיקשרו לאתר שלכם. זה יעזור להגביר את הסמכות של האתר ולשפר את דירוג מנועי החיפוש.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/21ff21b3731b4671a9b0b93b61400e21772c69997dc5071899fabed6366777ba?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856",
    borderColor: "border-r-teal-300",
    titleColor: "text-teal-300",
    imgPercentage: "w-[17%]",
    desPercentage: "w-[52%]",
  },
  {
    title: ": אופטימיזציה מתמשכת, רייטינג משופר ונוכחות מורחבת",
    description:
      "אופטימיזציה מתמשכת: במהלך החודשים הנותרים, נמשיך לבצע אופטימיזציה על סמך הנתונים שנקבל. זה כולל שיפור מהירות האתר, אופטימיזציה נוספת של תוכן וקישורים והמשך בניית קישורים איכותיים.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/35f9e425c055808e9545654c48440d34b45d4f8d0084c205a03e898e2f29385f?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856",
    borderColor: "border-r-green-500",
    titleColor: "text-green-500",
    imgPercentage: "w-[17%]",
    desPercentage: "w-[52%]",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="flex flex-col bg-slate-800">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  );
};

export default ServiceSection;
