import React from "react";
import notee from "../../assets/second.svg";
import { useState } from "react";
import Modal from "../modal/Modal";

const MonthCourse = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <div className="mt-10 mb-28 text-center max-[887px]:ml-12">
        <div className="flex flex-row gap-1 justify-center items-center ">
          <h1 className="yellow-text-head-2x">2X</h1>
          <div className="rrr mb-10 flex flex-col items-start justify-center">
            <h1 className="yellow-text-head ">МЕСЯЧНЫЙ </h1>
            <h1 className="yellow-text-head "> КУРС</h1>
          </div>
        </div>

        <div className="w-screen border-0 rounded-3xl">
          <img src={notee} alt="фото" className="brightness-[120%] w-screen" />
        </div>
      </div>
    </>
  );
};

export default MonthCourse;
