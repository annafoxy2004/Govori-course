import React from "react";
import model from "../../assets/modeling.svg";
import "./bussModeling.css";

const BussModeling = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-10 lg:ml-32">
          <h1 className="yellow-text-head model-text">
            БИЗНЕС <br /> МОДЕЛИРОВАНИЕ
          </h1>
          {/* <h1 className="yellow-text-head "> </h1> */}
          <p className="text-3xl font-medium lg:w-[50%] mt-16 model-desc">
            <strong>
              Данная тема преподаётся в высших учебных заведениях по бизнесу,{" "}
            </strong>
            — кто владеет ей, тот строит великие бизнес империи.
          </p>
        </div>
      </div>
      <div>
        <img src={model} alt="фото" className="brightness-[120%] relative" />
      </div>
    </>
  );
};

export default BussModeling;
