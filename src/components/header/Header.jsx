import React, { useState } from "react";
import mainPhoto from "../../assets/main-image.svg";
import "./header.css";
import Modal from "../modal/Modal";
import AmoModal from "../modal/AmoModal";
// import main2 from "../../assets/main-"

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <AmoModal setModal={setModal} />}
      <div className=" flex  mx-auto header-block flex-col items-center justify-center">
        <div className="lg:mt-28 lg:w-[50rem] header-block-right lg:ml-28 head-text">
          <h1 className="text-8xl max-[767px]:text-6xl max-[767px]:ml-32 max-[594px]:ml-48 max-[385px]:ml-72">
            БИЗНЕС ДОЛЖЕН СУЩЕСТВОВАТЬ <strong>БЕЗ ВАС</strong>
            <p className="uppercase mt-2 text-5xl opacity-70 max-[767px]:text-3xl text-head">
              ДЛЯ ЭТОГО ЕГО НУЖНО <br />
              СИСТЕМАТИЗИРОВАТЬ
            </p>
          </h1>
        </div>

        <div className="bottom-5 flex flex-col justify-around items-center header-block-left">
          <img
            id="nurik-photo"
            src={mainPhoto}
            alt="фото"
            height="auto"
            className="brightness-[120%] relative nurik-photo"
          />
          <div>
            <button
              onClick={() => setModal(true)}
              className="bg-[#cfc7ab] btn-head text-[#5F5016] btn text-lg btn-2 py-4 px-16 rounded-md font-normal lg:mt-20"
            >
              Записаться
            </button>
          </div>

          {/* <div className="absolute bottom-14 left-8 text-center">

          <div>
          <button
            onClick={() => setModal(true)}
            className=" max-[740px]:ml-48  max-[964px]:inset-x-0 left-56 bg-[#cfc7ab] text-[#5F5016] btn text-sm btn-2 py-4 px-16 rounded-md font-normal mt-20 ml-96"
          >
            Записаться
          </button>
          </div>

</div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
