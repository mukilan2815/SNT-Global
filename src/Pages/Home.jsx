import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../index.css";
import masstrain from "./masstrain.png";
import axios from "axios";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogin = async () => {
    localStorage.setItem("username", username); // store username in localStorage
    localStorage.setItem("password", password); // store password in localStorage
    try {
      const response = await axios.post(
        "http://64.227.134.220:8008/obtainAuthToken/",
        {
          username: username,
          password: password,
        }
      );

      const newToken = response.data.token;
      localStorage.setItem("token", newToken);

      setToken(newToken);
      console.log(localStorage.getItem("token"));
      window.location.reload(true);
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="background-container">
        <img src={masstrain} alt="train" className="background-image" />
        <div className="flex mt-36 justify-center items-center">
          {token ? (
            <p className="text-3xl font-bold text-white bg-red-300 mt-32">
              You are already logged in.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              className="flex flex-col justify-center items-center mt-20 bg-white p-10 ml-10 w-fit rounded-lg"
            >
              <h1 className="text-xl font-bold">Login</h1>
              <input
                type="text"
                className="border p-2 mb-2 focus:rounded-lg transition-all outline-none "
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                id="username"
                placeholder="Username"
              />
              <input
                type="password"
                className="border p-2 mb-2 focus:rounded-lg transition-all outline-none "
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="bg-red-300 rounded-sm p-2 text-white hover:rounded-lg transition-all"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mx-20 bg-white p-10 my-4 z-20">
        <h1
          id="#service"
          className="text-black text-2xl font-bold text-center z-20"
        >
          OUR SERVICES
        </h1>
        <div className="flex justify-evenly">
          <div className="text-center px-5">
            <h1 className="text-4xl syne">01</h1>
            <b className="heebo">Signaling Systems:</b> <br />
            <p className="syne text-justify">
              We specialize in the design, installation, and maintenance of
              advanced signaling systems. Our solutions ensure the safe and
              efficient movement of trains on the railway network.
            </p>
          </div>
          <div className="text-center px-5">
            <h1 className="text-4xl syne">02</h1>
            <b className="heebo">Telecommunication Networks:</b>
            <br />
            <p className="syne text-justify">
              Our department manages robust telecommunication infrastructure for
              seamless communication between railway personnel and control
              centers. We provide reliable voice and data communication
              solutions.
            </p>
          </div>
          <div className="text-center px-5">
            <h1 className="text-4xl syne">03</h1>
            <b className="heebo">Control Systems:</b> <br />
            <p className="syne text-justify">
              We implement and maintain cutting-edge control systems that
              monitor and manage train movements, track conditions, and other
              critical parameters, ensuring the highest levels of safety and
              efficiency.
            </p>
          </div>
        </div>
      </div>
      <div className=" mx-20 bg-white rounded-md p-8 text-black text-center shadow-lg">
        <h1 className="text-2xl font-bold ">Complain section</h1>
        <p className="text-lg my-2 text-justify px-5">
          If you find yourself encountering any uncertainties, facing issues
          with potentially flawed products, or harboring any other concerns or
          grievances, please don't hesitate to get in touch with us here; rest
          assured, our team of seasoned experts is committed to addressing your
          inquiries promptly and ensuring that you receive the assistance you
          need in a timely manner
        </p>
        <button className="text-white hover:rounded-none transition-all font-bold bg-indigo-600 hover:bg-indigo-700 p-3 rounded-md mt-4">
          RAISE A COMPLAINT ✍️
        </button>
      </div>
    </div>
  );
};

export default Home;
