import "./Features.scss";
import acUser from "../../assets/images/acUser.png";

import loUser from "../../assets/images/loUser.png";

import saUser from "../../assets/images/saUser.png";

import user from "../../assets/images/user.png";
const Features = () => {
  return (
    <>
      <h1>Users</h1>
      <div className="features-container">
        <div className="card">
          <img src={user} alt="user" width={40} />
          <h5>USER</h5>
          <h2>2,453</h2>
        </div>
        <div className="card">
          <img src={acUser} alt="active" width={40} />
          <h5> ACTIVE USERS</h5>
          <h2>2,453</h2>
        </div>
        <div className="card">
          <img src={loUser} alt="loans" width={40} />
          <h5>USERS WITH LOANS</h5>
          <h2>12,453</h2>
        </div>
        <div className="card">
          <img src={saUser} alt="savings" width={40} />
          <h5>USERS WITH SAVINGS</h5>
          <h2>102,543 </h2>
        </div>
      </div>{" "}
    </>
  );
};

export default Features;
