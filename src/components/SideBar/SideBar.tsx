import "./SideBar.scss";
import briefcase from "../../assets/images/briefcase.png";

import dropdown from "../../assets/images/dropdown.png";

import descm from "../../assets/images/descm.png";

import guar from "../../assets/images/guar.png";

import home from "../../assets/images/home.png";

import userD from "../../assets/images/userD.png";

import loans from "../../assets/images/loans.png";

// import briefcase from "../../assets/images/briefcase.png";
function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="header">
          <img src={briefcase} alt="" width={16} />
          <span>Switch Organisation</span>
          <img src={dropdown} alt="" width={15} />
        </div>
        <div className="dash">
          <img src={home} alt="" width={16} />
          <h6>Dashboard</h6>
        </div>

        <div className="section-container">
          <div className="section">
            <p className="section-header">CUSTOMERS</p>
            <div className="section-link active">
              <img src={userD} alt="" width={16} /> <span>Users</span>
            </div>
            <div className="section-link">
              <img src={guar} alt="" width={16} /> <span>Grantors</span>
            </div>
            <div className="section-link">
              <img src={loans} alt="" width={16} />
              <span>Loan</span>
            </div>{" "}
            <div className="section-link">
              <img src={descm} alt="" width={16} />
              <span>Decision Model</span>
            </div>{" "}
            <div className="section-link">
              icon
              <span>Loan Request</span>
            </div>{" "}
            <div className="section-link">
              icon
              <span>Savings</span>
            </div>{" "}
            <div className="section-link">
              icon
              <span>Whitelist</span>
            </div>{" "}
            <div className="section-link">
              icon
              <span>Karma</span>
            </div>
          </div>
          <div className="section">
            <p className="section-header">BUSINESSES</p>
            <div className="section-link">
              icon
              <span>Organisation</span>
            </div>

            <div className="section-link">
              icon<span>Loan Products</span>
            </div>

            <div className="section-link">
              icon
              <span>Saving Products</span>
            </div>
            <div className="section-link">
              icon
              <span>Fee and Charges</span>
            </div>
            <div className="section-link">
              icon
              <span>Transactions</span>
            </div>
            <div className="section-link">
              icon
              <span>Services</span>
            </div>
            <div className="section-link">
              icon
              <span>Service Account</span>
            </div>
            <div className="section-link">
              icon
              <span>Settlements</span>
            </div>
            <div className="section-link">
              icon
              <span>Reports</span>
            </div>
          </div>{" "}
          <div className="section">
            <p className="section-header">SETTING</p>
            <div className="section-link">
              icon <span>Preference</span>
            </div>
            <div className="section-link">
              icon
              <span>Fee And Pricing</span>
            </div>
            <div className="section-link">
              icon
              <span>Audit Logs</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
