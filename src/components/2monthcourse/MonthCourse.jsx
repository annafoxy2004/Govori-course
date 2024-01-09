import React from "react";
import notee from "../../assets/second.svg";
import { useState } from "react";
import Modal from "../modal/Modal";
import "./month.css";

const MonthCourse = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <div className="mt-10 mb-28 text-center">
        <div className="flex flex-row gap-1 justify-center items-center month-text">
          <h1 className="yellow-text-head-2x">2X</h1>
          <div className="rrr mb-10 flex flex-col items-start justify-center">
            <h1 className="yellow-text-head ">МЕСЯЧНЫЙ </h1>
            <h1 className="yellow-text-head "> КУРС</h1>
          </div>
        </div>

        <div className="w-full border-0 rounded-3xl">
          <img src={notee} alt="фото" className="brightness-[120%] w-full" />
        </div>
      </div>
    </>
  );
};

export default MonthCourse;
