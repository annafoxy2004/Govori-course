import React from "react";
import pr from "../../assets/prog-bottom.svg"

const Programm = () => {
  return (
    <>
    
    <div className="flex flex-col items-center justify-center max-[110px]:ml-32">
      <div className="mt-10 mb-5">
        <p className="yellow-text-head-1">ПРОГРАММА КУРСА: <br /> МАРКЕТИНГ  </p>
        {/* <p className=" text-[170px] text-[#e0c173]"> МАРКЕТИНГ </p> */}
      </div>

      <div className="flex flex-col gap-8 pl-48 pr-28">
        <div>
          <p className="text-3xl font-medium mb-3 border-notBuss p-10 w-[40%] max-[1175px]:w-[90%]">
          это главный двигатель Вашего бизнеса.
          </p>
        </div>
        <p className="text-3xl w-[60%]">На этом модуле мы научимся
как создать нужный для потребителя продукт, чтобы он сам себя продавал. Научимся анализировать рынок
и конкурентов.</p>
        <p className="text-3xl w-[60%]">А также узнаем, как построить отдел маркетинга.</p>
      </div>
    </div>
    <div className="flex flex-row justify-end">
    <img
          src={pr}
          alt="фото"
          className="brightness-[120%] relative text-end"
        />
    </div>
    </>
  );
};

export default Programm;
