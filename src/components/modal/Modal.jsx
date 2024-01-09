import React, { useState } from "react";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import note from "../../assets/note.svg";
// import user from "../../assets/user.png";
import axios from "axios";
import "./modal.css";

const Modal = ({ setModal }) => {
  const [form, setForm] = useState({
    types: "консультация",
    price: 0,
    name_type: "запись на консультацию",
    username: "",
    emails: "",
    phone_number: "",
  });

  const handleClick = async () => {
    try {
      if (
        !form.username.trim() ||
        !form.emails.trim() ||
        !form.phone_number.trim()
      ) {
        return alert("Заполните все поля");
      }

      const formData = new FormData();

      for (const key in form) {
        formData.append(key, form[key]);
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post("https://govori.reduxjob.com/task", formData, config);
      setForm({ ...form, username: "", emails: "", phone_number: "" });
      alert("Вы успешно записались");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal">
      <p
        className="text-5xl absolute right-5 top-0 cursor-pointer"
        onClick={() => setModal(false)}
      >
        &times;
      </p>
      <div className="w-[80%] req-block">
        <div className="flex max-[1100px]:flex-col  justify-between items-center bg-[#1F2024] rounded-xl pt-10 px-20 relative req-block-inner">
          <div className="mb-10">
            <h1 className="text-5xl mb-5 opacity-60">
              Оставьте данные <br /> для консультации
            </h1>
            <p className="text-2xl mb-10 opacity-60">
              наш менеджер свяжется с Ваши <br /> и ответит на все ваши вопросы
            </p>
            <span className="border-b-[1px] mb-10 border-b-white flex">
              {/* <img
                src={user}
                alt="image"
                width={20}
                height={20}
                className="mr-10 mb-1"
              /> */}
              <input
                type="text"
                placeholder="Укажите Ваше ФИО"
                className="bg-transparent w-full text-white focus:outline-none"
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                value={form.username}
              />
            </span>
            <span className="border-b-[1px] mb-10 border-b-white flex">
              <img src={phone} alt="image" className="mr-10 mb-1" />
              <input
                type="text"
                placeholder="Укажите Ваш телефон"
                className="bg-transparent w-full text-white focus:outline-none"
                onChange={(e) =>
                  setForm({ ...form, phone_number: e.target.value })
                }
                value={form.phone_number}
              />
            </span>
            <span className="border-b-[1px] mb-10 border-b-white flex">
              <img src={email} alt="image" className="mr-10" />
              <input
                type="text"
                placeholder="Укажите Ваш e-mail"
                className="bg-transparent w-full text-white focus:outline-none"
                onChange={(e) => setForm({ ...form, emails: e.target.value })}
                value={form.emails}
              />
            </span>
            <button
              className="bg-[#cfc7ab] text-[#5F5016] uppercase text-xl py-7 px-14 rounded-md font-normal btn"
              onClick={() => handleClick(form)}
            >
              Записаться
            </button>
          </div>
          <div>
            <img src={note} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
