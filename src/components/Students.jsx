import React, { useEffect, useState } from "react";

import ReactTable from "react-table";

import "react-table/react-table.css";

const Students = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/", {
      method: "GET",
      headers: {},
      body: null,
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);

        setData(response);
      })
      .catch((err) => {
        console.log("helllllll", err);
      });
  }, []);

  const columns = [
    {
      Header: "Unique ID",
      accessor: "id",
    },
    {
      Header: "First Name",
      accessor: "fname",
    },
    {
      Header: "Last Name",
      accessor: "lname",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "DOB",
      accessor: "dob",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Country",
      accessor: "country",
    },
    {
      Header: "Delete",
      accessor: "toDelete",
      Cell: (row) => {
        const deleteHandler = (event) => {
          fetch("http://localhost:5000/delete", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: row.row.id }),
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setData(data);
            })
            .catch((err) => {
              console.log("helllllll", err);
            });

          // props.deleteData(row.row.id);
        };
        return <button onClick={deleteHandler}> Delete</button>;
      },
    },
  ];

  if (!data.length > 0) {
    return <h2>No Data.</h2>;
  }
  return <ReactTable data={data} columns={columns} />;
};

export default Students;
