import React from 'react';
import BodyImg from '../assets/img/chiapaneca.jpeg';
import BodyBg from '../assets/background/bg1.jpg';

export default function Body() {
  const backgroundStyle = {
    backgroundImage: `url(${BodyBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>
      {/* Imagen en el centro a la izquierda */}
      <div className="w-1/2 p-4 text-center">
        {/* Mantén la imagen existente para el contenido en la izquierda */}
        <img
          src={BodyImg}
          className="w-full p-20 shadow-sm" // Ajusta el tamaño máximo de la imagen
          alt="Imagen de contenido"
        />
      </div>

      {/* Texto en el centro a la derecha */}
      <div className="w-1/2 p-4 text-white">
        <h2 className="text-3xl font-bold mb-4">EXPLORA NFT</h2>
        <p className="mb-4 w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>
        <button className="bg-green-800 text-white px-4 py-2 w-36 rounded-md hover:bg-green-700 transition duration-150 ease-in">
          EXPLORAR
        </button>
      </div>
    </div>
  );
}