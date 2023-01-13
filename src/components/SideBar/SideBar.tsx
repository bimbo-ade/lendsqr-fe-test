import "./SideBar.scss";
import briefcase from "../../assets/images/briefcase.png";
import dropdown from "../../assets/images/dropdown.png";
import descm from "../../assets/images/descm.png";
import guar from "../../assets/images/guar.png";
import home from "../../assets/images/home.png";
import userD from "../../assets/images/userD.png";
import loans from "../../assets/images/loans.png";
import karma from "../../assets/images/karma.png";
import loanM from "../../assets/images/loanM.png";
import piggy from "../../assets/images/piggy.png";
import whitel from "../../assets/images/whitel.png";
import bank from "../../assets/images/bank.png";
import galaxy from "../../assets/images/galaxy.png";
import coins from "../../assets/images/coins.png";
import reports from "../../assets/images/reports.png";
import servA from "../../assets/images/servA.png";
import settlem from "../../assets/images/settlem.png";
import trans from "../../assets/images/trans.png";
import pref from "../../assets/images/pref.png";
import free from "../../assets/images/free.png";
import audit from "../../assets/images/audit.png";
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
          <span>Dashboard</span>
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
              <img src={loanM} alt="" width={16} />
              <span>Loan Request</span>
            </div>{" "}
            <div className="section-link">
              <img src={piggy} alt="" width={16} />
              <span>Savings</span>
            </div>{" "}
            <div className="section-link">
              <img src={whitel} alt="" width={16} />
              <span>Whitelist</span>
            </div>{" "}
            <div className="section-link">
              <img src={karma} alt="" width={16} />
              <span>Karma</span>
            </div>
          </div>
          <div className="section">
            <p className="section-header">BUSINESSES</p>
            <div className="section-link">
              <img src={briefcase} alt="" width={16} />
              <span>Organisation</span>
            </div>

            <div className="section-link">
              <img src={loanM} alt="" width={16} />
              <span>Loan Products</span>
            </div>

            <div className="section-link">
              <img src={bank} alt="" width={16} />
              <span>Saving Products</span>
            </div>
            <div className="section-link">
              <img src={coins} alt="" width={16} />
              <span>Fee and Charges</span>
            </div>
            <div className="section-link">
              <img src={trans} alt="" width={16} />
              <span>Transactions</span>
            </div>
            <div className="section-link">
              <img src={galaxy} alt="" width={16} />
              <span>Services</span>
            </div>
            <div className="section-link">
              <img src={servA} alt="" width={16} />
              <span>Service Account</span>
            </div>
            <div className="section-link">
              <img src={settlem} alt="" width={16} />
              <span>Settlements</span>
            </div>
            <div className="section-link">
              <img src={reports} alt="" width={16} />
              <span>Reports</span>
            </div>
          </div>{" "}
          <div className="section">
            <p className="section-header">SETTING</p>
            <div className="section-link">
              <img src={pref} alt="" width={16} /> <span>Preference</span>
            </div>
            <div className="section-link">
              <img src={free} alt="" width={16} />
              <span>Fee And Pricing</span>
            </div>
            <div className="section-link">
              <img src={audit} alt="" width={16} />
              <span>Audit Logs</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
