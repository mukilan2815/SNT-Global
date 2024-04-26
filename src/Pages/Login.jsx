import React from "react";
import train from "./train.jpg";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen w-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className=" absolute bg-black opacity-50 w-full h-full"></div>
          <img src={train} alt="train" className="object-cover w-full h-full" />
        </div>
        <div className="absolute inset-1 -ml-[45%] flex items-center justify-center">
          <form className="mx-auto p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Login</h1>
            <input
              type="text"
              placeholder="Username"
              className="block outline-none w-full p-3 mb-4 rounded-lg bg-gray-200"
            />
            <input
              type="password"
              placeholder="Password"
              className="block w-full outline-none p-3 mb-4 rounded-lg bg-gray-200"
            />
            <input
              type="submit"
              value="Login"
              className="block w-full p-3 rounded-lg bg-blue-500 text-white cursor-pointer"
            />
          </form>
          <div className="flex-col -ml-[10%] text-center">
            <h1 className="font-bold text-white text-2xl">
              SIGNAL AND TELECOMMUNICATION{" "}
            </h1>
            <p className="font-semibold text-sm text-white">Podanur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
