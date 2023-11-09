import React from 'react'
import BodyImg from '../assets/img/chiapaneca.jpeg'

export default function Body() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">

      {/* Imagen en el centro a la izquierda */}
      <div className="w-1/2 p-4 text-center">
        <img
          src={BodyImg}
          className="w-full p-20 shadow-sm" // Ajusta el tamaño máximo de la imagen
        />
      </div>

      {/* Texto en el centro a la derecha */}
      <div className="w-1/2 p-4 text-white">
        <h2 className="text-3xl font-bold mb-4">EXPLORA NFT</h2>
        <p className="mb-4 w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>
        <button className="bg-green-800 text-white px-4 py-2  w-36 rounded-md hover:bg-green-700 transition duration-150 ease-in">
          EXPLORAR
        </button>
      </div>

    </div>
  );
}
