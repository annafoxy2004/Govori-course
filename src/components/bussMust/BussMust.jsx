import React from "react";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";

const BussMust = () => {
  return (
    <div className="flex flex-col items-center">
      <p className='text-[#e8bf57] text-7xl mb-12 mt-12'>БИЗНЕС ДОЛЖЕН:</p>
      <div className="flex flex-col items-center justify-center gap-14">
        <div>
          <p className=" flex flex-row gap-10 text-4xl w-[764.35px] font-medium mb-3 border-notBuss p-10 ">
            <img
              src={icon1}
              alt="фото"
              className="brightness-[120%] relative w-[60px] h-[60px]"
            />
            Работать без Вас
          </p>
        </div>
        <div>
          <p className=" flex flex-row gap-10 text-4xl w-[764.35px] font-medium mb-3 border-notBuss p-10 ">
            <img
              src={icon2}
              alt="фото"
              className="brightness-[120%] relative w-[60px] h-[60px]"
            />
            Приносить много прибыли
          </p>
        </div>
        <div>
          <p className=" flex flex-row gap-10 text-4xl w-[764.35px] font-medium mb-3 border-notBuss p-10 ">
            <img
              src={icon3}
              alt="фото"
              className="brightness-[120%] relative w-[60px] h-[60px]"
            />
            Освободить Вас от стресса и долгов
          </p>
        </div>
      </div>
    </div>
  );
};

export default BussMust;
