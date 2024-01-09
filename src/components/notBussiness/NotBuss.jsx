import React from "react";
import "./notBuss.css";

const NotBuss = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[#e8bf57] text-7xl mb-12 lg:pl-10 not-text">
        ВЫ НЕ БИЗНЕСМЕН, ЕСЛИ:
      </p>
      <div className="flex flex-col items-center justify-center gap-14 w-full ">
        <div className="not-block">
          <p className="text-3xl lg:w-[764.35px] font-medium mb-3 border-notBuss p-10 ">
            Работаете 24/7 и всё равно не хватает времени
          </p>
        </div>
        <div className="not-block">
          <p className="text-3xl lg:w-[764.35px] font-medium mb-3 border-notBuss p-10">
            Выполняете работу за нескольких людей
          </p>
        </div>
        <div className="not-block">
          <p className="text-3xl lg:w-[764.35px] font-medium mb-3 border-notBuss p-10">
            Команда часто подводит или же вовсе отсутствует
          </p>
        </div>
        <div className="not-block">
          <p className="text-3xl lg:w-[764.35px] font-medium mb-3 border-notBuss p-10">
            Получаете очень мало денег с бизнеса
          </p>
        </div>
        <div className="not-block">
          <p className="text-3xl lg:w-[764.35px] font-medium mb-3 border-notBuss p-10">
            Без Вашего присутствия в бизнесе творится хаос
          </p>
        </div>
        <div className="not-block">
          <p className="text-3xl lg:w-[764.35px] font-medium mb-3 border-notBuss p-10">
            Нет видения компании на несколько лет вперед
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotBuss;
