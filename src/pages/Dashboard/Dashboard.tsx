import "./Dashboard.scss";

import Features from "../../components/Features/Features";
import Sidebar from "../../components/SideBar/SideBar";
import Navbar from "../../components/Navbar/Navbar";
import TableDetails from "../../components/TableDetails/TableDetails";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <Features />
          <TableDetails />
        </div>
      </div>{" "}
    </>
  );
};

export default Dashboard;
