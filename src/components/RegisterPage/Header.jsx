import React from 'react';
import { icon } from '../../assets/icon/index';

export default function Header() {
  return (
    <header className="bg-[#292929] p-4 flex justify-between items-center">
      {/* Espacio para el logo con una imagen */}
      <div className="flex items-center">
        <img
          src={icon.logo}
          alt="Logo de la página"
          className="w-12 h-12 mr-2 rounded-sm"
        />
        <span className="text-white text-2xl font-semibold">QUETZ</span>
      </div>
      {/* Botones estilizados */}
      <div className="space-x-14 mr-7">
        <button className="bg-[#09724A] text-white px-4 py-2 rounded-md pr-8 pl-8 transition hover:bg-green-700 duration-150 ease-in">Sign in</button>
      </div>
    </header>
  );
} 