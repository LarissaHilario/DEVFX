import React from 'react'
import { icon } from '../../assets/icon/index';

export default function Footer() {
  return (
    <footer className="bg-[#292929] text-white p-4">
       <div className="flex items-center ">
      {/* Logo y nombre de la empresa en el lado izquierdo */}
          <div className="mr-4 w-full h-full flex row-span-3 items-center">
             <div className='flex items-center justify-start'>

              <img
                 src={icon.logo}
                className="w-14 h-14"
          
              />
              <span span className=" text-lg font-bold t-2">QUETZ</span>
            </div>
            <div className=" text-center flex items-center w-full">
                  <p className='text-center mr-24 w-full'>© Quetz, All rights reserved.</p>
            </div>
          </div>
        <div/> 
      </div>
  </footer>
);
};
 
