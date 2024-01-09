import React from 'react';
import st from '../../assets/statictics.svg'

const Statistic = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className='mt-10 mb-5'>
    <p className="yellow-text-head">СТАТИСТИКА </p>
    <p className="yellow-text-head"> СОВРЕМЕННОГО </p>
    <p className="yellow-text-head">  БИЗНЕСА:</p>
      </div>

      <img
          src={st}
          alt="фото"
          className="brightness-[120%] relative "
        />
      
    </div>
  );
};

export default Statistic;