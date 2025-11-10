import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className='place-self-center shadow-lg p-3 bg-[#27F5B0] rounded-lg mt-5 font-semibold'>
      <h1 className='mt-5 text-2xl text-red-500 mt-10'>Here is Mr. Quaye's Hero React Page </h1>
      <Button title="Send" color="white" bg="orange" />
    </div>
  );
};

export default Hero;
