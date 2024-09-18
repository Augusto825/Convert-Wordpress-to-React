
import React from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
}

const services: Service[] = [
  
  {
    title: "קידום בפייסבוק ויצירת תוכן",
    description:
      "אנו נדאג לקידום ממוקד בפייסבוק שימשוך את קהל היעד שלך ויביא לתוצאות מיטביות. ניצור עבורך תוכן איכותי ומקצועי, נבצע ניהול קמפיינים, ונבנה עבורך אסטרטגיות תוכן שמותאמות לצרכים העסקיים שלך. כל זה בכדי להבטיח שהלקוחות הפוטנציאליים שלך יוכלו להתחבר למותג שלך ולהפוך ללקוחות נאמנים.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c8ce8af5ef9e09d9830b0d5470c1b746a950c6a95167bc17ccb6abec79aa34ee?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856",
    backgroundColor: "bg-amber-100",
  },
  {
    title: "קידום באינסטגרם",
    description:
      "קידום העסק שלך באינסטגרם באמצעות אסטרטגיות ממוקדות שיביאו לחשיפה רחבה יותר. ניצור עבורך פוסטים איכותיים ומעוררי עניין, נבצע אופטימיזציה למודעות וננהל את הקמפיינים שלך כדי להבטיח שהמותג שלך יזכה להכרה וירחיב את קהל הלקוחות. הקידום שלנו באינסטגרם מותאם במיוחד כדי למשוך את תשומת הלב של הקהל הנכון ולהוביל לתוצאות מצוינות.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8a49c8bb740c544afad8bae383f4d0ef5ebdcf4ef85469db332ebe954832d83f?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856",
    backgroundColor: "bg-rose-200",
  },
  {
    title: "בניית אתר אינטרנט",
    description:
      "אנו מתמחים בבניית אתרים מותאמים אישית, שמותאמים במיוחד לצרכים הייחודיים של העסק שלך. האתר שנבנה עבורך יכלול עיצוב מקצועי, חוויית משתמש מעולה, ואופטימיזציה כדי להבטיח שהלקוחות ימצאו אותך בקלות. עם אתר אינטרנט יעיל, העסק שלך יזכה לחשיפה גבוהה יותר ויגדיל את ההמרות.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ef96eb03d6c59b072674ba1954c811c370c0574b1099cf8d0a37be5f9ffebfd1?placeholderIfAbsent=true&apiKey=addd44d0d4a74bbf9dcbe1a996be8856",
    backgroundColor: "bg-[#D7CCD8]",
  },
];

const Services: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-[10px] mt-20 w-full text-center max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col flex-1 pt-2.5 pb-2.5 max-w-full w-[1140px]">
        <h2 className="flex flex-col justify-center w-full text-5xl font-bold leading-tight text-sky-400 max-w-[1140px] max-md:max-w-full max-md:text-4xl">
          <div className="flex flex-col flex-1 w-full max-md:max-w-full max-md:text-4xl">
            <div className="pb-px w-full max-md:px-5 max-md:max-w-full max-md:text-4xl">
              השותף הדיגיטלי בשירות המלא שלך
            </div>
          </div>
        </h2>
        <p className="flex flex-col justify-center mt-5 w-full text-base leading-loose max-w-[1140px] text-neutral-500 max-md:max-w-full">
          <div className="flex-1  w-full max-md:px-5 max-md:max-w-full">
            לא משנה מה אתה צריך, דאגנו לך:
          </div>
        </p>
      </div>
      <div className="flex mt-[30px] flex-wrap flex-1 justify-center py-2.5 mx-auto max-w-full h-full w-[1140px]">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
