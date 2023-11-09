import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    // Lógica para manejar el registro
    console.log('Usuario:', username);
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
    console.log('Confirmar contraseña:', confirmPassword);
  };

  const handleGoogleLogin = () => {
    // Lógica para iniciar sesión con Google
    console.log('Iniciar sesión con Google');
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-2/4 p-8 bg-[#171717] rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-white text-center">Create Account</h2>
        {/* Formulario de registro */}
        <form className="flex flex-col items-center space-y-5">
          <div className="w-full max-w-lg">
            <label htmlFor="username" className="block text-sm font-normal text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-8 p-2 rounded-sm"
            />
          </div>

          <div className="w-full max-w-lg">
            <label htmlFor="email" className="block text-sm font-normal text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-8 p-2 rounded-sm"
            />
          </div>

          <div className="w-full max-w-lg">
            <label htmlFor="password" className="block text-sm font-normal text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-8 p-2 rounded-sm"
            />
          </div>

          <div className="w-full max-w-lg">
            <label htmlFor="confirmPassword" className="block text-sm font-normal text-white">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-8 p-2 rounded-sm"
            />
          </div>

          <button
            type="button"
            onClick={handleRegistration}
            className="bg-[#09724A] text-white px-4 mt-28 py-2 rounded-md w-4/12 flex items-center justify-center hover:bg-green-700 transition duration-150 ease-in"
          >
            Sign up
          </button>

          <div className="flex items-center w-full">
            <hr className="flex-1 border-t border-white" />
            <span className="mx-2 text-sm text-white">Or</span>
            <hr className="flex-1 border-t border-white" />
          </div>

          {/* Opción de iniciar sesión con Google */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="bg-white text-black px-4 py-2 rounded-2xl w-2/4 flex items-center justify-center hover:bg-gray-200 transition duration-150 ease-in"
          >
            <FcGoogle size={20} className="mr-2" />
            Continue with Google
          </button>
          <a className='mt-6 mx-2 text-white'>Already have an account?</a>
        </form>
      </div>
    </div>
  );
}
