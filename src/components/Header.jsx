import React from 'react';
import logo from '../assets/icon/quetz.png';
import { BiWallet, BiCartAlt, BiSearch } from 'react-icons/bi';

export default function Header() {
  return (
    <header className="bg-[#292929] p-4 flex justify-between items-center">
      {/* Espacio para el logo con una imagen */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo de la página"
          className="w-12 h-12 mr-2 rounded-sm"
        />
        <span className="text-white text-2xl font-semibold">QUETZ</span>
      </div>

      {/* Buscador */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="BUSCAR"
          className="rounded-l-sm p-2 w-96 focus:outline-none text-black"
        />
        <button className="bg-green-800 text-white p-2 w-14 rounded-r-sm flex items-center justify-center hover:bg-green-700 transition duration-150 ease-in">
          <BiSearch size={25} />
        </button>
      </div>

      {/* Botones estilizados */}
      <div className="space-x-14">
        <button className="hover:bg-neutral-700 text-white px-4 py-2 rounded-sm text-sm transition duration-150 ease-in">EXPLORAR</button>
        <button className="hover:bg-neutral-700 text-white px-4 py-2 rounded-sm text-sm transition duration-150 ease-in">EXPLORAR</button>
        <button className="hover:bg-neutral-700 text-white px-4 py-2 rounded-sm text-sm transition duration-150 ease-in">EXPLORAR</button>
        <button className="bg-green-800 text-white px-4 py-2 rounded-sm pr-8 pl-8 hover:bg-green-700 transition duration-150 ease-in">
          <BiWallet size={20} />
        </button>
        <button className="bg-green-800 text-white px-4 py-2 rounded-sm pr-8 pl-8 transition hover:bg-green-700 duration-150 ease-in">
          <BiCartAlt size={20} />
        </button>
      </div>
    </header>
  );
} 