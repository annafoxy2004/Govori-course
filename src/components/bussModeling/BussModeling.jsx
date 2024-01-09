import React from "react";
import model from "../../assets/modeling.svg";

const BussModeling = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-10 ml-32">
          <h1 className="yellow-text-head ">БИЗНЕС <br /> МОДЕЛИРОВАНИЕ</h1>
          {/* <h1 className="yellow-text-head "> </h1> */}
          <p className="text-3xl font-medium w-[50%] mt-16">
            <strong>
              Данная тема преподаётся в высших учебных заведениях по бизнесу,{" "}
            </strong>
            — кто владеет ей, тот строит великие бизнес империи.
          </p>
        </div>
      </div>
      <div>
        <img
          src={model}
          alt="фото"
          className="brightness-[120%] relative"
        />
      </div>
    </>
  );
};

export default BussModeling;
