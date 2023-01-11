import "./SideBar.scss";
function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <ul>
          <li className="head-text link">
            <span>Switch Organisation</span>
            <span></span>
          </li>
          <span>Dashboard</span>
          <div className="section-container">
            <div className="section">
              <p className="section-header">CUSTOMERS</p>
              <div className="section-link">
                icon <span>Users</span>
              </div>
              <div className="section-link">
                icon
                <span>Grantors</span>
              </div>
              <div className="section-link">
                icon
                <span>Loan</span>
              </div>{" "}
              <div className="section-link">
                icon
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
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
