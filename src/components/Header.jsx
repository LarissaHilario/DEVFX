import React from 'react'

export default function Header() {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      {/* Espacio para el logo */}
      <div className="text-white text-2xl font-bold">
        <span role="img" aria-label="logo">🚀</span> Logo
      </div>

      {/* Nombre de la página */}
      <div className="text-white text-2xl font-bold">
        Nombre de la Página
      </div>

      {/* Buscador */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Buscar..."
          className="rounded-l-md p-2 border border-r-0 focus:outline-none"
        />
        <button className="bg-blue-700 text-white p-2 rounded-r-md">Buscar</button>
      </div>

      {/* Botones estilizados */}
      <div className="space-x-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full">Botón 1</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full">Botón 2</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full">Botón 3</button>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-full">Botón 4</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full">Botón 5</button>
      </div>
    </header>
  );
};

