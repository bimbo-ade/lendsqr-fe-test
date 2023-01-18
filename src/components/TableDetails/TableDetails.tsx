import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./TableDetails.scss";

type userProps = {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
  row: any;
};

const TableDetails = () => {
  const [users, setUsers] = useState<userProps[]>([]);

  const [loading, setLoading] = useState(false);

  const columns = [
    {
      name: "ORGANIZATION",
      selector: (row: any) => row.orgName,
    },
    {
      name: "USERNAME",
      selector: (row: any) => row.userName,
    },
    {
      name: "EMAIL",
      selector: (row: any) => row.email,
    },
    {
      name: "PHONE NUMBER",
      selector: (row: any) => row.phoneNumber,
    },
    {
      name: "DATE JOINED",
      selector: (row: any) => row.createdAt,
    },
    {
      name: "STATUS",
      selector: (row: any) => row.status,
    },
  ];

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
        );
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  console.log(users);
  return (
    <>
      {" "}
      <DataTable
        title=""
        columns={columns}
        data={users}
        progressPending={loading}
        pagination
        className="table-cont"
      />
    </>
  );
};

export default TableDetails;
