import React, { useState } from 'react';
import Modal from '../modal/Modal';

const ForWho = () => {
    const [modal, setModal] = useState(false);
    return (
      <>
       {modal && <Modal setModal={setModal} />}
       
        <div className="flex flex-col items-center">
        <p className='text-[#e8bf57] text-7xl mb-12 mt-12'>ДЛЯ КОГО ЭТОТ КУРС?</p>
        <div className="flex flex-col items-center justify-center w-[70%] bg-[#1F2024] rounded-xl pt-20 pb-20 px-20 relative req-block-inner">
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }} className='flex flex-col items-start gap-8'>
            <li className='text-3xl'>Планируете открывать новые точки и филиалы</li>
            <li className='text-3xl'>Хотите управлять бизнесом на расстоянии</li>
            <li className='text-3xl'>Погрязли в долгах и кредитах</li>
            <li className='text-3xl'>Уперлись в финансовый потолок</li>
            <li className='text-3xl'>Хотите узнать новые инструменты для систематизации бизнеса</li>
            <li className='text-3xl'>Не видите рост компании</li>
        </ul>
        <button
            onClick={() => setModal(true)}
            className=" bg-[#cfc7ab] text-[#5F5016] btn text-sm btn-2 py-4 px-16 rounded-md font-normal mt-8"
          >
            Записаться
          </button>
      </div>
        </div>
       </>
    );
};

export default ForWho;