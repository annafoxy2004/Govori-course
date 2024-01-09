import React, { useState } from "react";
import icon1 from "../../assets/buildingSIcon1.svg";
import icon2 from "../../assets/buildIcon2.svg";
import AmoModal from "../modal/AmoModal";
import "./buildingSystem.css";

const BuildingSystem = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && <AmoModal setModal={setModal} />}

      <div className="flex flex-col items-center mt-16">
        <div className="mb-10 flex flex-col items-center">
          {/* <h1 className="yellow-text-head-3x ">ПОСТРОЕНИЕ </h1> */}
          <h1 className="yellow-text-head syst-text">
            ПОСТРОЕНИЕ <br /> СИСТЕМЫ ПРОДАЖ
          </h1>
        </div>

        <div className="syst-block">
          <p className=" flex flex-row gap-10 text-4xl lg:w-[600px] h-100px font-medium mb-3 border-notBuss p-10 items-center ">
            <img
              src={icon1}
              alt="фото"
              className="brightness-[120%] relative w-[140px] h-[140px]"
            />
            Разберем как правильно построить отдел продаж
          </p>
        </div>
        {/* <button
            onClick={() => setModal(true)}
            className=" bg-[#cfc7ab] text-[#5F5016] btn text-sm btn-2 py-4 px-16 rounded-md font-normal mt-20 ml-20"
          >
            Записаться
          </button> */}
        <img src={icon2} alt="фото" className="brightness-[120%] w-full" />
      </div>
    </>
  );
};

export default BuildingSystem;
