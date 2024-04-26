import React, { useState } from "react";
import { Link } from "react-router-dom";
import snt from "./snt.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

const Demandcreating = () => {
  const [formValues, setFormValues] = useState({
    product: "",
    number: null,
    quantity: null,
    nos: "NOS",
    consignee_name: "",
    consignee_officer: "",
    consignee_code: "",
    demand_code: "",
    allocation_number: "",
    accounts_unit: "",
  });
  const [error, setError] = useState(null);
  const handleSubmit1 = async () => {
    toast.success("Demand Request sent successfully");
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    let newValue = value;
    if (id === "product") {
      newValue = parseInt(value, 10);
    }

    setFormValues({ ...formValues, [id]: newValue });
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://64.227.134.220:8008/DemandRegister/",
        formValues,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("API Response:", response.data);
      toast.success("demand request sent successfully ");
    } catch (error) {
      console.error("Error making POST request:", error.response.data);
      setError(error.response.data);
      toast.error("Demand Request doesn't send ");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="h-screen dr overflow-y-hidden">
        <div className="flex items-center pt-10 justify-evenly overflow-y-hidden">
          <div>
            <h1 className="font-bold text-2xl text-white mb-10">
              Request the <span className="text-yellow-300">Demands </span>here
              <span className="text-blue-500"> .</span>
            </h1>
            <div className="flex flex-col mb-4">
              <input
                type="name"
                name="product"
                id="product"
                placeholder="Product Name"
                onChange={handleChange}
                style={{ backgroundColor: "#1a202c" }}
                className="flex-1 mb-4 focus:rounded-lg outline-none transition-all text-white border-black p-4"
              />
              <div className="flex mb-4">
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Number"
                  onChange={handleChange}
                  className="flex-1 mr-2 focus:rounded-lg outline-none transition-all text-white border-black p-4"
                  style={{ backgroundColor: "#1a202c" }}
                />
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  placeholder="QUANTITY"
                  onChange={handleChange}
                  className="flex-1 ml-2 focus:rounded-lg outline-none text-white transition-all border-black p-4"
                  style={{ backgroundColor: "#1a202c" }}
                />
                <select
                  name="unit"
                  id="unit"
                  onChange={handleChange}
                  className="flex-1 ml-2 focus:rounded-lg outline-none transition-all text-white border-black p-4"
                  style={{ backgroundColor: "#1a202c" }}
                >
                  <option value="NOS">NOS</option>
                  <option value="KG">KG</option>
                  <option value="L">L</option>
                </select>
              </div>

              <div className="flex mb-4">
                <input
                  type="text"
                  name="consignee_name"
                  id="consignee_name"
                  placeholder="CONSIGNEE"
                  onChange={handleChange}
                  className="flex-1 mr-2 focus:rounded-lg outline-none transition-all text-white border-black p-4"
                  style={{ backgroundColor: "#1a202c" }}
                />
                <input
                  type="text"
                  name="consignee_officer"
                  id="consignee_officer"
                  placeholder="CON.OFFICER"
                  onChange={handleChange}
                  className="flex-1 ml-2 focus:rounded-lg outline-none transition-all text-white border-black p-4"
                  style={{ backgroundColor: "#1a202c" }}
                />
              </div>
              <div className="flex mb-4">
                <input
                  type="text"
                  name="consignee"
                  id="consignee_code"
                  placeholder="CONSIGNEE Code"
                  onChange={handleChange}
                  className="flex-1 mr-2 focus:rounded-lg outline-none transition-all text-white border-black p-4"
                  style={{ backgroundColor: "#1a202c" }}
                />
                <input
                  type="text"
                  name="consignee"
                  id="demand_code"
                  placeholder="INDENT Code"
                  onChange={handleChange}
                  className="flex-1 ml-2 focus:rounded-lg outline-none transition-all text-white border-black p-4"
                  style={{ backgroundColor: "#1a202c" }}
                />
              </div>
              <div className="flex mb-4">
                <input
                  type="text"
                  name="consignee"
                  id="allocation_number"
                  placeholder="Allocation NUMBER"
                  onChange={handleChange}
                  className="flex-1 mr-2 focus:rounded-lg outline-none transition-all text-white border-black p-4"
                  style={{ backgroundColor: "#1a202c" }}
                />
                <input
                  type="text"
                  name="consignee"
                  id="accounts_unit"
                  placeholder="ACCOUNTS UNIT"
                  onChange={handleChange}
                  className="flex-1 ml-2 focus:rounded-lg outline-none transition-all text-white border-black p-4"
                  style={{ backgroundColor: "#1a202c" }}
                />
              </div>
              <textarea
                name="message"
                id="message"
                cols="10"
                rows="2"
                placeholder="Message"
                className="outline-none focus:rounded-lg transition-all mb-3 text-white border-black p-4"
                style={{ backgroundColor: "#1a202c" }}
              ></textarea>
              <div className="mb-4"></div>
              <button
                onClick={handleSubmit1}
                className="outline-none p-4 transition-all px-10 bg-yellow-400 font-bold rounded-md hover:shadow-lg hover:bg-yellow-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen">
        <ToastContainer />
      </div>
    </div>
  );
};

export default Demandcreating;
