import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import userService from "../service/userService";

const Dashboard = () => {
  const [users, setUsers] = useState();

  const getUser = async () => {
    try {
      const userData = await userService.getUsers();
      console.log(userData.data);
      const modifiedData = userData.data.map((data) => {
        data.fullname = `${data.firstname} ${data.lastname}`;
        // data.gender = data.gender[0].toUpperCase().remove(gender[0]).append('gender');
        return data;
      });
      console.log("Updated data", modifiedData);
      setUsers(modifiedData);
      setRecords(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const columns = [
    {
      name: "Full Name",
      selector: (row) => row.fullname,
      sortable: true,
    },
    {
      name: "Contact",
      selector: (row) => row.number,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Dob",
      selector: (row) => row.dob,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
  ];

  const [records, setRecords] = useState();

  const handleFilter = (e) => {
    const newData = users.filter((row) => {
      return row.fullname.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(newData);
  };

  return (
    <>
      <div className="bg-green-200">
        <div className="text-center font-medium font-abc text-4xl p-10">
          <h1>Employee Management Portal</h1>
        </div>
        <div className="text-end">
          <input
            className="border border-blue-950 rounded mr-5 font-abc h-8 w-60 pl-2"
            type="text"
            onChange={handleFilter}
            placeholder="Search data here..."
          ></input>
        </div>
        <div className="mt-2 font-abc text-lg">
          <DataTable
            columns={columns}
            data={records}
            pagination
            fixedHeader
            highlightOnHover
          ></DataTable>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
