import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TableDetails.scss";

type userProps = {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
};

const TableDetails = () => {
  const [users, setUsers] = useState<userProps[]>([]);
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
    <div>
      <div className="character-info">
        <table className="table">
          <tr className="col">
            <th>
              {" "}
              <span> ORGANIZATION</span> icon{" "}
            </th>
            <th>
              {" "}
              <span> USERNAME</span> icon{" "}
            </th>
            <th>
              {" "}
              <span>EMAIL</span> ccon
            </th>
            <th>
              {" "}
              <span> PHONE NUMBER </span> icon
            </th>
            <th>
              {" "}
              <span>DATE JOINED </span>{" "}
            </th>
            <th>
              <span>STATUS </span> icon{" "}
            </th>
          </tr>
          {users.map((user) => {
            return (
              <tr key={user.userName} className="row">
                <td>{user.orgName}</td>
                <td>{user.userName}</td>

                <td>{user.email}</td>

                <td>{user.phoneNumber}</td>
                <td>{user.createdAt}</td>

                <td>{user.status}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default TableDetails;
