import React from "react";
import "./wondering.css";

const Wondering = () => {
  return (
    <div className="flex flex-col items-center bg-white border rounded-lg p-16">
      <div className="mb-10 wond-text">
        <p className="text-[#08092A] text-4xl">ЧТО ДАСТ ПОСТРОЕННАЯ</p>

        <p className="text-[#08092A] text-9xl"> СИСТЕМА</p>
        <p className="text-[#08092A] text-9xl">В БИЗНЕСЕ?</p>
      </div>
      <ul
        style={{ listStyleType: "disc", marginLeft: "20px" }}
        className="flex flex-col items-start gap-8 lg:w-[50%] wond-list"
      >
        <li className="text-3xl text-[#08092A]">
          Больше времени на стратегию;
        </li>
        <li className="text-3xl text-[#08092A]">
          Вы полностью выйдете с операционной работы в своем бизнесе;
        </li>
        <li className="text-3xl text-[#08092A]">
          Увеличение оборота за счет знаний в построении команды и их
          обязанностях.
        </li>
      </ul>
    </div>
  );
};

export default Wondering;
