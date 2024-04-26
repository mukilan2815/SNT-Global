import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Complain1 = () => {
  const [values, setValues] = useState({
    consignee_name: "",
    reference: "",
    complaint: "",
    product: "",
    slnoItem: "",
    dom: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://64.227.134.220:8008/complaint1/",
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error making POST request:", error.response.data);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        style={{ backgroundColor: "#1a202c", padding: "50px" }}
        className="min-h-screen flex items-center justify-center"
      >
        <div
          style={{
            backgroundColor: "#2d3748",
            padding: "20px",
            borderRadius: "15px",
          }}
          className="shadow-lg w-96"
        >
          <h1 className="text-2xl font-semibold mb-4 text-white">
            Complaint Form
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <label className="block w-full text-white">
                Consignee Name:
                <input
                  type="text"
                  name="consignee_name"
                  value={values.consignee_name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 mt-1 rounded"
                />
              </label>
              <label className="block w-full text-white">
                Reference:
                <input
                  type="text"
                  name="reference"
                  value={values.reference}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 mt-1 rounded"
                />
              </label>
            </div>

            <label className="block mb-4 text-white">
              Complaint:
              <textarea
                name="complaint"
                value={values.complaint}
                onChange={handleChange}
                className="w-full border px-3 py-2 mt-1 rounded"
              />
            </label>
            <div className="flex space-x-4">
              <label className="block w-full text-white">
                Product:
                <input
                  type="text"
                  name="product"
                  value={values.product}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 mt-1 rounded"
                />
              </label>
              <label className="block w-full text-white">
                Serial Number/Item:
                <input
                  type="text"
                  name="slnoItem"
                  value={values.slnoItem}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 mt-1 rounded"
                />
              </label>
            </div>
            <label className="block mb-4 text-white">
              DOM:
              <input
                type="text"
                name="dom"
                value={values.dom}
                onChange={handleChange}
                className="w-full border px-3 py-2 mt-1 rounded"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Complain1;
