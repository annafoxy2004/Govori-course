import React from "react";
import icon1 from "../../assets/onIcon1.svg";
import icon2 from "../../assets/onIcon2.svg";
import icon3 from "../../assets/onIcon3.svg";
import icon4 from "../../assets/onIcon4.svg";
import icon5 from "../../assets/onIcon5.svg";
import icon6 from "../../assets/onIcon6.svg";
import "./onCourse.css";

const OnCourse = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="main-yellow-head mt-10 cour-text">НА КУРСЕ ВЫ:</p>
      <div className="flex flex-col items-center justify-center gap-14">
        <div className="cour-desc">
          <p className=" flex flex-row items-center gap-10 text-4xl lg:w-[830px] font-medium mb-3 lg:p-10 ">
            <img
              src={icon1}
              alt="фото"
              className="brightness-[120%] relative lg:w-[130px] h-[130px]"
            />
            Получите инструкцию внедрения системы и контроля Вашего бизнеса
          </p>
        </div>
        <div className="cour-desc">
          <p className=" flex flex-row items-center gap-10 text-4xl lg:w-[830px] font-medium mb-3 lg:p-10 ">
            <img
              src={icon2}
              alt="фото"
              className="brightness-[120%] relative lg:w-[130px] h-[130px]"
            />
            Проделегируете процессы на 70% и выстроите команду сильных
            руководителей
          </p>
        </div>
        <div className="cour-desc">
          <p className=" flex flex-row items-center gap-10 text-4xl lg:w-[830px] font-medium mb-3 lg:p-10 ">
            <img
              src={icon3}
              alt="фото"
              className="brightness-[120%] relative lg:w-[130px] h-[130px]"
            />
            Вырастите в доходе минимум в 2 раза
          </p>
        </div>
        <div className="cour-desc">
          <p className=" flex flex-row items-center gap-10 text-4xl lg:w-[830px] font-medium mb-3 lg:p-10 ">
            <img
              src={icon4}
              alt="фото"
              className="brightness-[120%] relative lg:w-[130px] h-[130px]"
            />
            Получите доступ к базе 2000 сотрудников, от менеджера по продажам,
            заканчивая маркетологом
          </p>
        </div>
        <div className="cour-desc">
          <p className=" flex flex-row items-center gap-10 text-4xl lg:w-[830px] font-medium mb-3 lg:p-10 ">
            <img
              src={icon5}
              alt="фото"
              className="brightness-[120%] relative lg:w-[130px] h-[130px]"
            />
            Получите работу с наставником, а также сопровождение с куратором
          </p>
        </div>
        <div className="cour-desc">
          <p className=" flex flex-row items-center gap-10 text-4xl lg:w-[830px] font-medium mb-3 lg:p-10 ">
            <img
              src={icon6}
              alt="фото"
              className="brightness-[120%] relative lg:w-[130px] h-[130px]"
            />
            Попадёте в окружение 25 единомышленников, с оборотом от 300к до 20
            000 000
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-10">
        <p className="yellow-text-head-last cour-text-2">
          БИЗНЕСМЕН ДОЛЖЕН <br /> РАБОТАТЬ <br /> НЕ РУКАМИ, <br /> А ГОЛОВОЙ.
        </p>
      </div>
    </div>
  );
};

export default OnCourse;
