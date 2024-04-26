import React, { useState, useEffect, useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import axios from "axios";

const DisplayDataFromAPI = () => {
  const [dataFromApi, setDataFromApi] = useState([
    {
      product: "Product 1",
      number: 123,
      quantity: 10,
      nos: "NOS 1",
      consignee_name: "Consignee Name 1",
      consignee_code: "Code 1",
      demand_code: "Demand Code 1",
      allocation_number: "Allocation Number 1",
      accounts_unit: "Accounts Unit 1",
      date: "2022-01-01",
    },
    {
      product: "Product 2",
      number: 456,
      quantity: 20,
      nos: "NOS 2",
      consignee_name: "Consignee Name 2",
      consignee_code: "Code 2",
      demand_code: "Demand Code 2",
      allocation_number: "Allocation Number 2",
      accounts_unit: "Accounts Unit 2",
      date: "2022-02-02",
    },
    // Add more fake data here
  ]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://64.227.134.220:8008/getDR/", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Token ${localStorage.getItem("token")}`,
  //         },
  //       });
  //       setDataFromApi(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data from API:", error.response.data);
  //       setError("Failed to fetch data from API");
  //     }
  //   };

  //   fetchData();
  // }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "product",
        header: "Product",
      },
      {
        accessorKey: "number",
        header: "Number",
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
      },
      {
        accessorKey: "nos",
        header: "NOS",
      },
      {
        accessorKey: "consignee_name",
        header: "Consignee Name",
      },
      {
        accessorKey: "consignee_code",
        header: "Consignee Code",
      },
      {
        accessorKey: "demand_code",
        header: "Demand Code",
      },
      {
        accessorKey: "allocation_number",
        header: "Allocation Number",
      },
      {
        accessorKey: "accounts_unit",
        header: "Accounts Unit",
      },
      {
        accessorKey: "date",
        header: "Date",
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data: dataFromApi,
  });

  return (
    <div className="h-screen">
      {error && <div>Error: {error}</div>}
      <MantineReactTable table={table} />
    </div>
  );
};

export default DisplayDataFromAPI;
