import React, { useEffect, useState } from "react";
import snt from "./snt.png";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [shownav, setShownav] = useState(false);
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      setShownav(!!token);
    };

    checkToken();

    const handleStorageChange = () => {
      checkToken();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const renderNavItems = () => {
    return shownav ? (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/demandcreating">Request Demand</a>
        </li>
        <Link to="/complaint1">Complaint</Link>
      </>
    ) : (
      <li>
        <Link to="/login">Login to Proceed</Link>
      </li>
    );
  };

  return (
    <nav className="flex fixed w-full z-50 justify-between px-10 p-2 py-3">
      <div>
        <Link to={`${shownav ? "" : "login"}`}>
          <div className="flex cursor-pointer items-center">
            <img src={snt} alt="" width={60} className="mr-5" height={60} />
            <Link to={"/"}>
              <h1 className="text-2xl text-white font-bold">
                Signal & Telecommunication
              </h1>
            </Link>
          </div>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex text-white font-bold">{renderNavItems()}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
